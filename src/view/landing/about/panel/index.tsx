import { memo, useState } from 'react'
import { Stack, Typography } from '@mui/material'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'
import gsap from 'gsap-trial'

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { aboutAnimation } from '@/constants/scrolltriger'
import CountUp from 'react-countup'
import { useDeviceType } from '@/hooks/useDeviceType'

export default memo(function AboutPanel({
  header,
  title,
  index,
  unit
}: {
  header: string
  title: number
  index: number
  unit: string
}) {
  const [startCount, setStartCount] = useState<boolean>(false) // State to control when to start the CountUp

  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: '#about',
      start: 'top 50%', // Adjust as needed (e.g., 'top center')
      onEnter: () => setStartCount(true), // Start count when element enters view
      onLeaveBack: () => setStartCount(false) // Reset when scrolling back up (optional)
      // markers: true, // Uncomment for debugging ScrollTrigger
    })

    if (isMobile) return
    gsap
      .timeline(aboutAnimation)
      .fromTo(
        `.about-panel-${index}`,
        { opacity: 0, x: index % 2 == 1 ? -200 : 200, y: -200, scale: 0.7 },
        { x: 0, opacity: 1, y: 0, duration: 1, delay: 1 + index * 2, scale: 1 }
      )
  }, [isMobile])

  return (
    <Stack gap={3} key={`index-${index}`} className={`about-panel-${index}`}>
      <Typography textAlign='center' variant='body1' textTransform='uppercase'>
        {header}
      </Typography>
      {startCount && (
        <Typography textAlign='center' variant='h1' fontFamily='Archivo' color='secondary'>
          <CountUp end={title} duration={4} suffix={unit} />
        </Typography>
      )}
    </Stack>
  )
})
