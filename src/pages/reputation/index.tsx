import { Box, Container, styled, Typography } from '@mui/material'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'

import ReputationFeedback from '@/view/reputation/feedbacklist'
import ReputationSlider from '@/view/reputation/slider'
import ContentImg from '@/assets/img/feedback_content.webp'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import LoopBack from '@/assets/img/loop.webp'

const ReputationBox = styled(Box)({
  paddingTop: '124px'
})

const HeaderBox = styled(Box)({
  padding: '50px 48px 100px 48px',
  display: 'flex',
  flexDirection: 'column',
  gap: '100px',
  justifyContent: 'center',
  alignItems: 'center',

  background: `url(${LoopBack}) no-repeat`,
  backgroundPosition: 'center top'
})

export default function Reputation() {
  useIsomorphicLayoutEffect(() => {
    gsap.fromTo('.feedback-content', { y: 200 }, { y: 0, duration: 4 })

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.feedback-header', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })
      gsap.from(headerSplit.words, {
        y: -100,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.inOut'
      })
    })
  }, [])

  return (
    <ReputationBox>
      <Container>
        <HeaderBox>
          <Typography variant='h1' textAlign='center' maxWidth='800px' className='feedback-header'>
            What our client think of us
          </Typography>
          <Box component='img' src={ContentImg} alt='Content Img' className='feedback-content' />
        </HeaderBox>
        <ReputationSlider />
        <ReputationFeedback />
      </Container>
    </ReputationBox>
  )
}
