import { useState } from 'react'

const LINKS = ['home', 'skills', 'projects', 'journey', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('home')

  const go = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(13,17,23,0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '0.5px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{
        maxWidth: 860,
        margin: '0 auto',
        padding: '0.75rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          fontWeight: 500,
          color: '#5DCAA5',
        }}>
          juhee.dev
        </span>

        <div style={{ display: 'flex', gap: 4 }}>
          {LINKS.map(link => (
            <button
              key={link}
              onClick={() => go(link)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                padding: '5px 14px',
                borderRadius: 999,
                border: active === link
                  ? '0.5px solid rgba(93,202,165,0.45)'
                  : '0.5px solid transparent',
                background: active === link
                  ? 'rgba(29,158,117,0.15)'
                  : 'transparent',
                color: active === link ? '#5DCAA5' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}