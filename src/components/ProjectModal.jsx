import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const statusClass = project.status.toLowerCase().replace(/\s+/g, '-')

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
    >
      <motion.div
        className={`modal-panel accent-${project.accent}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 26, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close project overview">
          <X size={19} />
        </button>
        <span className="modal-kicker">PROJECT {project.number} / OVERVIEW</span>
        <h3 id="project-modal-title">{project.title}</h3>
        <span className={`project-status ${statusClass}`}>{project.status}</span>
        <p>{project.description}</p>

        <div className="modal-section">
          <h4>What the project covers</h4>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>
                <Check size={15} strokeWidth={2.2} />
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        {project.tech.length > 0 ? (
          <div className="modal-section">
            <h4>Toolkit</h4>
            <div className="modal-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ) : null}

        <button type="button" className="btn btn-primary modal-done" onClick={onClose}>
          Close overview
        </button>
      </motion.div>
    </motion.div>
  )
}
