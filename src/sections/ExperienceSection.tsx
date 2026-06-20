import { motion } from 'framer-motion';
import TerminalWindow from '../components/TerminalWindow';

interface ExperienceSectionProps {
  onClose: () => void;
}

const experiences = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'TechCorp Inc.',
    period: '2023 — Present',
    status: 'ACTIVE',
    colorClass: 'text-cyber-green',
    description: 'Leading the platform engineering team. Architecting microservices, building CI/CD pipelines, and scaling systems to handle 10M+ daily requests.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    achievements: [
      'Reduced API latency by 60% through query optimization',
      'Led migration from monolith to microservices architecture',
      'Built real-time notification system serving 2M+ users',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'StartupXYZ',
    period: '2021 — 2023',
    status: 'COMPLETED',
    colorClass: 'text-cyber-blue',
    description: 'Built core product features from 0 to 1. Worked across the entire stack from database design to frontend implementation.',
    tech: ['React', 'Python', 'FastAPI', 'MongoDB', 'Redis', 'GCP'],
    achievements: [
      'Shipped v1.0 product that acquired 50K users in 3 months',
      'Implemented real-time collaboration features',
      'Built automated testing pipeline reducing bugs by 40%',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'DigitalAgency Co.',
    period: '2019 — 2021',
    status: 'COMPLETED',
    colorClass: 'text-cyber-purple',
    description: 'Developed responsive web applications for enterprise clients. Focused on performance, accessibility, and modern UI/UX patterns.',
    tech: ['React', 'Vue.js', 'SCSS', 'GraphQL', 'Firebase'],
    achievements: [
      'Delivered 15+ client projects on time and under budget',
      'Improved average page load time by 45%',
      'Introduced component library used across all projects',
    ],
  },
];

export default function ExperienceSection({ onClose }: ExperienceSectionProps) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <TerminalWindow title="~/experience/career.log" onClose={onClose} color="cyber-green">
        <div className="font-mono text-sm space-y-6">
          <motion.div
            className="text-cyber-green text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {'> '}cat career.log | sort --reverse
          </motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border border-cyber-border/30 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-cyber-dark/50 border-b border-cyber-border/30">
                <div className="flex items-center gap-3">
                  <span className={`${exp.colorClass} text-xs font-semibold`}>{exp.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-[9px] rounded border ${
                    exp.status === 'ACTIVE'
                      ? 'border-cyber-green/30 text-cyber-green bg-cyber-green/5'
                      : 'border-cyber-muted/30 text-cyber-muted bg-cyber-muted/5'
                  }`}>
                    {exp.status}
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyber-text">@ {exp.company}</span>
                  <span className="text-cyber-muted">{exp.period}</span>
                </div>

                <p className="text-cyber-muted text-xs leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] rounded border border-cyber-border/40 text-cyber-blue bg-cyber-blue/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-1 pt-2 border-t border-cyber-border/20">
                  {exp.achievements.map((a, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-cyber-muted">
                      <span className="text-cyber-green mt-0.5">✓</span>
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="text-cyber-muted text-[10px] pt-4 border-t border-cyber-border/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {'> '}Total experience: 5+ years | Companies: 3 | Status: Actively growing
          </motion.div>
        </div>
      </TerminalWindow>
    </div>
  );
}
