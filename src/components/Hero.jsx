import React from 'react'
import heroImage from '../assets/images/nonsang 1.png'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container container">
        <div className="hero-copy">
          <span className="hero-eyebrow">HELLO I'M</span>
          <h1 className="hero-title"> Zala Nonsang</h1>
          <p className="hero-role">Full Stack Web <span className="hero-highlight">Developer</span></p>
          <p className="hero-text">
            I build modern, responsive and scalable web applications that help businesses and startups grow.
          </p>
          <div className="hero-actions">
            <a className="hero-button hero-primary" href="#projects">View My Projects</a>
            <a className="hero-button hero-secondary" href="#contact">Hire Me</a>
          </div>
          <a className="hero-resume-link" href="/resume.pdf" download>Download Resume <span aria-hidden="true">↗</span></a>
          <div className="hero-social">
            <p>Follow Me</p>
            <div className="hero-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91V132.56c0-25.35 12.42-50.06 52.24-50.06H295V6.26S261.56 0 233.35 0c-73.22 0-121.12 44.38-121.12 124.72V195.3H65.16V288h47.07v224h92.73V288z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.79 53.79 0 1 1 53.79-53.78 53.78 53.78 0 0 1-53.79 53.78zM447.9 448h-92.68V302.4c0-34.7-12.47-58.4-43.62-58.4-23.8 0-38 16-44.28 31.4-2.28 5.5-2.85 13.2-2.85 20.9V448h-92.7s1.24-254 0-280.9h92.7v39.8c-.18.3-.43.7-.61 1h.61v-.61c12.3-19 34.27-46.1 83.3-46.1 60.8 0 106.4 39.7 106.4 125.1V448z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-2.9 0-5.2-1.6-5.2-3.6 0-2 2.3-3.6 5.2-3.6 2.9 0 5.2 1.6 5.2 3.6zm-33.5-10.6c-.7 1.6-2.6 2.2-4.2 1.3-1.6-.9-2.3-2.9-1.6-4.5.7-1.6 2.6-2.2 4.2-1.3 1.6.9 2.3 2.9 1.6 4.5zM244 8C108.5 8 0 116.5 0 252c0 108.6 70.4 200.6 168.2 233 12.3 2.3 16.8-5.4 16.8-12 0-6-0.2-21.9-0.3-43-68.4 14.9-82.9-33-82.9-33-11.2-28.6-27.4-36.2-27.4-36.2-22.4-15.3 1.7-15 1.7-15 24.8 1.7 37.9 25.5 37.9 25.5 22 37.7 57.8 26.8 71.9 20.5 2.2-15.9 8.6-26.8 15.6-33-54.6-6.2-111.9-27.3-111.9-121.5 0-26.9 9.6-48.9 25.3-66.2-2.6-6.2-11-31.1 2.4-64.8 0 0 20.7-6.6 67.8 25.3 19.7-5.5 40.9-8.3 62-8.4 21.1.1 42.3 2.9 62 8.4 47-31.9 67.6-25.3 67.6-25.3 13.5 33.7 5 58.6 2.4 64.8 15.7 17.3 25.3 39.3 25.3 66.2 0 94.4-57.4 115.1-112.1 121.3 8.8 7.6 16.7 22.6 16.7 45.6 0 32.9-0.3 59.4-0.3 67.5 0 6.6 4.4 14.5 16.9 12C425.6 452.6 496 360.6 496 252 496 116.5 387.5 8 252 8z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-115 51.4-115 115 0 63.6 51.4 115 115 115 63.6 0 115-51.4 115-115 0-63.6-51.4-115-115-115zm0 190.7c-41.9 0-75.7-33.8-75.7-75.7S182.2 180.3 224.1 180.3s75.7 33.8 75.7 75.7-33.8 75.7-75.7 75.7zM370.5 136.2c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9S328.7 109.3 343.6 109.3c14.9 0 26.9 12 26.9 26.9zM398.8 80c-8.3-20.8-24.5-37-45.3-45.3C314.6 24 224 24 224 24s-90.6 0-129.4 10.7C74.3 38 58.1 54.2 49.8 75 39 104.5 39 160 39 160s0 55.5 10.8 85c8.3 20.8 24.5 37 45.3 45.3C133.4 320 224 320 224 320s90.6 0 129.4-10.7c20.8-8.3 37-24.5 45.3-45.3C409 215.5 409 160 409 160s0-55.5-10.8-85z"/>
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M459.37 64.34c-9.22 4.1-19.1 6.86-29.5 8.1 10.62-6.36 18.78-16.42 22.64-28.4-9.94 5.88-20.93 10.16-32.6 12.44C404.37 50.22 392.2 44 379.16 44c-32.62 0-59 26.66-59 59.5 0 4.66.52 9.18 1.53 13.5C263.36 114.3 214.9 86.2 178.2 45.33c-5.08 8.6-7.98 18.64-7.98 29.3 0 20.4 10.34 38.4 26.05 49-9.04-.34-17.56-2.76-25.02-6.88v.68c0 28.34 20.28 52.06 47.25 57.44-4.95 1.33-10.17 2.05-15.55 2.05-3.81 0-7.5-.36-11.13-1.03 7.5 23.6 29.21 40.8 54.92 41.3-20.18 15.66-45.5 24.97-73.04 24.97-4.75 0-9.43-.28-14.03-.82 26.07 17.04 56.97 27 90.24 27 108.14 0 167.3-89.04 167.3-166.36 0-2.54-.06-5.06-.17-7.56 11.5-8.3 21.5-18.6 29.35-30.36-10.6 4.72-21.98 7.9-33.95 9.32z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={heroImage} alt="Portrait of Zala Nonsang, Full Stack Web Developer" className="hero-image" width="720" height="900" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  )
}
