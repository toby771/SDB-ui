import About from '@/view/landing/about'
import Favor from '@/view/landing/favor'
import Feedback from '@/view/landing/feedback'
import Hero from '@/view/landing/hero'

// import Newest from '@/view/landing/newest'
import Process from '@/view/landing/process'
import Skills from '@/view/landing/skills'

export default function Landing() {
  return (
    <>
      <Hero />
      <About />
      {/* <Newest /> */}
      <Skills />
      <Favor />
      <Process />
      <Feedback />
    </>
  )
}
