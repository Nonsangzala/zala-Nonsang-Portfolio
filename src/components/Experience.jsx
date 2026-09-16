import React from 'react'
import '../styles/experience.css'

const experienceItems = [
  {
    period: '2021 - Present',
    role: 'Full Stack Developer & Software Developer',
    type: '3+ Years Experience',
    description:
      'Building modern websites and applications with clean UI, responsive layouts, backend functionality, database integration, and professional deployment support.',
    points: ['Website Creation', 'Application Development', 'Frontend & Backend', 'Client-focused delivery']
  },
  {
    period: '2020 - 2024',
    role: 'Bachelor Of Computer Science And Applications',
    type: 'Education Foundation',
    description:
      'Completed computer science studies from Gokul Global University, Sidhpur, Gujarat with a strong focus on programming, software concepts, and web technologies.',
    points: ['Programming Basics', 'Web Development', 'Database Concepts', 'Software Development']
  }
]

const processSteps = [
  {
    number: '1',
    title: 'Discuss',
    text: 'We discuss your requirements'
  },
  {
    number: '2',
    title: 'Design',
    text: 'I design the plan for your project'
  },
  {
    number: '3',
    title: 'Development',
    text: 'I develop your website'
  },
  {
    number: '4',
    title: 'Testing',
    text: 'I test the website thoroughly'
  },
  {
    number: '5',
    title: 'Delivery',
    text: 'I deliver the final product'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-title">
      <div className="experience-container">
        <div className="experience-header">
          <span className="experience-eyebrow">Experience</span>
          <h2 id="experience-title" className="experience-title">Professional Journey</h2>
          <p className="experience-subtitle">
            A focused journey of building websites, applications, and practical software solutions
            with a professional full stack development mindset.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceItems.map((item) => (
            <article key={`${item.period}-${item.role}`} className="experience-card">
              <div className="experience-marker" aria-hidden="true"></div>
              <div className="experience-card-content">
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <strong>{item.type}</strong>
                </div>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
                <div className="experience-tags">
                  {item.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="process-panel" aria-labelledby="process-title">
          <div className="process-heading">
            <h3 id="process-title">My Process</h3>
            <span className="process-heading-line" aria-hidden="true"></span>
          </div>

          <div className="process-flow">
            {processSteps.map((step, index) => (
              <React.Fragment key={step.title}>
                <article className="process-card">
                  <div className="process-number">{step.number}</div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </article>

                {index < processSteps.length - 1 && (
                  <div className="process-arrow" aria-hidden="true">
                    &rarr;
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
