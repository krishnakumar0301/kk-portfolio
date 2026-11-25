import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/siteData'

export default function SocialLinks({ includeMail = false, className = '' }) {
  return (
    <div className={`social-links ${className}`.trim()} aria-label="Social links">
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
        <Github size={18} strokeWidth={1.8} />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <Linkedin size={18} strokeWidth={1.8} />
      </a>
      {includeMail ? (
        <a href={`mailto:${profile.email}`} aria-label="Email Krishna Kumar">
          <Mail size={18} strokeWidth={1.8} />
        </a>
      ) : null}
    </div>
  )
}
