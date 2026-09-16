import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles.css'

export default function App(){
  useEffect(() => {
    const selectors = [
      '.about-heading', '.about-text', '.about-role', '.about-details', '.about-resume-button', '.about-tags',
      '.about-stat', '.about-education', '.about-certificates', '.skills-header', '.skills-stat', '.skill-category',
      '.skills-focus', '.skills-process', '.projects-header', '.project-card', '.why-choose', '.experience-header',
      '.experience-card', '.process-panel', '.testimonials-header', '.testimonial-card', '.statistics-block',
      '.contact-intro', '.contact-form', '.site-footer .footer-inner'
    ]
    const targets = document.querySelectorAll(selectors.join(','))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    targets.forEach((target, index) => {
      target.classList.add('motion-reveal')
      target.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 90}ms`)
    })

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('motion-reveal-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('motion-reveal-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
