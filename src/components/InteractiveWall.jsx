import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function InteractiveWall({ 
  works, 
  onSelectProject, 
  resetTrigger = 0 
}) {
  const containerRef = useRef(null);
  const stateRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    globeGroup: null,
    clusterMeshes: [],
    raycaster: new THREE.Raycaster(),
    mouse: new THREE.Vector2(-100, -100),
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    rotationVelocity: { x: 0, y: 0 },
    targetRotation: { x: 0.35, y: 0 },
    currentRotation: { x: 0.35, y: 0 },
    cameraAltitude: 1450,
    targetAltitude: 1450,
    hoveredCluster: null,
  });

  const [hoveredWork, setHoveredWork] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Handle camera reset
  useEffect(() => {
    if (resetTrigger > 0) {
      stateRef.current.targetRotation = { x: 0.35, y: 0 };
      stateRef.current.targetAltitude = 1450;
    }
  }, [resetTrigger]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Three.js Scene with dark atmospheric background
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x181616);
    scene.fog = new THREE.FogExp2(0x181616, 0.00035);
    stateRef.current.scene = scene;

    // 2. Perspective Camera angled down towards the curved globe horizon
    const camera = new THREE.PerspectiveCamera(42, width / height, 10, 8000);
    camera.position.set(0, 680, 1450);
    camera.lookAt(0, -100, 0);
    stateRef.current.camera = camera;

    // 3. High Performance Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    stateRef.current.renderer = renderer;

    // 4. Globe Parent Group (Rotates with user drag)
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    stateRef.current.globeGroup = globeGroup;

    // Base Sphere Radius
    const GLOBE_RADIUS = 1600;

    // 5. Draw the Curved Globe Surface & Longitude/Latitude Wireframe Grid
    // Solid dark sphere core to occlude backside clusters
    const coreGeom = new THREE.SphereGeometry(GLOBE_RADIUS - 1, 64, 48);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x181616 });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    globeGroup.add(coreMesh);

    // Coordinate Wireframe Lines Grid
    const gridLinesGroup = new THREE.Group();
    const lineMat = new THREE.LineBasicMaterial({ 
      color: 0x46443d, 
      transparent: true, 
      opacity: 0.45 
    });

    // Latitude circles
    for (let lat = -80; lat <= 80; lat += 8) {
      const phi = (90 - lat) * (Math.PI / 180);
      const r = GLOBE_RADIUS * Math.sin(phi);
      const y = GLOBE_RADIUS * Math.cos(phi);
      const points = [];
      const segments = 96;
      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta)));
      }
      const latGeom = new THREE.BufferGeometry().setFromPoints(points);
      const latLine = new THREE.Line(latGeom, lineMat);
      gridLinesGroup.add(latLine);
    }

    // Longitude meridians
    for (let lon = 0; lon < 360; lon += 10) {
      const theta = lon * (Math.PI / 180);
      const points = [];
      const segments = 96;
      for (let s = 0; s <= segments; s++) {
        const phi = (s / segments) * Math.PI;
        points.push(new THREE.Vector3(
          GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta),
          GLOBE_RADIUS * Math.cos(phi),
          GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta)
        ));
      }
      const lonGeom = new THREE.BufferGeometry().setFromPoints(points);
      const lonLine = new THREE.Line(lonGeom, lineMat);
      gridLinesGroup.add(lonLine);
    }
    globeGroup.add(gridLinesGroup);

    // 6. Floating Monospace Coordinate Labels on the Globe Surface
    function createCoordinateSprite(text) {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 64;
      const ctx = c.getContext('2d');
      ctx.fillStyle = 'rgba(255, 253, 219, 0.35)';
      ctx.font = '22px "Roboto Mono", monospace';
      ctx.fillText(text, 10, 40);
      const tex = new THREE.CanvasTexture(c);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(160, 40, 1);
      return sprite;
    }

    const coords = [
      { text: '82.536665', phi: 1.1, theta: 0.4 },
      { text: '-78.066861', phi: 1.15, theta: -0.6 },
      { text: '40.712776', phi: 0.95, theta: 1.2 },
      { text: '-74.005974', phi: 1.35, theta: -1.3 },
      { text: '51.507351', phi: 0.8, theta: 2.2 },
      { text: '35.676192', phi: 1.4, theta: 2.9 },
    ];
    coords.forEach(coord => {
      const sp = createCoordinateSprite(coord.text);
      const r = GLOBE_RADIUS + 5;
      sp.position.set(
        r * Math.sin(coord.phi) * Math.cos(coord.theta),
        r * Math.cos(coord.phi),
        r * Math.sin(coord.phi) * Math.sin(coord.theta)
      );
      globeGroup.add(sp);
    });

    // 7. Build Project Clusters (Multi-Tile Mosaic for each project)
    const textureLoader = new THREE.TextureLoader();
    const clusterMeshes = [];

    // Helper: Canvas texture generator for Title / Branding tile
    function createTitleTileTexture(title, industry) {
      const c = document.createElement('canvas');
      c.width = 512;
      c.height = 256;
      const ctx = c.getContext('2d');

      // Dark card surface with subtle gradient
      ctx.fillStyle = '#221f1f';
      ctx.fillRect(0, 0, 512, 256);

      // Subtle border
      ctx.strokeStyle = 'rgba(70, 68, 61, 0.6)';
      ctx.lineWidth = 4;
      ctx.strokeRect(4, 4, 504, 248);

      // Accent pill / tag
      ctx.fillStyle = '#ff3831';
      ctx.font = 'bold 22px "Roboto Mono", monospace';
      ctx.fillText(industry.toUpperCase(), 35, 60);

      // Big Serif Project Title
      ctx.fillStyle = '#fffddb';
      ctx.font = 'bold 44px "TAN MEMORIES", "serif", serif';
      const displayTitle = title.length > 15 ? title.slice(0, 14) + '…' : title;
      ctx.fillText(displayTitle.toUpperCase(), 35, 145);

      return new THREE.CanvasTexture(c);
    }

    // Helper: Texture placeholder
    function createPlaceholderTexture(color = '#272424') {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 256, 256);
      ctx.strokeStyle = 'rgba(255, 253, 219, 0.08)';
      ctx.lineWidth = 2;
      ctx.strokeRect(2, 2, 252, 252);
      return new THREE.CanvasTexture(c);
    }

    // Arrange clusters evenly around the sphere
    const count = works.length;
    works.forEach((work, i) => {
      // Golden Spiral / Fibonacci distribution on the sphere surface
      const phi = Math.acos(-1 + (2 * (i + 0.5)) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const r = GLOBE_RADIUS + 4;

      const clusterCenter = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );

      // Normal vector pointing straight out from sphere center
      const normal = clusterCenter.clone().normalize();

      // Cluster parent object oriented tangentially to the sphere
      const clusterObj = new THREE.Group();
      clusterObj.position.copy(clusterCenter);

      // Orient so cluster's Z axis points along the sphere normal
      const up = new THREE.Vector3(0, 1, 0);
      const right = new THREE.Vector3().crossVectors(up, normal).normalize();
      const localUp = new THREE.Vector3().crossVectors(normal, right).normalize();
      const rotMatrix = new THREE.Matrix4().makeBasis(right, localUp, normal);
      clusterObj.rotation.setFromRotationMatrix(rotMatrix);

      // Cluster Dimensions: 6 tiles in a 2-row mosaic
      // Row 1: Tile 0 (wide 2x1), Tile 1 (1x1), Tile 2 (1x1)
      // Row 2: Tile 3 (1x1), Tile 4 (1x1), Tile 5 (wide 2x1)
      const baseUnit = 72; // width unit for 1x1 tile
      const gap = 4;
      const wideW = baseUnit * 2 + gap;

      const tileConfigs = [
        // Row 1
        { x: - (baseUnit + gap / 2), y: (baseUnit / 2 + gap / 2), w: wideW, h: baseUnit, isTitle: true },
        { x: (baseUnit / 2 + gap / 2), y: (baseUnit / 2 + gap / 2), w: baseUnit, h: baseUnit },
        { x: (baseUnit * 1.5 + gap * 1.5), y: (baseUnit / 2 + gap / 2), w: baseUnit, h: baseUnit },
        // Row 2
        { x: - (baseUnit * 1.5 + gap * 1.5), y: - (baseUnit / 2 + gap / 2), w: baseUnit, h: baseUnit },
        { x: - (baseUnit / 2 + gap / 2), y: - (baseUnit / 2 + gap / 2), w: baseUnit, h: baseUnit },
        { x: (baseUnit + gap / 2), y: - (baseUnit / 2 + gap / 2), w: wideW, h: baseUnit },
      ];

      // Media assets for this project
      const galleryItems = [
        work.src,
        ...(work.gallery || []).map(g => g.src || g.card)
      ].filter(Boolean);

      tileConfigs.forEach((cfg, tileIdx) => {
        const geom = new THREE.PlaneGeometry(cfg.w, cfg.h);
        let mat;

        if (cfg.isTitle) {
          const tex = createTitleTileTexture(work.title, work.industry);
          mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide });
        } else {
          mat = new THREE.MeshBasicMaterial({
            map: createPlaceholderTexture(),
            side: THREE.DoubleSide
          });

          // Load image asset
          const imgUrl = galleryItems[tileIdx % galleryItems.length];
          if (imgUrl) {
            textureLoader.load(imgUrl, (loadedTex) => {
              loadedTex.colorSpace = THREE.SRGBColorSpace;
              loadedTex.minFilter = THREE.LinearFilter;
              loadedTex.generateMipmaps = false;
              mat.map = loadedTex;
              mat.needsUpdate = true;
            });
          }
        }

        const tileMesh = new THREE.Mesh(geom, mat);
        tileMesh.position.set(cfg.x, cfg.y, 1);
        tileMesh.userData = {
          work: work,
          clusterIndex: i,
          tileIndex: tileIdx,
          parentCluster: clusterObj,
        };

        clusterObj.add(tileMesh);
        clusterMeshes.push(tileMesh);
      });

      globeGroup.add(clusterObj);
    });

    stateRef.current.clusterMeshes = clusterMeshes;

    // 8. Interaction & Controls (Drag to rotate sphere, inertia, zoom)
    let lastX = 0;
    let lastY = 0;

    const onPointerDown = (e) => {
      stateRef.current.isDragging = true;
      stateRef.current.dragStart = { x: e.clientX, y: e.clientY };
      lastX = e.clientX;
      lastY = e.clientY;
      stateRef.current.rotationVelocity = { x: 0, y: 0 };
    };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      stateRef.current.mouse.x = (clientX / rect.width) * 2 - 1;
      stateRef.current.mouse.y = -(clientY / rect.height) * 2 + 1;

      setCursorPos({ x: e.clientX, y: e.clientY });

      if (stateRef.current.isDragging) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;

        // Rotate sphere
        stateRef.current.targetRotation.y += deltaX * 0.0035;
        stateRef.current.targetRotation.x += deltaY * 0.0035;

        // Clamp latitude so user doesn't flip completely upside down
        stateRef.current.targetRotation.x = Math.max(
          -Math.PI / 2.5,
          Math.min(Math.PI / 2.5, stateRef.current.targetRotation.x)
        );

        stateRef.current.rotationVelocity = {
          x: deltaY * 0.001,
          y: deltaX * 0.001,
        };

        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    const onPointerUp = (e) => {
      const dist = Math.hypot(
        e.clientX - stateRef.current.dragStart.x,
        e.clientY - stateRef.current.dragStart.y
      );

      stateRef.current.isDragging = false;

      // Click detected if not dragging
      if (dist < 8) {
        const { raycaster, mouse, camera, clusterMeshes } = stateRef.current;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(clusterMeshes);

        if (intersects.length > 0) {
          const hit = intersects[0].object;
          if (hit.userData.work) {
            onSelectProject(hit.userData.work);
          }
        }
      }
    };

    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.9;
      stateRef.current.targetAltitude = Math.max(
        1100,
        Math.min(2200, stateRef.current.targetAltitude + delta)
      );
      // Slight horizontal spin on scroll
      stateRef.current.targetRotation.y += e.deltaY * 0.0006;
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 9. Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      const state = stateRef.current;
      const { camera, renderer, scene, globeGroup, clusterMeshes, raycaster, mouse } = state;

      // Inertia & slow idle orbit
      if (!state.isDragging) {
        state.targetRotation.y += state.rotationVelocity.y;
        state.targetRotation.x += state.rotationVelocity.x;
        state.rotationVelocity.x *= 0.94;
        state.rotationVelocity.y *= 0.94;

        if (Math.abs(state.rotationVelocity.y) < 0.0001) {
          state.targetRotation.y += 0.0005; // Gentle planetary spin
        }
      }

      // Smooth interpolation
      state.currentRotation.x += (state.targetRotation.x - state.currentRotation.x) * 0.08;
      state.currentRotation.y += (state.targetRotation.y - state.currentRotation.y) * 0.08;
      state.cameraAltitude += (state.targetAltitude - state.cameraAltitude) * 0.08;

      // Apply rotation to the entire globe
      globeGroup.rotation.x = state.currentRotation.x;
      globeGroup.rotation.y = state.currentRotation.y;

      // Position camera
      camera.position.set(0, 680 * (state.cameraAltitude / 1450), state.cameraAltitude);
      camera.lookAt(0, -100, 0);

      // Raycasting for hover state
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(clusterMeshes);

      let currentHitWork = null;
      if (intersects.length > 0 && !state.isDragging) {
        currentHitWork = intersects[0].object.userData.work;
      }
      setHoveredWork(currentHitWork);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', onResize);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [works]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none cursor-grab active:cursor-grabbing">
      <div ref={containerRef} className="w-full h-full" />

      {/* Floating Hover Tooltip */}
      {hoveredWork && (
        <div 
          className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-full mb-4 px-16 py-8 rounded-10 bg-black/90 border border-ink/30 backdrop-blur-md shadow-2xl transition-opacity duration-150"
          style={{ 
            left: `${cursorPos.x}px`, 
            top: `${cursorPos.y - 15}px` 
          }}
        >
          <p className="font-serif text-[1.8rem] text-ink whitespace-nowrap uppercase">
            {hoveredWork.title}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[1.1rem] font-mono text-accent uppercase tracking-wider">
              {hoveredWork.industry}
            </span>
            <span className="text-ink/40 text-[1.1rem]">•</span>
            <span className="text-[1.1rem] font-mono text-ink/70">
              {hoveredWork.services?.[0] || 'Branding'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
