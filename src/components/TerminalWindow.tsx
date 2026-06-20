import { motion } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';
import { ReactNode } from 'react';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  color?: string;
  delay?: number;
}

export default function TerminalWindow({ title, children, onClose, color = 'cyber-blue', delay = 0 }: TerminalWindowProps) {
  const colorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
    'cyber-blue': {
      border: 'border-cyber-blue/30',
      text: 'text-cyber-blue',
      bg: 'bg-cyber-blue',
      glow: '0 0 20px rgba(0, 212, 255, 0.15)',
    },
    'cyber-green': {
      border: 'border-cyber-green/30',
      text: 'text-cyber-green',
      bg: 'bg-cyber-green',
      glow: '0 0 20px rgba(0, 255, 136, 0.15)',
    },
    'cyber-purple': {
      border: 'border-cyber-purple/30',
      text: 'text-cyber-purple',
      bg: 'bg-cyber-purple',
      glow: '0 0 20px rgba(168, 85, 247, 0.15)',
    },
    'cyber-pink': {
      border: 'border-cyber-pink/30',
      text: 'text-cyber-pink',
      bg: 'bg-cyber-pink',
      glow: '0 0 20px rgba(255, 0, 128, 0.15)',
    },
    'cyber-orange': {
      border: 'border-cyber-orange/30',
      text: 'text-cyber-orange',
      bg: 'bg-cyber-orange',
      glow: '0 0 20px rgba(255, 107, 53, 0.15)',
    },
  };

  const colors = colorMap[color] || colorMap['cyber-blue'];

  return (
    <motion.div
      className={`w-full rounded-lg border ${colors.border} overflow-hidden backdrop-blur-sm`}
      style={{
        background: 'linear-gradient(180deg, rgba(18, 18, 26, 0.95), rgba(10, 10, 15, 0.98))',
        boxShadow: colors.glow,
      }}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {/* Title bar */}
      <div className={`flex items-center justify-between px-4 py-2 border-b ${colors.border} bg-cyber-dark/50`}>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors flex items-center justify-center group"
            >
              <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100" />
            </button>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className={`font-mono text-xs ${colors.text} tracking-wider`}>
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2 text-cyber-muted">
          <Minus className="w-3 h-3" />
          <Square className="w-3 h-3" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 max-h-[60vh] overflow-y-auto">
        {children}
      </div>
    </motion.div>
  );
}
