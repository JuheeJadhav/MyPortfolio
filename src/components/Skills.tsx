import { useState, useEffect, useRef } from 'react'

const ALL = [
  { name: 'Python',       pct: 88, cat: 'backend'  },
  { name: 'Django / DRF', pct: 85, cat: 'backend'  },
  { name: 'REST APIs',    pct: 87, cat: 'backend'  },
  { name: 'SQL',          pct: 72, cat: 'backend'  },
  { name: 'React',        pct: 75, cat: 'frontend' },
  { name: 'TypeScript',   pct: 70, cat: 'frontend' },
  { name: 'Git',          pct: 90, cat: 'tools'    },
  { name: 'QA / Testing', pct: 92, cat: 'tools'    },
]

const CATS = ['all', 'backend', 'frontend', 'tools']

export default function Skills() {
  const [cat, setCat] = useState('all')
  const [go, setGo] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    setGo(false)
    const id = setTimeout(() => setGo(true), 60)
    return () => clearTimeout(id)
  }, [cat])

  const list = cat === 'all' ? ALL : ALL.filter(s => s.cat === cat)

  return (
    <section id="skills" ref={ref} style={{
      background: 'rgba(255,255,255,0.02)',
      border: '0.5px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: '1.75rem',
      animation: 'fadeUp 0.6s 0.1s ease both',
    }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.08em',
        display: 'block',
        marginBottom: '1rem',
      }}>
        // tech stack
      </span>

      {/* Filter chips */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {CATS.map(c => (
          <button key={c} onClick={() => setCat(c)} style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            padding: '4px 14px',
            borderRadius: 999,
            border: cat === c ? '0.5px solid rgba(93,202,165,0.5)' : '0.5px solid rgba(255,255,255,0.1)',
            background: cat === c ? 'rgba(29,158,117,0.15)' : 'rgba(255,255,255,0.03)',
            color: cat === c ? '#5DCAA5' : 'rgba(255,255,255,0.4)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            {c}
          </button>
        ))}
      </div>

      {/* Bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {list.map((s, i) => (
          <div key={s.name} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            animation: `fadeUp 0.4s ${i * 0.05}s ease both`,
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: 'rgba(255,255,255,0.5)',
              minWidth: 110,
            }}>
              {s.name}
            </span>
            <div style={{
              flex: 1, height: 5,
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 999, overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: go ? `${s.pct}%` : '0%',
                background: 'linear-gradient(90deg, #1D9E75, #5DCAA5)',
                borderRadius: 999,
                transition: `width 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.07}s`,
              }} />
            </div>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: 'rgba(255,255,255,0.25)',
              minWidth: 34,
              textAlign: 'right',
            }}>
              {s.pct}%
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}