import { BookOpen, GraduationCap, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { education, learningFocus, profile } from '../data/siteData'

const educationIcons = {
  graduation: GraduationCap,
  book: BookOpen,
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading
          eyebrow="01 / OVERVIEW"
          title="About Me"
          description="My background, current focus, and the path ahead."
        />

        <Reveal className="about-lead">
          <h3>
            Passionate About Technology, <span>Cloud &amp; AI.</span>
          </h3>
          <p>{profile.about}</p>
        </Reveal>

        <div className="education-layout">
          <div className="timeline">
            {education.map((item, index) => {
              const Icon = educationIcons[item.icon] || GraduationCap
              const status = item.status === 'Pursuing' ? 'Currently Pursuing' : item.status
              return (
                <Reveal key={item.id} delay={index * 0.08}>
                  <article className="timeline-card">
                    <span className="timeline-node" aria-hidden="true" />
                    <div className="timeline-icon">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-meta">
                        <span className="timeline-period">{item.period}</span>
                        <span className={`timeline-status ${item.status.toLowerCase()}`}>{status}</span>
                      </div>
                      <h3>{item.degree}</h3>
                      <p className="timeline-detail">{item.detail}</p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="focus-panel" delay={0.12}>
            <div className="focus-panel-top">
              <span className="card-tag">LEARNING FOCUS</span>
              <Sparkles size={20} strokeWidth={1.7} />
            </div>
            <h3>Learning, building, and growing every day.</h3>
            <p>
              Exploring cloud platforms, artificial intelligence, and modern software development through hands-on projects and continuous practice.
            </p>
            <div className="focus-tags">
              {learningFocus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="focus-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
