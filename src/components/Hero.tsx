import { useEffect, useState, useRef } from 'react'

const ROLES = [
  'Full-Stack Developer',
  'Django REST Expert',
  'React + TypeScript Dev',
  'QA-Turned-Engineer',
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const t = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)


  useEffect(() => {
    const cur = ROLES[roleIdx]
    if (!deleting && displayed.length < cur.length) {
      t.current = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === cur.length) {
      t.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      t.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(t.current)
  }, [displayed, deleting, roleIdx])

  return (
    <section id="home" style={{
      background: 'rgba(255,255,255,0.02)',
      border: '0.5px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: '2rem',
      animation: 'fadeUp 0.6s ease both',
    }}>
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>

        {/* Avatar */}
        <div style={{
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: 'rgba(29,158,117,0.12)',
          border: '1.5px solid #1D9E75',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 15,
          fontWeight: 500,
          color: '#5DCAA5',
          flexShrink: 0,
          animation: 'floatAvatar 3s ease-in-out infinite',
        }}>
          JJ
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: '#5DCAA5',
            letterSpacing: '0.08em',
            marginBottom: 8,
          }}>
            // software developer
          </p>

          <h1 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 28,
            fontWeight: 600,
            color: '#fff',
            marginBottom: 6,
            lineHeight: 1.2,
          }}>
            Juhee Jadhav
          </h1>

          {/* Typewriter */}
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: 'rgba(255,255,255,0.45)',
            marginBottom: 16,
            minHeight: 20,
          }}>
            {displayed}
            <span style={{ animation: 'blink 1s step-end infinite', color: '#5DCAA5' }}>|</span>
          </p>

          <p style={{
            fontSize: 14,
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7,
            maxWidth: 460,
            marginBottom: 24,
          }}>
            Software Engineer with 3 years of experience building scalable web applications using Python, Django, and React. I specialize in backend development, API design, and creating reliable systems with a strong focus on performance and clean architecture.
          </p>

          {/* Badges row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              padding: '6px 14px',
              borderRadius: 999,
              background: 'rgba(29,158,117,0.1)',
              border: '0.5px solid rgba(29,158,117,0.35)',
              color: '#5DCAA5',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#1D9E75',
                display: 'inline-block',
                animation: 'pulseDot 2s ease-in-out infinite',
              }} />
              Open to work
            </span>

            <a href="mailto:juheejadhav@gmail.com" style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              padding: '6px 18px',
              borderRadius: 999,
              background: '#1D9E75',
              color: '#fff',
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
              display: 'inline-block',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#5DCAA5')}
              onMouseLeave={e => (e.currentTarget.style.background = '#1D9E75')}
            >
              Hire me →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}