import { motion } from 'framer-motion';
import { Send, MapPin, Clock, Zap } from 'lucide-react';
import { useState } from 'react';
import TerminalWindow from '../components/TerminalWindow';

interface ContactSectionProps {
  onClose: () => void;
}

export default function ContactSection({ onClose }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [typing, setTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <TerminalWindow title="~/contact/send-message.sh" onClose={onClose} color="cyber-pink">
        <div className="font-mono text-sm space-y-6">
          <motion.div
            className="text-cyber-pink text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {'> '}./send-message.sh --interactive
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-cyber-text text-xs font-semibold">
                <span className="text-cyber-purple">## </span>Get In Touch
              </div>

              <p className="text-cyber-muted text-xs leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of something great. Let's build something amazing together.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', color: 'text-cyber-blue' },
                  { icon: Clock, label: 'Timezone', value: 'PST (UTC-8)', color: 'text-cyber-green' },
                  { icon: Zap, label: 'Response', value: 'Usually within 24h', color: 'text-cyber-yellow' },
                  { icon: Send, label: 'Email', value: 'alex@devportfolio.io', color: 'text-cyber-purple' },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-3 p-2 rounded-lg border border-cyber-border/20 bg-cyber-dark/30">
                    <Icon className={`w-4 h-4 ${color}`} />
                    <div>
                      <div className="text-[9px] text-cyber-muted tracking-wider">{label}</div>
                      <div className="text-xs text-cyber-text">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Terminal prompt style links */}
              <div className="p-3 rounded-lg border border-cyber-border/30 bg-cyber-black/50 space-y-1">
                <div className="text-[10px] text-cyber-green mb-2">{'> '}social.links</div>
                <div className="text-[11px] text-cyber-muted">
                  <span className="text-cyber-blue">github</span>: github.com/alexchen
                </div>
                <div className="text-[11px] text-cyber-muted">
                  <span className="text-cyber-blue">linkedin</span>: linkedin.com/in/alexchen
                </div>
                <div className="text-[11px] text-cyber-muted">
                  <span className="text-cyber-blue">twitter</span>: @alexchen_dev
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] text-cyber-muted tracking-wider block mb-1">
                      {'>'} NAME
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-cyber-black/80 border border-cyber-border/30 text-cyber-text text-xs font-mono focus:outline-none focus:border-cyber-blue/50 transition-colors placeholder:text-cyber-muted/40"
                      placeholder="enter your name..."
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-cyber-muted tracking-wider block mb-1">
                      {'>'} EMAIL
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-cyber-black/80 border border-cyber-border/30 text-cyber-text text-xs font-mono focus:outline-none focus:border-cyber-blue/50 transition-colors placeholder:text-cyber-muted/40"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-cyber-muted tracking-wider block mb-1">
                      {'>'} MESSAGE
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        setTyping(true);
                        setTimeout(() => setTyping(false), 1000);
                      }}
                      rows={5}
                      className="w-full px-3 py-2 rounded-lg bg-cyber-black/80 border border-cyber-border/30 text-cyber-text text-xs font-mono focus:outline-none focus:border-cyber-blue/50 transition-colors placeholder:text-cyber-muted/40 resize-none"
                      placeholder="type your message..."
                      required
                    />
                    {typing && (
                      <div className="text-[9px] text-cyber-green mt-1">● typing...</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs hover:bg-cyber-blue/20 hover:border-cyber-blue/50 transition-all duration-300 group"
                    style={{ boxShadow: '0 0 15px rgba(0, 212, 255, 0.1)' }}
                  >
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>TRANSMIT_MESSAGE</span>
                  </button>
                </form>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full border-2 border-cyber-green flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <span className="text-cyber-green text-2xl">✓</span>
                  </motion.div>
                  <div className="text-cyber-green text-sm text-glow-green">Message Transmitted</div>
                  <div className="text-cyber-muted text-[10px]">
                    {'>'} Signal received. I'll respond within 24 hours.
                  </div>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-[10px] text-cyber-blue hover:underline mt-4"
                  >
                    [ send another message ]
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}
