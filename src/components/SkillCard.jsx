import { motion } from 'framer-motion'
import { BarChart3, Braces, Code2, Database, Globe2, PieChart, Sparkles } from 'lucide-react'

const iconMap = {
  code: Code2,
  chart: BarChart3,
  pie: PieChart,
  database: Database,
  globe: Globe2,
  sparkles: Sparkles,
}

export default function SkillCard({ category }) {
  const Icon = iconMap[category.icon] || Braces

  return (
    <motion.article
      className={`skill-card accent-${category.accent}`}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <div className="skill-card-top">
        <span className="skill-icon">
          <Icon size={21} strokeWidth={1.8} />
        </span>
        <span className="skill-count">{String(category.skills.length).padStart(2, '0')}</span>
      </div>
      <h3>{category.title}</h3>
      <div className="skill-items">
        {category.skills.map((skill) => (
          <div className="skill-item" key={`${category.id}-${skill.name}`}>
            <span className="skill-dot" aria-hidden="true" />
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </motion.article>
  )
}
