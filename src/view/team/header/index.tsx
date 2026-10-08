import { Box, IconButton, Stack, styled, Typography } from '@mui/material'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'

import { AppIcon } from '@/core'
import { useDeviceType } from '@/hooks/useDeviceType'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { useCallback } from 'react'

const TeamHeaderBox = styled(Box)(({ theme }) => ({
  padding: '100px 50px',
  [theme.breakpoints.down('md')]: {
    padding: '32px 20px'
  }
}))

export default function TeamHeader() {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.squad-header-header', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })
      const descSplit = new SplitText('.squad-header-desc', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })

      gsap.from(headerSplit.words, {
        y: -100,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.inOut'
      })

      gsap.from(descSplit.words, {
        x: -100,
        autoAlpha: 0,
        stagger: 0.05,
        ease: 'back.inOut',
        duration: 0.5
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
    <TeamHeaderBox id='squad-header'>
      <Typography variant='h1' className='squad-header-header'>
        about the squad
      </Typography>
      <Stack direction={isMobile ? 'column' : 'row'} justifyContent='space-between' paddingTop={4} gap={3}>
        <Typography variant='body1' width={isMobile ? '100%' : '42%'} className='squad-header-desc'>
          Based in the vibrant heart of Creative Persona. Silver Digital Bus is not just a digital agency; we're your
          partners in creativity.
        </Typography>
        <Stack direction='row' alignItems='center' gap={2} justifyContent='center'>
          {!isMobile && (
            <Typography variant='subtitle2' textTransform='uppercase'>
              scroll down
            </Typography>
          )}
          <IconButton
            onClick={handleDown}
            sx={{
              color: 'white'
            }}
          >
            <AppIcon name='arrow-down' size={20} />
          </IconButton>
        </Stack>
      </Stack>
    </TeamHeaderBox>
  )
}
