import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork } from 'lucide-react';
import TerminalWindow from '../components/TerminalWindow';

interface ProjectsSectionProps {
  onClose: () => void;
}

const projects = [
  {
    name: 'CloudSync Platform',
    description: 'Real-time collaboration platform with conflict-free replicated data types (CRDTs). Handles thousands of concurrent users with sub-100ms latency.',
    tech: ['TypeScript', 'React', 'WebSocket', 'Redis', 'PostgreSQL'],
    stars: 234,
    forks: 45,
    status: 'PRODUCTION',
    statusColor: 'text-cyber-green',
    category: 'Full-Stack',
  },
  {
    name: 'DevFlow CLI',
    description: 'Developer productivity tool that automates git workflows, code reviews, and deployment pipelines. Used by 500+ developers daily.',
    tech: ['Rust', 'Shell', 'GitHub API', 'Docker'],
    stars: 892,
    forks: 127,
    status: 'OPEN SOURCE',
    statusColor: 'text-cyber-blue',
    category: 'CLI Tool',
  },
  {
    name: 'NeuralCanvas',
    description: 'AI-powered design tool that generates UI components from natural language descriptions. Integrates with Figma and VS Code.',
    tech: ['Python', 'FastAPI', 'React', 'OpenAI', 'WebGL'],
    stars: 1243,
    forks: 189,
    status: 'BETA',
    statusColor: 'text-cyber-orange',
    category: 'AI/ML',
  },
  {
    name: 'MetricsHub',
    description: 'Lightweight application performance monitoring dashboard. Real-time metrics visualization with customizable alerting rules.',
    tech: ['Go', 'React', 'InfluxDB', 'Grafana', 'Docker'],
    stars: 567,
    forks: 83,
    status: 'PRODUCTION',
    statusColor: 'text-cyber-green',
    category: 'DevOps',
  },
  {
    name: 'PixelForge',
    description: 'Browser-based 3D model viewer and editor with real-time lighting. Built with WebGL and custom shaders for photorealistic rendering.',
    tech: ['Three.js', 'WebGL', 'GLSL', 'TypeScript', 'Wasm'],
    stars: 345,
    forks: 52,
    status: 'ACTIVE',
    statusColor: 'text-cyber-purple',
    category: 'Graphics',
  },
  {
    name: 'AuthGuard',
    description: 'Zero-trust authentication middleware with OAuth2, SAML, and passwordless auth. Drop-in solution for Node.js applications.',
    tech: ['Node.js', 'JWT', 'OAuth2', 'Redis', 'PostgreSQL'],
    stars: 678,
    forks: 94,
    status: 'STABLE',
    statusColor: 'text-cyber-green',
    category: 'Security',
  },
];

export default function ProjectsSection({ onClose }: ProjectsSectionProps) {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <TerminalWindow title="~/projects/showcase.dir" onClose={onClose} color="cyber-orange">
        <div className="font-mono text-sm space-y-4">
          <motion.div
            className="text-cyber-orange text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {'> '}ls -la ~/projects/ --sort=stars
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="group border border-cyber-border/30 rounded-lg overflow-hidden hover:border-cyber-blue/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-cyber-dark/50 border-b border-cyber-border/30">
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-text text-xs font-semibold">{project.name}</span>
                    <span className="px-1.5 py-0.5 text-[8px] rounded border border-cyber-border/30 text-cyber-muted">
                      {project.category}
                    </span>
                  </div>
                  <span className={`text-[9px] ${project.statusColor}`}>{project.status}</span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <p className="text-cyber-muted text-[11px] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 text-[9px] rounded bg-cyber-blue/5 border border-cyber-blue/20 text-cyber-blue"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer stats */}
                  <div className="flex items-center justify-between pt-2 border-t border-cyber-border/20">
                    <div className="flex items-center gap-4 text-[10px] text-cyber-muted">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-cyber-yellow" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-[10px] text-cyber-blue hover:text-cyber-text transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <span>VIEW</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center pt-4 border-t border-cyber-border/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-cyber-muted text-[10px]">
              {'> '}Showing 6 of 40+ projects • 
              <a href="#" className="text-cyber-blue hover:underline ml-1">View all on GitHub →</a>
            </span>
          </motion.div>
        </div>
      </TerminalWindow>
    </div>
  );
}
