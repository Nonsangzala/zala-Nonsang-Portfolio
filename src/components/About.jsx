import React from 'react'
import '../styles/about.css'

const highlights = [
  { value: '3+', label: 'Years Experience' },
  { value: 'Full Stack', label: 'Developer' },
  { value: 'Software', label: 'Developer' }
]

const skills = ['Website Creation', 'Application Creation', 'Frontend', 'Backend', 'Clean UI']
const certificates = ['HTML Certificate', 'JavaScript Certificate', 'React Certificate', 'PHP Certificate']
const aboutDetails = [
  { label: 'Name', value: ' Zala Nonsang' },
  { label: 'Email', value: 'thakornonsangzala@gmail.com' },
  { label: 'Phone', value: '+91 9313327727' },
  { label: 'Location', value: 'India' }
]

export default function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-copy">
          <div className="about-heading">
            <h2 id="about-title">About Me</h2>
            <span aria-hidden="true"></span>
          </div>
          <p className="about-text">
            I'm a Full Stack Web Developer with a passion for building modern, responsive and
            user-friendly websites. I have experience in both front-end and back-end development.
          </p>

          <h3 className="about-role">Full Stack Developer & Software Developer</h3>

          <div className="about-details" aria-label="Personal details">
            {aboutDetails.map((detail) => (
              <div className="about-detail-row" key={detail.label}>
                <span className="about-detail-icon" aria-hidden="true">{detail.label.charAt(0)}</span>
                <strong>{detail.label}:</strong>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>

          <a className="about-resume-button" href="#contact">Download Resume</a>

          <div className="about-tags" aria-label="Work focus">
            {skills.map((skill) => (
              <span key={skill} className="about-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="about-panel" aria-label="Developer highlights">
          <div className="about-panel-glow" aria-hidden="true"></div>
          {highlights.map((item) => (
            <div key={`${item.value}-${item.label}`} className="about-stat">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
          <div className="about-education">
            <span className="about-education-label">Education</span>
            <h3>Bachelor Of Computer Science And Applications</h3>
            <p>Gokul Global University</p>
            <small>2020 - 2024 | Sidhpur, Gujarat</small>
          </div>
          <div className="about-certificates">
            <span className="about-certificates-label">Certificates</span>
            <h3>Professional Learning</h3>
            <div className="about-certificate-list" aria-label="Certificates">
              {certificates.map((certificate) => (
                <span key={certificate} className="about-certificate">{certificate}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
