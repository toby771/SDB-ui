import { useDeviceType } from '@/hooks/useDeviceType'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { Box, Stack, Typography } from '@mui/material'

import gsap from 'gsap-trial'

interface MemberProps {
  name: string
  role: string
  img: string
  index: number
}

export default function MemberPanel(props: MemberProps) {
  const { name, role, img, index } = props
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    const scrollTrigger = {
      scrollTrigger: {
        trigger: `.member-panel-${index}`,
        start: 'top 50%',
        end: 'top 80%',
        scrub: 3
      }
    }
    if (isMobile) {
      gsap
        .timeline(scrollTrigger)
        .fromTo(`.member-panel-${index}`, { y: -100, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 0.5 })

      return
    }
    if (index % 3 === 1) {
      gsap
        .timeline(scrollTrigger)
        .fromTo(`.member-panel-${index}`, { y: -400, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    } else if (index % 3 === 0) {
      gsap
        .timeline(scrollTrigger)
        .fromTo(
          `.member-panel-${index}`,
          { x: 400, opacity: 0, scale: 0.7 },
          { x: 0, opacity: 1, delay: 3, duration: 0.4, stagger: 2 }
        )
        .to(`.member-panel-${index}`, { scale: 1, delay: 1 })
    } else if (index % 3 === 2) {
      gsap
        .timeline(scrollTrigger)
        .fromTo(
          `.member-panel-${index}`,
          { x: -400, opacity: 0, scale: 0.7 },
          { x: 0, opacity: 1, delay: 3, duration: 0.1, stagger: 2 }
        )
        .to(`.member-panel-${index}`, { scale: 1, delay: 1 })
    }
  }, [])

  return (
    <Stack gap={3} className={`member-panel-${index}`}>
      <Box component='img' src={img} />
      <Stack gap={1}>
        <Typography variant='body1'>{name}</Typography>
        <Typography variant='subtitle2' color='textDisabled'>
          {role}
        </Typography>
      </Stack>
    </Stack>
  )
}
