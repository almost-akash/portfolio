import { motion } from 'framer-motion';
import { Wifi, Battery, Signal, Shield, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TopBar() {
  const [time, setTime] = useState(new Date());
  const [cpu, setCpu] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setCpu(Math.floor(20 + Math.random() * 40));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-2 border-b border-cyber-border/30 backdrop-blur-md"
      style={{
        background: 'linear-gradient(180deg, rgba(10, 10, 15, 0.9), rgba(10, 10, 15, 0.7))',
        zIndex: 50,
      }}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left - System info */}
      <div className="flex items-center gap-4 font-mono text-[10px] text-cyber-muted">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3 h-3 text-cyber-green" />
          <span className="text-cyber-green">SECURE</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-cyber-blue" />
          <span>CPU: {cpu}%</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          <span className="text-cyber-purple">PID: 2026</span>
        </div>
      </div>

      {/* Center - Title */}
      <div className="font-mono text-[11px] text-cyber-blue tracking-[0.3em]">
        PORTFOLIO_OS
      </div>

      {/* Right - Status */}
      <div className="flex items-center gap-4 font-mono text-[10px] text-cyber-muted">
        <div className="hidden sm:flex items-center gap-1.5">
          <Wifi className="w-3 h-3" />
          <span>CONNECTED</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3 h-3 text-cyber-green" />
        </div>
        <div className="flex items-center gap-1.5">
          <Battery className="w-3 h-3" />
          <span>98%</span>
        </div>
        <div className="text-cyber-text">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
      </div>
    </motion.div>
  );
}
