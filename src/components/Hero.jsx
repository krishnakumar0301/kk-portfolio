import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import SocialLinks from './SocialLinks'
import { profile } from '../data/siteData'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const float = (duration, distance) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -distance, 0] },
          transition: { duration, repeat: Infinity, ease: 'easeInOut' },
        }

  return (
    <section className="section hero-section" id="home">
      <div className="hero-aurora" aria-hidden="true">
        <span className="aurora-one" />
        <span className="aurora-two" />
        <span className="aurora-three" />
      </div>
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="hero-eyebrow">
              <span className="pulse-dot" />
              {profile.intro}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="hero-title">
              KRISHNA
              <span>KUMAR</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="hero-description">{profile.description}</p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore My Projects
                <ArrowRight size={17} strokeWidth={2} />
              </a>
              <a className="btn btn-ghost" href={profile.resume} download>
                <Download size={17} strokeWidth={2} />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="hero-bottom">
              <div className="hero-status">
                <span className="status-chip">
                  <span className="status-dot" />
                  {profile.availability}
                </span>
                <span className="location-chip">
                  <MapPin size={14} strokeWidth={1.8} />
                  {profile.location}
                </span>
              </div>
              <SocialLinks className="hero-socials" />
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={0.18}>
          <div className="visual-ring ring-one" aria-hidden="true" />
          <div className="visual-ring ring-two" aria-hidden="true" />

          <motion.div
            className="profile-card"
            {...float(6.5, 12)}
            whileHover={reduceMotion ? undefined : { scale: 1.025 }}
          >
            <div className="profile-card-inner">
              <img
                className="profile-photo"
                src={profile.image}
                alt="Krishna Kumar - Data Analyst"
                fetchPriority="high"
              />
              <div className="profile-overlay">
                <span className="profile-label">{profile.displayName}</span>
                <span className="profile-role">{profile.role}</span>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
        <span className="scroll-cue-line" />
        SCROLL
      </a>
    </section>
  )
}
