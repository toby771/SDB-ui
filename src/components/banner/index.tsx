import { Box, Button, CardMedia, Stack, styled, Typography, useColorScheme } from '@mui/material'
import ReactPlayer from 'react-player'
import SplitText from 'gsap-trial/dist/SplitText'
import gsap from 'gsap-trial'
import { Link } from 'react-router-dom'

import { AppIcon } from '@/core/appicon'
import { useDeviceType } from '@/hooks/useDeviceType'
import { routers } from '@/configs'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { bannerAnimation } from '@/constants/scrolltriger'

const BannerBox = styled(Box)({
  height: '640px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
})

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%)',
  ...theme.applyStyles('dark', {
    background: 'linear-gradient(0deg, rgba(1, 2, 2, 0.50) 0%, rgba(1, 2, 2, 0.50) 100%)'
  }),
  transition: 'background 0.3s'
}))

export default function Banner() {
  const { isMobile } = useDeviceType()
  const { mode } = useColorScheme()

  useIsomorphicLayoutEffect(() => {
    if (isMobile) return
    gsap.timeline(bannerAnimation).fromTo('.banner-btn', { opacity: 0 }, { opacity: 1 })
    gsap.timeline(bannerAnimation).fromTo('.banner-media', { opacity: 0 }, { opacity: 1, delay: 3 })
    gsap
      .timeline(bannerAnimation)
      .fromTo(
        '.banner-star',
        { opacity: 0, y: -400, rotate: 0 },
        { y: 0, opacity: 1, delay: 3, duration: 0.5, rotate: 1080, ease: 'back.inOut' }
      )

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.banner-title', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })

      gsap.timeline(bannerAnimation).from(headerSplit.words, {
        y: 100,
        autoAlpha: 0,
        stagger: 3,
        delay: 3,
        duration: 8,
        ease: 'back.inOut'
      })
    })
  }, [isMobile])

  return (
    <BannerBox id='banner'>
      <CardMedia
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -100
        }}
      >
        <ReactPlayer
          className='banner-media'
          src='/assets/mp4/banner.mp4'
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

      <Stack maxWidth='833px' gap={4} alignItems='center' zIndex={100}>
        <AppIcon name='star' size={50} colors={mode === 'light' ? 'blue' : 'cyan'} className='banner-star' />
        <Stack>
          <Typography
            fontSize={isMobile ? '50px !important' : '100px'}
            textAlign='center'
            letterSpacing={isMobile ? '-2px' : '-4px'}
            sx={{
              wordWrap: 'break-word'
            }}
            className='banner-title'
          >
            Building the Future from&nbsp;
            <Typography
              component='strong'
              color='secondary'
              fontSize='inherit !important'
              className='banner-title-strong'
            >
              Orlando
            </Typography>
          </Typography>
        </Stack>
        <Link to={routers.Contact}>
          <Button
            color='secondary'
            variant='contained'
            className='banner-btn'
            sx={{
              width: 'fit-content'
            }}
          >
            <Stack gap='10px' direction='row' alignItems='center'>
              <AppIcon name='border' width={16} />
              <Typography fontSize='12px' letterSpacing='1.5px'>
                get in touch
              </Typography>
            </Stack>
          </Button>
        </Link>
      </Stack>
    </BannerBox>
  )
}
