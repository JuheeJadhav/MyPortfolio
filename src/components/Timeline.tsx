const ITEMS = [
  {
    date: 'Apr 2026 – Present',
    role: 'Software Developer',
    company: 'Singhania Education Services Pvt Ltd',
    desc: 'Promoted from QA Analyst. Developing scalable REST APIs with Django REST Framework, building responsive UIs with React.js and TypeScript, and optimising database performance with PostgreSQL/MySQL.',
    color: '#1D9E75',
    type: 'work',
  },
  {
    date: 'Jul 2024 – Mar 2026',
    role: 'QA Analyst',
    company: 'Singhania Education Services Pvt Ltd',
    desc: 'Conducted API testing with Postman and automated workflows using Python scripts. Performed manual and automation testing for responsive web and mobile applications.',
    color: '#1D9E75',
    type: 'work',
  },
  {
    date: 'Jun 2023 – Jul 2024',
    role: 'QA Engineer',
    company: 'Ufaber Edutech Pvt Ltd',
    desc: 'Comprehensive test plans and test cases for web and mobile apps. Converting user stories into UAT test cases.',
    color: '#1D9E75',
    type: 'work',
  },
  {
    date: '2022 – 2024',
    role: 'M.Sc. Information Technology',
    company: 'Ramniranjan Jhunjhunwala College',
    desc: 'Specialisation in Software Engineering. Foundations in system design, algorithms, and full-stack development.',
    color: '#534AB7',
    type: 'edu',
  },
]

export default function Timeline() {
  return (
    <section id="journey" style={{
      background: 'rgba(255,255,255,0.02)',
      border: '0.5px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: '1.75rem',
      animation: 'fadeUp 0.6s 0.3s ease both',
    }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: '0.08em',
        display: 'block',
        marginBottom: '1.5rem',
      }}>
        // career journey
      </span>

      {ITEMS.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, animation: `fadeUp 0.5s ${i * 0.12}s ease both` }}>
          {/* Dot + line */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 14 }}>
            <div style={{
              width: 12, height: 12, borderRadius: '50%',
              background: item.color,
              border: '2px solid #0d1117',
              outline: `1.5px solid ${item.color}`,
              marginTop: 4, flexShrink: 0,
            }} />
            {i < ITEMS.length - 1 && (
              <div style={{ flex: 1, width: 1, background: 'rgba(255,255,255,0.07)', margin: '5px 0' }} />
            )}
          </div>

          {/* Content */}
          <div style={{ paddingBottom: i < ITEMS.length - 1 ? 24 : 0, flex: 1 }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 4,
            }}>
              {item.date}
            </p>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#e2e8f0', marginBottom: 3 }}>
              {item.role}
            </p>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, color: item.color, marginBottom: 8,
            }}>
              {item.company}
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}