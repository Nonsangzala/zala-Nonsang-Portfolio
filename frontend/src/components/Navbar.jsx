import React, { useEffect, useState } from 'react'

const links = [
  {label:'Home', href:'#home'},
  {label:'About', href:'#about'},
  {label:'Skills', href:'#skills'},
  {label:'Services', href:'#services'},
  {label:'Projects', href:'#projects'},
  {label:'Experience', href:'#experience'},
  {label:'Testimonials', href:'#testimonials'},
  {label:'Contact', href:'#contact'}
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.5, 0.9] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  useEffect(() => () => document.body.classList.remove('menu-open'), [])

  const scrollToSection = (event, href) => {
    event.preventDefault()
    setOpen(false)

    const target = document.querySelector(href)
    if (!target) {
      window.location.hash = href
      return
    }

    const headerOffset = document.querySelector('.site-header')?.offsetHeight ?? 72
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset - 16
    window.scrollTo({ top, behavior: 'smooth' })
    window.history.pushState(null, '', href)
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={(event) => scrollToSection(event, '#home')}>
          <span className="logo" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17" fill="#2563EB" />
              <path d="M11.5 25V11h3.2l6.3 8.4V11h3.5v14h-3.1l-6.4-8.5V25h-3.5Z" fill="white" />
            </svg>
          </span>
          <span className="brand-text"><span className="brand-name-prefix">ZALA</span><span className="brand-name-main">NONSANG</span></span>
        </a>

        <button className={`nav-toggle ${open ? 'open' : ''}`} type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}>
          <span></span><span></span><span></span>
        </button>

        <ul id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className={activeSection === l.href.slice(1) ? 'active' : ''} onClick={(event) => scrollToSection(event, l.href)}>{l.label}</a></li>
          ))}
        </ul>

        <a className="cta" href="#contact" onClick={(event) => scrollToSection(event, '#contact')}>Hire Me</a>
      </nav>
    </header>
  )
}
