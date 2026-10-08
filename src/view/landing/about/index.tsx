import { Box, Container, Grid2, Stack, styled, Typography } from '@mui/material'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'

import { aboutPanels } from '@/constants'
import { useDeviceType } from '@/hooks/useDeviceType'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { aboutAnimation } from '@/constants/scrolltriger'

import AboutPanel from './panel'

const AboutBox = styled(Box)(({ theme }) => ({
  padding: '50px 50px 150px 50px',
  [theme.breakpoints.down('md')]: {
    padding: '16px 20px 50px 20px'
  }
}))

const Divider = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: '100%',
  height: '4px'
}))

export default function About() {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    if (isMobile) return
    gsap.timeline(aboutAnimation).fromTo('.about-divider', { width: '0%' }, { width: 100, delay: 2, duration: 1 })

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.about-text-01', {
        type: 'chars' // Can be 'words', 'chars', or 'lines'
      })
      const descSplit = new SplitText('.about-text-02', {
        type: 'chars' // Can be 'words', 'chars', or 'lines'
      })

      gsap.timeline(aboutAnimation).from(headerSplit.chars, {
        x: 50,
        autoAlpha: 0,
        stagger: 0.2,
        delay: 3,
        duration: 4
      })

      gsap.timeline(aboutAnimation).from(descSplit.chars, {
        x: -50,
        autoAlpha: 0,
        stagger: 0.05,
        delay: 8
      })
    })
  }, [isMobile])

  return (
    <Container>
      <AboutBox id='about'>
        <Stack gap='100px'>
          <Stack gap={4}>
            <Typography
              variant='h4'
              letterSpacing='-0.96px'
              fontWeight={500}
              lineHeight='56px'
              className='about-text-01'
            >
              ‘ Despite being a small team, we believe that our size gives us an advantage, allowing us to be nimble,
              adaptable, and able to work closely with our clients to deliver truly awesome development.’
            </Typography>

            <Stack direction={isMobile ? 'column' : 'row'} gap={4}>
              <Stack
                width={isMobile ? '30px' : '100px'}
                display='flex'
                justifyContent='center'
                className='about-divider'
              >
                <Divider />
              </Stack>
              <Typography variant='h6' color='secondary' className='about-text-02'>
                Digital thinkers who build awesome Software.
              </Typography>
            </Stack>
          </Stack>

          <Grid2 container component='ul' spacing='10px'>
            {aboutPanels.map((item, index) => (
              <Grid2 size={{ lg: 3, md: 6, sm: 6, xs: 6 }} component='li' key={`index-${index}`}>
                <AboutPanel header={item.header} title={item.title} index={index} unit={item.unit} />
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </AboutBox>
    </Container>
  )
}
