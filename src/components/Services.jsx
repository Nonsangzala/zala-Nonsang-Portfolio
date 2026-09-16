import React from 'react'
import '../styles/services.css'

const services = [
  {
    title: 'Business Website',
    icon: '💼',
    description: 'Professional business websites that establish trust, explain your offer clearly, and convert visitors into enquiries.'
  },
  {
    title: 'E-commerce Website',
    icon: '🛒',
    description: 'Conversion-focused online stores with smooth browsing, product presentation, and customer-first buying flows.'
  },
  {
    title: 'Portfolio Website',
    icon: '🎨',
    description: 'Clean portfolio experiences that present your work, experience, and value with a polished digital presence.'
  },
  {
    title: 'Website Redesign',
    icon: '✨',
    description: 'Strategic redesigns for existing sites that improve clarity, responsiveness, usability, and visual consistency.'
  },
  {
    title: 'Landing Page',
    icon: '🚀',
    description: 'Focused campaign pages built to highlight your offer, capture attention, and encourage action quickly.'
  },
  {
    title: 'Bug Fixing',
    icon: '🛠️',
    description: 'Practical debugging and issue resolution to stabilize functionality, improve reliability, and reduce friction.'
  },
  {
    title: 'Speed Optimization',
    icon: '⚡',
    description: 'Performance-focused improvements that reduce load times, streamline interactions, and improve user experience.'
  },
  {
    title: 'Responsive Design',
    icon: '📱',
    description: 'Mobile-friendly interfaces that maintain clarity, usability, and consistency across tablets, phones, and desktops.'
  }
]

export default function Services() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)
    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  React.useEffect(() => {
    if (isPaused || prefersReducedMotion) return undefined

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length)
    }, 9000)

    return () => window.clearInterval(timer)
  }, [isPaused])

  const moveCarousel = (direction) => {
    setActiveIndex((current) => (current + direction + services.length) % services.length)
  }

  const visibleServices = [-2, -1, 0, 1, 2].map((offset) => {
    const index = (activeIndex + offset + services.length) % services.length
    return { ...services[index], index, offset }
  })

  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-content">
        <div className="services-header">
          <span className="services-eyebrow">OUR SERVICES</span>
          <h2 id="services-title">Practical web development<br />for <span>real goals.</span></h2>
          <p>I help turn ideas into responsive, maintainable websites and web experiences.</p>
        </div>

        <div
          className="service-carousel"
          role="region"
          aria-label="Services carousel"
          tabIndex="0"
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') moveCarousel(-1)
            if (event.key === 'ArrowRight') moveCarousel(1)
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <button className="carousel-arrow carousel-arrow-left" type="button" aria-label="Previous service" onClick={() => moveCarousel(-1)}>
            <span aria-hidden="true">&#8249;</span>
          </button>

          <div className="service-carousel-stage" aria-live="polite">
            {visibleServices.map((service) => (
              <article className={`service-card service-card-position-${service.offset}`} key={`${service.title}-${service.index}`}>
                <div className="service-icon" aria-hidden="true">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p>{service.description}</p>
                <a className="service-link" href="#contact">Discuss a project <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>

          <button className="carousel-arrow carousel-arrow-right" type="button" aria-label="Next service" onClick={() => moveCarousel(1)}>
            <span aria-hidden="true">&#8250;</span>
          </button>

          <div className="carousel-dots" aria-label="Choose a service">
            {services.map((service, index) => (
              <button className={index === activeIndex ? 'active' : ''} key={service.title} type="button" aria-label={`Show ${service.title}`} aria-current={index === activeIndex ? 'true' : undefined} onClick={() => setActiveIndex(index)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
