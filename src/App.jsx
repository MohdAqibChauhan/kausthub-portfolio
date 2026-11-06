import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import InteractiveWall from './components/InteractiveWall';
import ProjectDetailModal from './components/ProjectDetailModal';
import AboutPanel from './components/AboutPanel';
import ContactPanel from './components/ContactPanel';
import ProjectsMenu from './components/ProjectsMenu';
import NewsTicker from './components/NewsTicker';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [selectedProject, setSelectedProject] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);

  // Sync state with URL
  const parsePath = useCallback((pathname) => {
    setCurrentPath(pathname);
    
    if (pathname === '/about') {
      setAboutOpen(true);
      setContactOpen(false);
      setSelectedProject(null);
    } else if (pathname === '/contact') {
      setContactOpen(true);
      setAboutOpen(false);
      setSelectedProject(null);
    } else if (pathname.startsWith('/projects/')) {
      const slug = pathname.replace('/projects/', '').replace(/\/$/, '');
      const found = PORTFOLIO_DATA.works.find(w => w.slug === slug);
      if (found) {
        setSelectedProject(found);
        setAboutOpen(false);
        setContactOpen(false);
      }
    } else {
      setAboutOpen(false);
      setContactOpen(false);
      setSelectedProject(null);
    }
  }, []);

  useEffect(() => {
    parsePath(window.location.pathname);

    const handlePopState = () => {
      parsePath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parsePath]);

  // Navigate helper that updates history
  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      parsePath(path);
    }
  };

  // Selection handlers
  const handleSelectProject = (project) => {
    setSelectedProject(project);
    navigate(`/projects/${project.slug}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    navigate('/');
  };

  const handleToggleAbout = () => {
    if (aboutOpen) {
      navigate('/');
    } else {
      navigate('/about');
    }
  };

  const handleToggleContact = () => {
    if (contactOpen) {
      navigate('/');
    } else {
      navigate('/contact');
    }
  };

  const handleResetView = () => {
    setResetTrigger(prev => prev + 1);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-ink select-none font-sans">
      
      {/* 1. Exact Header Grid */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onResetView={handleResetView}
        aboutOpen={aboutOpen}
        contactOpen={contactOpen}
        onToggleAbout={handleToggleAbout}
        onToggleContact={handleToggleContact}
      />

      {/* 2. Interactive Curved Globe with Wireframe Coordinate Grid & Project Clusters */}
      <main className="absolute inset-0 pt-[var(--head,5.5rem)] s:pt-180 z-10">
        <InteractiveWall
          works={PORTFOLIO_DATA.works}
          onSelectProject={handleSelectProject}
          resetTrigger={resetTrigger}
        />
      </main>

      {/* 3. Floating Pill News Ticker centered at bottom */}
      <NewsTicker
        news={PORTFOLIO_DATA.news}
      />

      {/* 4. Project Detail View Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          allProjects={PORTFOLIO_DATA.works}
          onClose={handleCloseProject}
          onSelectProject={handleSelectProject}
        />
      )}

      {/* 5. About Slide-over Drawer */}
      <AboutPanel
        isOpen={aboutOpen}
        onClose={() => navigate('/')}
        onOpenContact={() => navigate('/contact')}
        services={PORTFOLIO_DATA.services}
      />

      {/* 6. Contact Slide-over Drawer */}
      <ContactPanel
        isOpen={contactOpen}
        onClose={() => navigate('/')}
      />

      {/* 7. Projects Index Menu */}
      <ProjectsMenu
        isOpen={projectsMenuOpen}
        onClose={() => setProjectsMenuOpen(false)}
        projects={PORTFOLIO_DATA.works}
        onSelectProject={handleSelectProject}
      />

    </div>
  );
}
