import { motion } from 'framer-motion';
import TerminalWindow from '../components/TerminalWindow';

interface SkillsSectionProps {
  onClose: () => void;
}

const skillCategories = [
  {
    name: 'LANGUAGES',
    icon: '⟨/⟩',
    color: 'cyber-blue',
    textClass: 'text-cyber-blue',
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'Rust', level: 60 },
      { name: 'Go', level: 55 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    name: 'FRONTEND',
    icon: '◈',
    color: 'cyber-purple',
    textClass: 'text-cyber-purple',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Vue.js / Nuxt', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Three.js / WebGL', level: 65 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Redux / Zustand', level: 85 },
    ],
  },
  {
    name: 'BACKEND',
    icon: '⬡',
    color: 'cyber-green',
    textClass: 'text-cyber-green',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'FastAPI / Django', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    name: 'DEVOPS & TOOLS',
    icon: '⚙',
    color: 'cyber-orange',
    textClass: 'text-cyber-orange',
    skills: [
      { name: 'Docker / K8s', level: 80 },
      { name: 'AWS / GCP', level: 75 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'Linux / Shell', level: 80 },
      { name: 'Terraform', level: 60 },
    ],
  },
];

const colorValues: Record<string, string> = {
  'cyber-blue': '#00d4ff',
  'cyber-green': '#00ff88',
  'cyber-purple': '#a855f7',
  'cyber-orange': '#ff6b35',
  'cyber-pink': '#ff0080',
};

export default function SkillsSection({ onClose }: SkillsSectionProps) {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <TerminalWindow title="~/skills/tech-stack.json" onClose={onClose} color="cyber-purple">
        <div className="font-mono text-sm space-y-6">
          <motion.div
            className="text-cyber-purple text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {'> '}parsing tech-stack.json... <span className="text-cyber-green">OK</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.name}
                className="border border-cyber-border/30 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * catIdx }}
              >
                <div className="px-4 py-2 bg-cyber-dark/50 border-b border-cyber-border/30 flex items-center gap-2">
                  <span className={category.textClass}>{category.icon}</span>
                  <span className={`${category.textClass} text-xs tracking-wider`}>{category.name}</span>
                </div>

                <div className="p-4 space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-cyber-text">{skill.name}</span>
                        <span className="text-cyber-muted">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-cyber-dark overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${colorValues[category.color]}88, ${colorValues[category.color]})`,
                            boxShadow: `0 0 6px ${colorValues[category.color]}40`,
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.3 + catIdx * 0.15 + skillIdx * 0.05,
                            ease: 'easeOut',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-cyber-border/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { label: 'Languages', value: '6', icon: '⟨/⟩' },
              { label: 'Frameworks', value: '8+', icon: '◈' },
              { label: 'Databases', value: '4', icon: '⬡' },
              { label: 'Cloud/DevOps', value: '6+', icon: '⚙' },
            ].map(({ label, value, icon }) => (
              <div key={label} className="text-center p-3 rounded-lg border border-cyber-border/20 bg-cyber-dark/30">
                <div className="text-lg mb-1">{icon}</div>
                <div className="text-cyber-blue font-bold text-lg">{value}</div>
                <div className="text-cyber-muted text-[9px] tracking-wider">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </TerminalWindow>
    </div>
  );
}
