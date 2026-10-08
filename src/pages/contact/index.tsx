import { Box, Container, Stack, styled, Typography } from '@mui/material'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'

import { useDeviceType } from '@/hooks/useDeviceType'
import DetailBoard from '@/view/contact/detailboard'
import InputBoard from '@/view/contact/inputboard'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import LoopLinearBack from '@/assets/img/loop-linear.webp'

const ContactBox = styled(Box)(({ theme }) => ({
  padding: '50px 48px 200px 48px',
  [theme.breakpoints.down('md')]: {
    padding: '16px 20px'
  },
  background: `url(${LoopLinearBack}) no-repeat`,
  backgroundPosition: 'center bottom'
}))

export default function Contact() {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.contact-header', {
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
    <ContactBox>
      <Container>
        <Stack gap='50px'>
          <Typography variant='h1' paddingTop='124px' className='contact-header'>
            contact
          </Typography>
          <Stack
            direction={isMobile ? 'column' : 'row'}
            gap={isMobile ? '50px' : '100px'}
            justifyContent='space-between'
          >
            <InputBoard />
            <DetailBoard />
          </Stack>
        </Stack>
      </Container>
    </ContactBox>
  )
}
