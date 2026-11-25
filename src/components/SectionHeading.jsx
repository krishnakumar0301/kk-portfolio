import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="section-title">
        {title}
        <span className="title-dot">.</span>
      </h2>
      {description ? <p className="section-description">{description}</p> : null}
      <span className="heading-rule" aria-hidden="true" />
    </Reveal>
  )
}
