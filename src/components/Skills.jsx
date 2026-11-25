import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import SkillCard from './SkillCard'
import { skillCategories } from '../data/siteData'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          eyebrow="02 / CAPABILITIES"
          title="Technical Expertise"
          description="A focused toolkit for collecting, cleaning, analyzing and presenting data."
        />

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Reveal key={category.id} delay={index * 0.05}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
