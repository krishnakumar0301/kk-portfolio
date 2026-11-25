import { ArrowUp } from 'lucide-react'
import { profile } from '../data/siteData'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-message">
          <a className="footer-brand" href="#home">
            <span className="brand-mark">{profile.initials}</span>
            <span>{profile.displayName}</span>
          </a>
          <h2 className="footer-heading">Think. Build. Innovate.</h2>
          <p className="footer-subtitle">Turning ideas into innovative digital solutions.</p>
        </div>

        <div className="footer-actions">
          <SocialLinks includeMail className="footer-socials" />
          <a className="back-to-top" href="#home" aria-label="Back to top">
            <ArrowUp size={17} strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  )
}
