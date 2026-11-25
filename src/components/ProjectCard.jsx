import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ProjectChart from './ProjectChart'

export default function ProjectCard({ project, onOpen }) {
  const statusClass = project.status.toLowerCase().replace(/\s+/g, '-')

  return (
    <motion.article
      className={`project-card accent-${project.accent} ${project.featured ? 'project-featured' : ''}`}
      whileHover={{ y: -7 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
    >
      <div className="project-thumb">
        <div className="thumb-header">
          <span>PROJECT {project.number}</span>
          <span className="thumb-header-right">
            <span className={`project-status ${statusClass}`}>{project.status}</span>
            <span className="thumb-window" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </span>
        </div>
        <ProjectChart type={project.chart} />
      </div>

      <div className="project-body">
        {project.tech.length > 0 ? (
          <div className="project-badges">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-actions">
          <button type="button" className="project-link" onClick={onOpen}>
            View case study
            <ArrowUpRight size={17} strokeWidth={2} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
