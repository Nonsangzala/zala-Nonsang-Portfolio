import React from 'react'
import '../styles/testimonials.css'

const highlights = [
  { title: 'Responsive interfaces', text: 'Clear layouts that stay useful across phones, tablets, and desktop screens.' },
  { title: 'Full stack features', text: 'Connected frontends, APIs, databases, authentication, and deployment workflows.' },
  { title: 'Practical delivery', text: 'Thoughtful implementation focused on maintainability, performance, and a clear user journey.' }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 id="testimonials-title" className="testimonials-title">What I Build</h2>
          <span aria-hidden="true"></span>
        </div>

        <div className="testimonials-list">
          {highlights.map((highlight) => (
            <article className="testimonial-card highlight-card" key={highlight.title}>
              <div className="testimonial-content">
                <div className="testimonial-card-top">
                  <h3>{highlight.title}</h3>
                </div>
                <p className="testimonial-quote">{highlight.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
