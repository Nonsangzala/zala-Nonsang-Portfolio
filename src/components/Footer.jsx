import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a className="footer-brand" href="#home"><span className="brand-name-prefix">ZALA</span><span className="brand-name-main">NONSANG</span></a>
        <p>Full Stack Web Developer building modern, useful digital experiences.</p>
        <div className="footer-contact">
          <a href="mailto:thakornonsangzala@gmail.com">thakornonsangzala@gmail.com</a>
          <a href="tel:+919313327727">+91 93133 27727</a>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <small>&copy; 2026 Nonsang. All rights reserved.</small>
      </div>
    </footer>
  )
}
