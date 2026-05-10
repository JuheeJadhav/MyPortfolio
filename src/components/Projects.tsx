import { useState } from 'react'

const PROJECTS = [
  {
    icon: '📊',
    title: 'Reports Module',
    sub: 'Full-stack · End-to-end',
    tags: ['Python', 'Django REST', 'React', 'TypeScript'],
    detail: 'Designed and developed a Reports Module end-to-end. Built Python REST APIs with complete business logic for processing large datasets and generating accurate metrics. Also built the frontend dashboard.',
    accent: 'rgba(29,158,117,0.12)',
    tagColor: { bg: 'rgba(29,158,117,0.15)', border: 'rgba(29,158,117,0.3)', text: '#5DCAA5' },
  },
  {
    icon: '🔒',
    title: 'Chapter Access Control',
    sub: 'EdTech Platform',
    tags: ['Django', 'REST API', 'Auth'],
    detail: 'Built a teacher-controlled chapter locking/unlocking system based on semester schedules, enabling structured content release and controlled student access across the platform.',
    accent: 'rgba(83,74,183,0.12)',
    tagColor: { bg: 'rgba(83,74,183,0.18)', border: 'rgba(83,74,183,0.35)', text: '#AFA9EC' },
  },
  {
    icon: '🧪',
    title: 'QA Automation Suite',
    sub: 'Web + Mobile testing',
    tags: ['Test Plans', 'UAT', 'Agile'],
    detail: 'Developed and executed comprehensive test plans and test cases for web and mobile applications. Converted user stories into UAT test cases, bridging product and engineering teams.',
    accent: 'rgba(186,117,23,0.12)',
    tagColor: { bg: 'rgba(186,117,23,0.15)', border: 'rgba(186,117,23,0.3)', text: '#EF9F27' },
  },
]

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="projects" style={{
      background: 'rgba(255,255,255,0.02)',
      border: '0.5px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: '1.75rem',
      animation: 'fadeUp 0.6s 0.2s ease both',
    }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.08em',
        display: 'block',
        marginBottom: '1.25rem',
      }}>
        // projects — click to expand
      </span>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {PROJECTS.map((p, i) => {
          const isOpen = open === i
          return (
            <div
              key={p.title}
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                background: isOpen ? p.accent : 'rgba(255,255,255,0.02)',
                border: isOpen
                  ? '0.5px solid rgba(93,202,165,0.4)'
                  : '0.5px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                padding: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.25s',
                animation: `fadeUp 0.5s ${i * 0.1}s ease both`,
              }}
              onMouseEnter={e => {
                if (!isOpen) (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(93,202,165,0.3)'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                if (!isOpen) (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)'
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              }}
            >
              {/* Icon box */}
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                background: p.accent,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, marginBottom: 12,
              }}>
                {p.icon}
              </div>

              <p style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0', marginBottom: 4 }}>
                {p.title}
              </p>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 12,
              }}>
                {p.sub}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 8 }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10, padding: '2px 8px', borderRadius: 999,
                    background: p.tagColor.bg,
                    border: `0.5px solid ${p.tagColor.border}`,
                    color: p.tagColor.text,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expandable detail */}
              <div style={{
                maxHeight: isOpen ? 120 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
              }}>
                <p style={{ fontSize: 12, color: '#5DCAA5', lineHeight: 1.65, paddingTop: 8 }}>
                  {p.detail}
                </p>
              </div>

              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: 'rgba(255,255,255,0.2)',
                textAlign: 'right',
                marginTop: 8,
              }}>
                {isOpen ? '▲ collapse' : '▼ details'}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}