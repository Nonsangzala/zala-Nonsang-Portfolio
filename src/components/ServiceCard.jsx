import React from 'react'

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        {service.icon}
      </div>

      <div className="service-card-body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <ul className="service-features">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <a href="#contact" className="service-link">
        Learn More <span>→</span>
      </a>
    </article>
  )
}
