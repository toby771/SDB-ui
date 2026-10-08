import { Paper, Stack, styled, Typography } from '@mui/material'
import gsap from 'gsap-trial'

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { AppIcon, IconName } from '@/core/appicon'
import { useDeviceType } from '@/hooks/useDeviceType'

const FavorPanelPaper = styled(Paper)(({ theme }) => ({
  padding: '50px',
  [theme.breakpoints.down('md')]: {
    padding: '24px'
  },
  height: '100%',
  border: '0.5px solid #353535',
  background: '#111212',
  borderRadius: '0px',

  ':hover': {
    cursor: 'pointer',
    background: 'none',
    borderColor: 'transparent',
    '& .app-icon': {
      color: theme.palette.secondary.main
    }
  },
  ...theme.applyStyles('light', {
    backgroundColor: '#F3F3F3',
    border: '0.5px solid #D6D7D7'
  })
}))

export default function FavorPanel({
  icon,
  title,
  description,
  index
}: {
  icon: IconName
  title: string
  description: string
  index: number
}) {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    const scrollTrigger = {
      scrollTrigger: {
        trigger: `.favor-panel-${index}`,
        start: 'top 50%',
        end: 'top 80%',
        scrub: 3
      }
    }
    if (isMobile) {
      gsap
        .timeline(scrollTrigger)
        .fromTo(`.favor-panel-${index}`, { y: -100, opacity: 0 }, { y: 0, opacity: 1, delay: 1, duration: 0.5 })

      return
    }
    if (index % 3 === 1) {
      gsap
        .timeline(scrollTrigger)
        .fromTo(`.favor-panel-${index}`, { y: -400, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
    } else if (index % 3 === 0) {
      gsap
        .timeline(scrollTrigger)
        .fromTo(
          `.favor-panel-${index}`,
          { x: 400, opacity: 0, scale: 0.7 },
          { x: 0, opacity: 1, delay: 3, duration: 0.5, stagger: 2 }
        )
        .to(`.favor-panel-${index}`, { scale: 1, delay: 1 })
    } else if (index % 3 === 2) {
      gsap
        .timeline(scrollTrigger)
        .fromTo(
          `.favor-panel-${index}`,
          { x: -400, opacity: 0, scale: 0.7 },
          { x: 0, opacity: 1, delay: 3, duration: 0.5, stagger: 2 }
        )
        .to(`.favor-panel-${index}`, { scale: 1, delay: 1 })
    }
  }, [])

  return (
    <FavorPanelPaper className={`favor-panel-${index}`}>
      <Stack gap={!isMobile ? '24px' : '12px'} justifyContent='space-between'>
        <Stack gap={!isMobile ? '24px' : '12px'}>
          <AppIcon name={icon} size={isMobile ? 50 : 70} />
          <Typography variant='h6' textTransform='uppercase' fontWeight={500}>
            {title}
          </Typography>
        </Stack>
        <Typography variant='subtitle1' fontWeight={400}>
          {description}
        </Typography>
      </Stack>
    </FavorPanelPaper>
  )
}
