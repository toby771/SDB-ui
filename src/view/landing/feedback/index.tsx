import { Box, Button, Container, Grid2, Stack, styled, Typography } from '@mui/material'
import SplitText from 'gsap-trial/dist/SplitText'
import gsap from 'gsap-trial'

import { AppIcon } from '@/core/appicon'
import FeedbackSlider from './slider'
import { routers } from '@/configs'
import { Link } from 'react-router-dom'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { feedbackAnimation } from '@/constants/scrolltriger'
import { useDeviceType } from '@/hooks/useDeviceType'

const FeedbackBox = styled(Box)(({ theme }) => ({
  padding: '150px 48px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 20px'
  }
}))

export default function Feedback() {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    if (isMobile) return

    gsap.timeline(feedbackAnimation).fromTo('.feedback-btn', { opacity: 0 }, { opacity: 1 })
    gsap.timeline(feedbackAnimation).fromTo('.feedback-slider', { opacity: 0 }, { opacity: 1, delay: 3 })

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.feedback-header', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })
      const titleSplit = new SplitText('.feedback-title', {
        type: 'chars' // Can be 'words', 'chars', or 'lines'
      })

      gsap.timeline(feedbackAnimation).from(headerSplit.words, {
        y: -100,
        autoAlpha: 0,
        stagger: 3,
        duration: 8,
        ease: 'back.inOut'
      })

      gsap.timeline(feedbackAnimation).from(titleSplit.chars, {
        y: -100,
        autoAlpha: 0,
        stagger: 3,
        delay: 6,
        duration: 8,
        ease: 'back.inOut'
      })
    })
  }, [])

  return (
    <FeedbackBox>
      <Stack gap='100px'>
        <Container className='feedback'>
          <Grid2 container minHeight='218px' alignItems='center' spacing={4}>
            <Grid2 size={{ md: 'grow', sm: 12, xs: 12 }}>
              <Typography variant='h2' maxWidth='800px' className='feedback-header'>
                feedback
              </Typography>
            </Grid2>
            <Grid2 size={{ md: 'auto', sm: 12, xs: 12 }}>
              <Link to={routers.Reputation}>
                <Button
                  endIcon={<AppIcon name='arrow-right' size={20} />}
                  variant='contained'
                  color='info'
                  className='feedback-btn'
                >
                  see all feedback
                </Button>
              </Link>
            </Grid2>
            <Grid2 size={12}>
              <Typography variant='body1' maxWidth='925px' className='feedback-title'>
                Read through our testimonials to see why our clients love working with us and how we can help you
                achieve your business goals through creative and effective design.
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
        <FeedbackSlider />
      </Stack>
    </FeedbackBox>
  )
}
