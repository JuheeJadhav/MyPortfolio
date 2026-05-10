import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'

const S = {
  page: {
    minHeight: '100vh',
    background: '#0d1117',
    color: '#e2e8f0',
  } as React.CSSProperties,
  content: {
    maxWidth: 860,
    margin: '0 auto',
    padding: '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.25rem',
  },
}

export default function App() {
  return (
    <div style={S.page}>
      <Navbar />
      <div style={S.content}>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </div>
    </div>
  )
}