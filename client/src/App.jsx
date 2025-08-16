
import './App.css'
import { HeroSection } from './components/hero-section'
import { AboutSection } from './components/about-section'
import { SkillsSection } from './components/skills-section'
import { ProjectsSection } from './components/projects-section'
import { AchievementsSection } from './components/achievements-section'
import { HobbiesSection } from './components/hobbies-section'
import { ResumeSection } from './components/resume-section'
import { ContactSection } from './components/contact-section'
import { Navigation } from './components/navigation'
import EnhancedSportsBackground from './components/enhanced-sports-background'
import { ParticleSystem } from './components/particle-system'
import { ScrollTriggerAnimations } from './components/scroll-trigger-animations'
import { InteractiveSportsElements } from './components/interactive-sports-elements'

function App() {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-background">
        <EnhancedSportsBackground />
        <ParticleSystem />
        <ScrollTriggerAnimations />
        <InteractiveSportsElements />
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <HobbiesSection />
          <ResumeSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}

export default App
