import { motion } from 'framer-motion';
import { User, Briefcase, Code2, FolderOpen, Mail, Terminal, Home } from 'lucide-react';

export type Section = 'home' | 'about' | 'experience' | 'skills' | 'projects' | 'contact';

interface TaskbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const navItems: { id: Section; icon: typeof User; label: string }[] = [
  { id: 'home', icon: Home, label: 'HOME' },
  { id: 'about', icon: User, label: 'ABOUT' },
  { id: 'experience', icon: Briefcase, label: 'EXP' },
  { id: 'skills', icon: Code2, label: 'SKILLS' },
  { id: 'projects', icon: FolderOpen, label: 'WORK' },
  { id: 'contact', icon: Mail, label: 'CONTACT' },
];

export default function Taskbar({ activeSection, onSectionChange }: TaskbarProps) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 flex justify-center pb-4"
      style={{ zIndex: 50 }}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div
        className="flex items-center gap-1 px-2 py-2 rounded-2xl border border-cyber-border/50 backdrop-blur-xl"
        style={{
          background: 'linear-gradient(180deg, rgba(18, 18, 26, 0.9), rgba(10, 10, 15, 0.95))',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 212, 255, 0.05)',
        }}
      >
        {navItems.map(({ id, icon: Icon, label }) => {
          const isActive = activeSection === id;
          return (
            <motion.button
              key={id}
              onClick={() => onSectionChange(id)}
              className={`relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'text-cyber-blue'
                  : 'text-cyber-muted hover:text-cyber-text'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20"
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" strokeWidth={1.5} />
              <span className="text-[9px] font-mono tracking-wider relative z-10">{label}</span>
              {isActive && (
                <motion.div
                  className="absolute -bottom-1 w-1 h-1 rounded-full bg-cyber-blue"
                  layoutId="activeDot"
                  style={{ boxShadow: '0 0 6px rgba(0, 212, 255, 0.8)' }}
                />
              )}
            </motion.button>
          );
        })}

        {/* System tray */}
        <div className="ml-2 pl-2 border-l border-cyber-border/30 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyber-green/50" />
          <div className="font-mono text-[10px] text-cyber-muted">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
