const fs = require('fs');
const entry = fs.readFileSync('entry.js', 'utf8');

console.log('Includes webgpu:', entry.includes('webgpu') || entry.includes('navigator.gpu'));
console.log('Includes three:', entry.includes('three') || entry.includes('THREE'));
console.log('Includes regl:', entry.includes('regl'));
console.log('Includes ogl:', entry.includes('OGL'));
console.log('Includes twgl:', entry.includes('twgl'));
console.log('Includes pixi:', entry.includes('pixi'));

// Search for shaders or glsl
const shaderMatches = [...entry.matchAll(/(?:precision\s+mediump|void\s+main|struct\s+Vertex|@vertex|@fragment|gl_Position)[^;"']*/gi)].map(m => m[0]);
console.log('Shader snippets found:', shaderMatches.slice(0, 10));

// Search for WebGPU keywords
const gpuMatches = [...entry.matchAll(/requestAdapter|requestDevice|createRenderPipeline|createShaderModule|createBindGroup/g)].map(m => m[0]);
console.log('WebGPU API calls:', gpuMatches);
