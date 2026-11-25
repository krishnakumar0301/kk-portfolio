import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SocialLinks from './SocialLinks'
import { profile } from '../data/siteData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = `Portfolio enquiry from ${form.name}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('Your email app should open with the message ready to send.')
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="06 / CONNECT"
          title="Contact"
          description="Have an opportunity, a dataset or an idea worth discussing? Let's connect."
        />

        <div className="contact-grid">
          <Reveal className="contact-intro">
            <span className="card-tag">LET&apos;S BUILD SOMETHING MEANINGFUL</span>
            <h3>Turning conversations into insight.</h3>
            <p>
              I&apos;m open to data analyst internships, entry-level roles and collaborative projects.
              Send a note and I&apos;ll get back to you.
            </p>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} strokeWidth={1.8} />
                {profile.email}
              </a>
              <span>
                <MapPin size={18} strokeWidth={1.8} />
                {profile.location}
              </span>
            </div>
            <div className="contact-social">
              <SocialLinks includeMail />
            </div>
            <a className="contact-availability" href={`mailto:${profile.email}`}>
              <span className="status-dot" />
              {profile.availability}
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </Reveal>

          <Reveal className="contact-form-card" delay={0.08}>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about the opportunity or idea..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="form-footer">
                <button className="btn btn-primary" type="submit">
                  Send Message
                  <Send size={16} strokeWidth={2} />
                </button>
                <p className="form-status" aria-live="polite">
                  {status}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
