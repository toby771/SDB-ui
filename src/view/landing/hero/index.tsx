import ReactPlayer from 'react-player'
import { Box, Container, IconButton, Stack, styled, Typography } from '@mui/material'
import { CardMedia } from '@mui/material'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'

import { AppIcon } from '@/core/appicon'
import { useDeviceType } from '@/hooks/useDeviceType'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { useCallback } from 'react'

const HeroBox = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'flex-end'
})

const HeroContainer = styled(Container)(({ theme }) => ({
  padding: '100px 50px !important',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '16px 20px !important'
  }
}))

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.40) 23.79%, rgba(1, 2, 2, 0.40) 47.57%)',
  ...theme.applyStyles('light', {
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.40) 23.79%, rgba(1, 2, 2, 0.40) 47.57%)'
  }),
  transition: 'background 0.3s'
}))

export default function Hero() {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo('.hero-header-01', { opacity: 0, x: -500 }, { x: 0, opacity: 1, duration: 1, ease: 'back.in' })
    gsap.fromTo('.hero-header-02', { opacity: 0 }, { opacity: 1, duration: 2, delay: 2 })
    gsap.fromTo(
      '.hero-button-down',
      { opacity: 0, y: -200 },
      { opacity: 1, duration: 2, delay: 4, y: 0, ease: 'back.out' }
    )
    gsap.fromTo('.hero-button-title', { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'back.out', delay: 6 })
    gsap.fromTo('.hero-video', { opacity: 0 }, { opacity: 1, duration: 5, delay: 5 })

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.hero-header-02', {
        type: 'chars' // Can be 'words', 'chars', or 'lines'
      })
      const descSplit = new SplitText('.hero-description', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })

      gsap.from(headerSplit.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        delay: 3
      })

      gsap.from(descSplit.words, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        delay: 4
      })
    })
  }, [])

  const handleDown = useCallback(() => {
    const element = document.getElementById('banner')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [])

  return (
    <HeroBox>
      <CardMedia
        className='hero-video'
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      >
        <ReactPlayer
          src='/assets/mp4/hero.mp4'
          width='100%'
          height='100%'
          playing
          muted
          loop
          playsInline
          style={{ objectFit: 'cover' }}
        />
      </CardMedia>
      <BackgroundBox />

      <HeroContainer>
        <Stack gap={4}>
          <Typography
            variant='h1'
            textAlign={isMobile ? 'center' : 'left'}
            className='hero-header-01'
            sx={{
              wordWrap: 'break-word',
              color: 'white'
            }}
          >
            All Jack of Trades in Software&nbsp;
            <Typography
              component='strong'
              variant='h1'
              className='hero-header-02'
              textTransform='none'
              sx={theme => ({
                backgroundColor: theme.palette.secondary.light,
                color: 'black',
                wordWrap: 'initial',
                fontStyle: 'italic',
                borderRadius: '16px',
                transform: 'translate(0, 0) rotate(0) skewX(-12deg) skewY(0) scaleX(1) scaleY(1)'
              })}
            >
              Development.
            </Typography>
          </Typography>

          <Stack
            direction={isMobile ? 'column' : 'row'}
            justifyContent={isMobile ? 'center' : 'space-between'}
            alignItems={isMobile ? 'center' : ''}
            gap={isMobile ? 3 : ''}
          >
            <Typography
              variant='body1'
              maxWidth='570px'
              className='hero-description'
              textAlign={isMobile ? 'center' : 'left'}
              sx={{
                color: 'white'
              }}
            >
              Web, Mobile App development, Web3 Development, AI development, all jack of trades in software development
            </Typography>
            <Stack direction='row' alignItems='center' gap='16px'>
              {!isMobile && (
                <Typography
                  variant='subtitle2'
                  textTransform='uppercase'
                  sx={{ color: 'white' }}
                  className='hero-button-title'
                >
                  scroll down
                </Typography>
              )}
              <IconButton
                className='hero-button-down'
                onClick={handleDown}
                sx={{
                  color: 'white'
                }}
              >
                <AppIcon name='arrow-down' size={20} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </HeroContainer>
    </HeroBox>
  )
}
