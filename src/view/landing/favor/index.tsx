import { Box, Grid2, Stack, Typography, useColorScheme } from '@mui/material'
import SplitText from 'gsap-trial/dist/SplitText'
import gsap from 'gsap-trial'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'

import { AppIcon, IconName } from '@/core/appicon'
import { useDeviceType } from '@/hooks/useDeviceType'
import { favors } from '@/constants'
import { favorAnimation } from '@/constants/scrolltriger'

import FavorPanel from './panel'

export default function Favor() {
  const { isMobile } = useDeviceType()
  const { mode } = useColorScheme()

  useIsomorphicLayoutEffect(() => {
    if (isMobile) return

    gsap
      .timeline(favorAnimation)
      .fromTo('.favor-star', { y: -200, rotate: 0, opacity: 0 }, { opacity: 1, y: 0, ease: 'back.inOut', rotate: 1080 })

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.favor-header', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })
      const descSplit = new SplitText('.favor-description', {
        type: 'chars' // Can be 'words', 'chars', or 'lines'
      })

      gsap.timeline(favorAnimation).from(headerSplit.words, {
        y: -100,
        autoAlpha: 0,
        stagger: 3,
        delay: 3,
        duration: 8,
        ease: 'back.inOut'
      })

      gsap.timeline(favorAnimation).from(descSplit.chars, {
        x: 20,
        autoAlpha: 0,
        stagger: 3,
        delay: 3,
        duration: 8,
        ease: 'back.inOut'
      })
    })
  }, [isMobile])

  return (
    <Box component='div' id='favor'>
      <Stack>
        <Stack
          padding={isMobile ? '50px 16px' : '50px'}
          gap='16px'
          direction={isMobile ? 'column' : 'row'}
          justifyContent={isMobile ? '' : 'space-between'}
        >
          <Typography variant='h2' maxWidth={isMobile ? '100%' : '840px'} className='favor-header'>
            How do we came with favors?
          </Typography>

          <Stack gap='16px' maxWidth={isMobile ? '100%' : '485px'}>
            <AppIcon name='star' size={40} colors='green' className='favor-star' />
            <Typography variant='body1' color={mode === 'dark' ? '' : 'textDisabled'} className='favor-description'>
              We are nimble, adaptable, and able to work closely with our clients to deliver truly awesome development.
            </Typography>
          </Stack>
        </Stack>

        <Grid2 container component='ul'>
          {favors.map((item, index) => (
            <Grid2 size={{ lg: 4, md: 6, xs: 12 }} key={`index-${index}`} component='li'>
              <FavorPanel
                icon={item.icon as IconName}
                title={item.title}
                description={item.description}
                index={index}
              />
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </Box>
  )
}
