import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Power, Cpu, HardDrive, Wifi } from 'lucide-react';
import { useState, useEffect } from 'react';

interface DesktopBoxProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function DesktopBox({ isOpen, onOpen }: DesktopBoxProps) {
  const [bootPhase, setBootPhase] = useState(0);
  const [statusTexts, setStatusTexts] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setBootPhase(0);
      setStatusTexts([]);
    }
  }, [isOpen]);

  const bootMessages = [
    '> Initializing system...',
    '> Loading kernel modules...',
    '> Mounting file systems...',
    '> Starting network services...',
    '> Loading portfolio data...',
    '> System ready.',
  ];

  const handleClick = () => {
    if (isOpen) return;
    setBootPhase(1);
    
    let idx = 0;
    const interval = setInterval(() => {
      if (idx < bootMessages.length) {
        setStatusTexts(prev => [...prev, bootMessages[idx]]);
        idx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onOpen();
        }, 400);
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 10 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative">
            {/* Ambient glow behind the box */}
            <motion.div
              className="absolute -inset-20 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* The Desktop/Monitor Box */}
            <motion.div
              className="relative cursor-pointer group"
              onClick={handleClick}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={bootPhase === 0 ? { scale: 1.02 } : {}}
            >
              {/* Monitor Body */}
              <motion.div
                className="relative w-[420px] h-[300px] rounded-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #1a1a2e, #0f0f1a)',
                  border: '2px solid rgba(0, 212, 255, 0.2)',
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.1), inset 0 0 30px rgba(0, 0, 0, 0.5)',
                }}
                animate={bootPhase === 0 ? {
                  boxShadow: [
                    '0 0 30px rgba(0, 212, 255, 0.1), inset 0 0 30px rgba(0, 0, 0, 0.5)',
                    '0 0 40px rgba(0, 212, 255, 0.2), inset 0 0 30px rgba(0, 0, 0, 0.5)',
                    '0 0 30px rgba(0, 212, 255, 0.1), inset 0 0 30px rgba(0, 0, 0, 0.5)',
                  ],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Screen bezel */}
                <div className="absolute inset-2 rounded-lg overflow-hidden bg-cyber-black">
                  {/* Screen content */}
                  <div className="w-full h-full p-4 font-mono text-xs">
                    {bootPhase === 0 ? (
                      // Idle screen
                      <div className="flex flex-col items-center justify-center h-full gap-4">
                        <motion.div
                          animate={{ 
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Monitor className="w-16 h-16 text-cyber-blue" strokeWidth={1} />
                        </motion.div>
                        <div className="text-cyber-blue text-glow-blue text-sm font-semibold tracking-widest">
                          DEV://PORTFOLIO
                        </div>
                        <div className="text-cyber-muted text-[10px] tracking-[0.3em] uppercase mt-2">
                          Click to initialize
                        </div>
                        <motion.div
                          className="flex items-center gap-2 mt-4"
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Power className="w-3 h-3 text-cyber-green" />
                          <span className="text-cyber-green text-[10px]">STANDBY</span>
                        </motion.div>
                      </div>
                    ) : (
                      // Boot sequence
                      <div className="flex flex-col gap-1 text-cyber-green">
                        <div className="text-cyber-blue mb-2 text-[10px]">
                          ╔══════════════════════════════════════╗
                          <br />
                          ║&nbsp;&nbsp;&nbsp;&nbsp;PORTFOLIO OS v2.0.26 — BOOTING&nbsp;&nbsp;&nbsp;&nbsp;║
                          <br />
                          ╚══════════════════════════════════════╝
                        </div>
                        {statusTexts.map((text, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[11px]"
                          >
                            {text}
                          </motion.div>
                        ))}
                        <motion.span
                          className="inline-block w-2 h-3 bg-cyber-green mt-1"
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Status LEDs */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-cyber-green"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-cyber-blue"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Monitor Stand */}
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-8"
                  style={{
                    background: 'linear-gradient(180deg, #1a1a2e, #12121a)',
                    borderLeft: '1px solid rgba(0, 212, 255, 0.1)',
                    borderRight: '1px solid rgba(0, 212, 255, 0.1)',
                  }}
                />
                <div
                  className="w-40 h-3 rounded-b-lg"
                  style={{
                    background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)',
                    border: '1px solid rgba(0, 212, 255, 0.1)',
                    borderTop: 'none',
                  }}
                />
              </div>

              {/* Floating tech indicators */}
              <motion.div
                className="absolute -right-16 top-4 flex flex-col gap-3 text-[9px] font-mono text-cyber-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-cyber-blue" />
                  <span>CPU</span>
                </div>
                <div className="flex items-center gap-1">
                  <HardDrive className="w-3 h-3 text-cyber-purple" />
                  <span>SSD</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wifi className="w-3 h-3 text-cyber-green" />
                  <span>NET</span>
                </div>
              </motion.div>

              {/* Version tag */}
              <motion.div
                className="absolute -left-20 bottom-8 font-mono text-[9px] text-cyber-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.5 }}
              >
                <div>BUILD: 2026.1</div>
                <div>STATUS: READY</div>
              </motion.div>

              {/* Hover hint */}
              {bootPhase === 0 && (
                <motion.div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-cyber-muted text-xs font-mono tracking-widest">
                    [ CLICK TO POWER ON ]
                  </span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
