import { motion } from 'framer-motion';
import TerminalWindow from '../components/TerminalWindow';

interface AboutSectionProps {
  onClose: () => void;
}

export default function AboutSection({ onClose }: AboutSectionProps) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <TerminalWindow title="~/about/README.md" onClose={onClose} color="cyber-blue">
        <div className="font-mono text-sm space-y-4">
          {/* ASCII header */}
          <motion.pre
            className="text-cyber-blue text-[10px] sm:text-xs leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
{`
 █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗
██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
███████║██████╔╝██║   ██║██║   ██║   ██║   
██╔══██║██╔══██╗██║   ██║██║   ██║   ██║   
██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║   
╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝   
`}
          </motion.pre>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <span className="text-cyber-purple">## </span>
              <span className="text-cyber-text font-semibold">Who Am I</span>
            </div>

            <p className="text-cyber-muted leading-relaxed text-xs sm:text-sm">
              I'm a passionate full-stack developer with 5+ years of experience building 
              production-grade applications. I specialize in building scalable web platforms, 
              real-time systems, and developer tooling that teams actually love using.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-3 rounded-lg border border-cyber-border/30 bg-cyber-black/50">
                <div className="text-cyber-green text-xs mb-2">{'> '}personal.info</div>
                <div className="space-y-1 text-xs text-cyber-muted">
                  <div><span className="text-cyber-purple">name:</span> Alex Chen</div>
                  <div><span className="text-cyber-purple">location:</span> San Francisco, CA</div>
                  <div><span className="text-cyber-purple">education:</span> B.S. Computer Science</div>
                  <div><span className="text-cyber-purple">languages:</span> English, Mandarin</div>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-cyber-border/30 bg-cyber-black/50">
                <div className="text-cyber-green text-xs mb-2">{'> '}interests.list</div>
                <div className="space-y-1 text-xs text-cyber-muted">
                  <div>→ Open Source Contributions</div>
                  <div>→ System Design & Architecture</div>
                  <div>→ Performance Optimization</div>
                  <div>→ Building Dev Tools</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg border border-cyber-blue/20 bg-cyber-blue/5">
              <div className="text-cyber-blue text-xs mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                Currently
              </div>
              <p className="text-cyber-muted text-xs">
                Working on distributed systems at scale. Building tools that make developers 
                more productive. Contributing to open-source projects and mentoring junior engineers.
              </p>
            </div>
          </motion.div>
        </div>
      </TerminalWindow>
    </div>
  );
}
