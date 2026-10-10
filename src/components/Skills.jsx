import React from 'react'
import '../styles/skills.css'

const skillGroups = [
  {
    title: 'Frontend Core',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
    ]
  },
  {
    title: 'Backend & API',
    skills: [
      { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'Ex' },
      { name: 'REST API', icon: 'API' },
      { name: 'Auth', icon: 'JWT' },
      { name: 'MVC', icon: 'MVC' }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Supabase', icon: 'Sb' }
    ]
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Canva', icon: 'Ca' }
    ]
  },
  {
    title: 'Testing & Deployment',
    skills: [
      { name: 'Vitest', icon: 'Vi' },
      { name: 'Playwright', icon: 'Pw' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'cPanel', icon: 'cP' }
    ]
  }
]

const professionalFocus = [
  {
    title: 'Production Ready UI',
    text: 'Responsive layouts, clean component structure, accessibility and cross-browser polish.'
  },
  {
    title: 'Performance & SEO',
    text: 'Fast loading pages, optimized assets, semantic HTML and search-friendly page structure.'
  },
  {
    title: 'Full Stack Delivery',
    text: 'Frontend screens, backend APIs, database integration, authentication and deployment.'
  },
  {
    title: 'Modern Workflow',
    text: 'Git-based development, reusable code, testing mindset and scalable project setup.'
  }
]

const quickStats = [
  { value: '20+', label: 'Technologies' },
  { value: '5+', label: 'Core Areas' },
  { value: '100%', label: 'Responsive' }
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <div className="skills-container">
        <div className="skills-header">
          <div>
            <h2 id="skills-title" className="skills-title">My Skills</h2>
            <span className="skills-title-line" aria-hidden="true"></span>
          </div>
          <p>
            Current full stack skills focused on practical projects, clean UI, APIs, testing,
            deployment and professional delivery.
          </p>
        </div>

        <div className="skills-overview" aria-label="Skills summary">
          {quickStats.map((stat) => (
            <div key={stat.label} className="skills-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="skills-layout">
          <div className="skills-stack">
            {skillGroups.map((group) => (
              <section key={group.title} className="skill-category" aria-labelledby={`skill-${group.title.replace(/\s+/g, '-')}`}>
                <h3 id={`skill-${group.title.replace(/\s+/g, '-')}`}>{group.title}</h3>

                <div className="skill-icon-grid" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-icon-item">
                      <span className="skill-logo" aria-hidden="true">
                        {skill.icon.startsWith('http') ? (
                          <img src={skill.icon} alt="" loading="lazy" />
                        ) : (
                          skill.icon
                        )}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="skills-focus" aria-label="Professional capabilities">
            <span className="skills-focus-label">Professional Features</span>
            <h3>What I Can Build</h3>
            <div className="skills-focus-list">
              {professionalFocus.map((item) => (
                <div key={item.title} className="skills-focus-item">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="skills-process" aria-label="Development process">
          {['Plan', 'Design', 'Develop', 'Test', 'Deploy'].map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
