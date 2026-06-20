import { motion } from 'framer-motion';
import { ChevronRight, FileText } from 'lucide-react';
import type { Section } from '../components/Taskbar';

interface HomeSectionProps {
  onNavigate: (section: Section) => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Glitch title */}
        <motion.div
          className="mb-2 font-mono text-xs text-cyber-green tracking-[0.5em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {'> hello, world'}
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-7xl font-bold mb-4 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-cyber-text">I'm </span>
          <span className="text-cyber-blue text-glow-blue">Alex Chen</span>
        </motion.h1>

        <motion.div
          className="font-mono text-lg sm:text-xl text-cyber-muted mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-cyber-purple">const</span>{' '}
          <span className="text-cyber-text">role</span>{' '}
          <span className="text-cyber-pink">=</span>{' '}
          <span className="text-cyber-green">"Full-Stack Developer"</span>
          <motion.span
            className="inline-block w-2.5 h-5 bg-cyber-blue ml-1 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          className="text-cyber-muted max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Building performant, scalable, and beautiful digital experiences.
          Passionate about clean architecture, modern tooling, and pushing the boundaries
          of what's possible on the web.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <button
            onClick={() => onNavigate('projects')}
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue font-mono text-sm hover:bg-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300"
            style={{ boxShadow: '0 0 15px rgba(0, 212, 255, 0.1)' }}
          >
            <span>VIEW_PROJECTS</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-cyber-border text-cyber-text font-mono text-sm hover:border-cyber-purple/50 hover:text-cyber-purple transition-all duration-300"
          >
            <span>CONTACT_ME</span>
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          {[
            { icon: FileText, label: 'GitHub', href: '#' },
            { icon: FileText, label: 'LinkedIn', href: '#' },
            { icon: FileText, label: 'Resume', href: '#' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 text-cyber-muted hover:text-cyber-blue transition-colors font-mono text-xs group"
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline group-hover:underline underline-offset-4">{label}</span>
            </a>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {[
            { value: '5+', label: 'Years Exp' },
            { value: '40+', label: 'Projects' },
            { value: '15+', label: 'Tech Stack' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-cyber-blue text-glow-blue font-mono">{value}</div>
              <div className="text-[10px] text-cyber-muted font-mono tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
