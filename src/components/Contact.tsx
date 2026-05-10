import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration: number, start: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let s: number | null = null
    const step = (ts: number) => {
      if (!s) s = ts
      const p = Math.min((ts - s) / duration, 1)
      setVal(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return val
}

const STATS = [
  { label: 'years exp',  value: 3,   suffix: '' },
  { label: 'APIs built', value: 20,  suffix: '+' },
  { label: 'test cases', value: 200, suffix: '+' },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const c0 = useCountUp(STATS[0].value, 800,  started)
  const c1 = useCountUp(STATS[1].value, 900,  started)
  const c2 = useCountUp(STATS[2].value, 1100, started)
  const counts = [c0, c1, c2]

  return (
    <section id="contact" ref={ref} style={{
      display: 'flex', flexDirection: 'column', gap: 12,
      animation: 'fadeUp 0.6s 0.4s ease both',
    }}>
      {/* Stat counters */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            background: 'rgba(255,255,255,0.02)',
            border: '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: 12,
            padding: '1.1rem',
            textAlign: 'center',
            transition: 'border-color 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(93,202,165,0.3)'
              ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)'
              ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
            }}
          >
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 26, fontWeight: 500, color: '#fff',
            }}>
              {counts[i]}{s.suffix}
            </p>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4,
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{
        background: 'rgba(29,158,117,0.08)',
        border: '0.5px solid rgba(29,158,117,0.3)',
        borderRadius: 14,
        padding: '1.4rem 1.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <div>
          <p style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 5 }}>
            Let's build something together
          </p>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, color: 'rgba(255,255,255,0.4)',
          }}>
            juheejadhav@gmail.com · Thane, Mumbai
          </p>
        </div>
        <a href="mailto:juheejadhav@gmail.com" style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, padding: '8px 20px', borderRadius: 999,
          background: '#1D9E75', color: '#fff', textDecoration: 'none',
          whiteSpace: 'nowrap', transition: 'background 0.2s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = '#5DCAA5')}
          onMouseLeave={e => (e.currentTarget.style.background = '#1D9E75')}
        >
          Say hello →
        </a>
      </div>

      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11, color: 'rgba(255,255,255,0.15)',
        textAlign: 'center', paddingBottom: 8,
      }}>
        Built with React · TypeScript · Tailwind CSS
      </p>
    </section>
  )
}