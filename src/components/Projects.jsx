import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/siteData'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="03 / WORK"
          title="Featured Projects"
          description="A collection of projects demonstrating my technical knowledge and problem-solving skills."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setSelected(project)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? <ProjectModal project={selected} onClose={() => setSelected(null)} /> : null}
      </AnimatePresence>
    </section>
  )
}
