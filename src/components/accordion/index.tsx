import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'
import SplitText from 'gsap-trial/dist/SplitText'
import gsap from 'gsap-trial'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { useDeviceType } from '@/hooks/useDeviceType'

export default function CustomAccordion({
  title,
  subtitle,
  children,
  index
}: {
  title: string
  subtitle: string
  children: React.ReactNode
  index: number
}) {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    if (isMobile) return

    document.fonts.ready.then(() => {
      ScrollTrigger.create({
        trigger: `.skill-accordion-${index}`,
        start: 'top 70%',
        end: 'top 0%',
        scrub: 3,
        onEnter: () => {
          const headerSplit = new SplitText(`.skill-subtitle-${index}`, {
            type: 'words' // Can be 'words', 'chars', or 'lines'
          })
          gsap.fromTo(`.skill-accordion-${index}`, { opacity: 0 }, { opacity: 1, duration: 1 })
          gsap.from(headerSplit.words, {
            x: 50,
            autoAlpha: 0,
            stagger: 0.2,
            delay: 1,
            duration: 0.5
          })
        }
      })
    })
  }, [isMobile])

  return (
    <Accordion className={`skill-accordion-${index}`} sx={{ opacity: isMobile ? 1 : 0 }}>
      <AccordionSummary>
        <Typography textTransform='uppercase' variant='h6' flex='1 0 0'>
          {title}
        </Typography>
        <Typography variant='body1' color='textDisabled' flex='1 0 0' className={`skill-subtitle-${index}`}>
          {subtitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}
