import SplitText from 'gsap-trial/dist/SplitText'
import gsap from 'gsap-trial'
import { Box, Container, Grid2, Stack, styled, Typography } from '@mui/material'

import { devProcess } from '@/constants/process'
import { AppIcon } from '@/core/appicon'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import LoopLongBack from '@/assets/img/loop-long.webp'

import ProcessPanel from './panel'
import { processAnimation } from '@/constants/scrolltriger'
import { useDeviceType } from '@/hooks/useDeviceType'

const ProcessBox = styled(Box)(({ theme }) => ({
  padding: '150px 50px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 20px'
  },
  backgroundPosition: 'left center'
}))

export default function Process() {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    if (isMobile) return

    gsap
      .timeline(processAnimation)
      .fromTo(
        '.process-star',
        { y: 200, opacity: 0, rotate: 0 },
        { y: 0, opacity: 1, ease: 'back.inOut', duration: 0.5, rotate: 720 }
      )

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.process-header', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })

      gsap.timeline(processAnimation).from(headerSplit.words, {
        y: -100,
        autoAlpha: 0,
        stagger: 3,
        delay: 3,
        duration: 8,
        ease: 'back.inOut'
      })
    })
  }, [isMobile])

  return (
    <Container>
      <ProcessBox
        id='process'
        sx={{
          background: isMobile ? '' : `url(${LoopLongBack}) no-repeat`
        }}
      >
        <Grid2 container spacing='50px'>
          <Grid2 size={{ lg: 'grow', md: 12 }}>
            <Stack gap={2}>
              <AppIcon name='star' size={48} colors='green' className='process-star' />
              <Typography variant='h2' maxWidth='90%' className='process-header'>
                our software development process
              </Typography>
            </Stack>
          </Grid2>
          <Grid2 size='auto'></Grid2>
          <Grid2 size={{ lg: 'grow', md: 12 }} component='ul'>
            {devProcess.map((item, index) => (
              <Stack
                component='li'
                paddingBottom={10}
                key={`index-${index}`}
                borderLeft='2px dashed'
                position='relative'
              >
                <ProcessPanel title={item.name} description={item.detail} index={index} />
              </Stack>
            ))}
          </Grid2>
        </Grid2>
      </ProcessBox>
    </Container>
  )
}
