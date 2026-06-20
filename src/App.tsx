import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MouseTrail from './components/MouseTrail';
import GridBackground from './components/GridBackground';
import DesktopBox from './components/DesktopBox';
import Taskbar, { type Section } from './components/Taskbar';
import TopBar from './components/TopBar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [showContent, setShowContent] = useState(false);

  const handleDesktopOpen = () => {
    setDesktopOpen(true);
    setTimeout(() => setShowContent(true), 300);
  };

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
  };

  const handleCloseSection = () => {
    setActiveSection('home');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeSection !== 'home') {
          setActiveSection('home');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-cyber-black crt-effect">
      {/* Background layers */}
      <GridBackground />
      <MouseTrail />

      {/* Scan line overlay */}
      <div className="scanline-overlay" />

      {/* Corner decorations */}
      <CornerDecorations />

      {/* Boot sequence / Desktop box */}
      <DesktopBox isOpen={desktopOpen} onOpen={handleDesktopOpen} />

      {/* Main Desktop Environment */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="fixed inset-0 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ zIndex: 10 }}
          >
            <TopBar />

            {/* Main content area */}
            <div className="flex-1 overflow-y-auto pt-12 pb-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="py-8"
                >
                  {activeSection === 'home' && (
                    <HomeSection onNavigate={handleSectionChange} />
                  )}
                  {activeSection === 'about' && (
                    <AboutSection onClose={handleCloseSection} />
                  )}
                  {activeSection === 'experience' && (
                    <ExperienceSection onClose={handleCloseSection} />
                  )}
                  {activeSection === 'skills' && (
                    <SkillsSection onClose={handleCloseSection} />
                  )}
                  {activeSection === 'projects' && (
                    <ProjectsSection onClose={handleCloseSection} />
                  )}
                  {activeSection === 'contact' && (
                    <ContactSection onClose={handleCloseSection} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <Taskbar activeSection={activeSection} onSectionChange={handleSectionChange} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CornerDecorations() {
  return (
    <>
      {/* Top-left corner */}
      <div className="fixed top-4 left-4 pointer-events-none" style={{ zIndex: 5 }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 30 L0 0 L30 0" stroke="rgba(0, 212, 255, 0.15)" strokeWidth="1" />
          <circle cx="0" cy="0" r="2" fill="rgba(0, 212, 255, 0.3)" />
        </svg>
      </div>
      {/* Top-right corner */}
      <div className="fixed top-4 right-4 pointer-events-none" style={{ zIndex: 5 }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 30 L60 0 L30 0" stroke="rgba(0, 212, 255, 0.15)" strokeWidth="1" />
          <circle cx="60" cy="0" r="2" fill="rgba(0, 212, 255, 0.3)" />
        </svg>
      </div>
      {/* Bottom-left corner */}
      <div className="fixed bottom-4 left-4 pointer-events-none" style={{ zIndex: 5 }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M0 30 L0 60 L30 60" stroke="rgba(0, 212, 255, 0.15)" strokeWidth="1" />
          <circle cx="0" cy="60" r="2" fill="rgba(0, 212, 255, 0.3)" />
        </svg>
      </div>
      {/* Bottom-right corner */}
      <div className="fixed bottom-4 right-4 pointer-events-none" style={{ zIndex: 5 }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M60 30 L60 60 L30 60" stroke="rgba(0, 212, 255, 0.15)" strokeWidth="1" />
          <circle cx="60" cy="60" r="2" fill="rgba(0, 212, 255, 0.3)" />
        </svg>
      </div>
    </>
  );
}
