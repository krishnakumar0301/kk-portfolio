import { ArrowUpRight, Download, FileText, GraduationCap, Layers3, Mail, UserRound } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile } from '../data/siteData'

const resumeHighlights = [
  { icon: UserRound, label: 'Profile summary and contact details' },
  { icon: GraduationCap, label: 'Education background' },
  { icon: Layers3, label: 'Technical skills and toolkit' },
  { icon: FileText, label: 'Featured project experience' },
]

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <SectionHeading
          eyebrow="05 / DOCUMENT"
          title="Resume"
          description="A concise snapshot of my background, skills and project work."
        />

        <div className="resume-grid">
          <Reveal className="resume-card">
            <div className="resume-file">
              <div className="file-glow" aria-hidden="true" />
              <FileText size={38} strokeWidth={1.4} />
              <span>PDF</span>
            </div>
            <div className="resume-copy">
              <span className="card-tag">ONE-PAGE OVERVIEW</span>
              <h3>Krishna Kumar — Resume</h3>
              <p>
                Download the resume to explore my education, technical toolkit and project experience
                in a clean, print-ready format.
              </p>
              <div className="resume-actions">
                <a className="btn btn-primary" href={profile.resume} download>
                  <Download size={17} strokeWidth={2} />
                  Download Resume
                </a>
                <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">
                  Open PDF
                  <ArrowUpRight size={16} strokeWidth={2} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="resume-details" delay={0.08}>
            <span className="card-tag">INSIDE THE DOCUMENT</span>
            <div className="resume-list">
              {resumeHighlights.map(({ icon: Icon, label }) => (
                <div className="resume-list-item" key={label}>
                  <span className="resume-list-icon">
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                  {label}
                </div>
              ))}
            </div>
            <a className="resume-email" href={`mailto:${profile.email}`}>
              <Mail size={16} strokeWidth={1.8} />
              {profile.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
