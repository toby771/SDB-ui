import { Box, Button, Container, Grid2, Stack, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import SplitText from 'gsap-trial/dist/SplitText'
import gsap from 'gsap-trial'

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { AppIcon } from '@/core/appicon'
import { routers } from '@/configs'
import LoopCircleBack from '@/assets/img/loop-circle.webp'

import SkillAccordionBoard from './accordionboard'
import { skillAnimation } from '@/constants/scrolltriger'
import { useDeviceType } from '@/hooks/useDeviceType'

const SkillsBox = styled(Box)(({ theme }) => ({
  padding: '150px 48px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 20px'
  },
  background: `url(${LoopCircleBack}) no-repeat`,
  backgroundPosition: 'center bottom'
}))

export default function Skills() {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    if (isMobile) return

    gsap.timeline(skillAnimation).fromTo('.skill-button', { opacity: 0 }, { opacity: 1 })

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.skill-header', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })

      gsap.timeline(skillAnimation).from(headerSplit.words, {
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
      <SkillsBox id='skill'>
        <Stack gap={4}>
          <Grid2 container minHeight='218px' alignItems='center' spacing={4}>
            <Grid2 size={{ md: 'grow', sm: 12, xs: 12 }}>
              <Typography variant='h2' maxWidth='800px' className='skill-header'>
                primary development skills
              </Typography>
            </Grid2>
            <Grid2 size={{ md: 'auto', sm: 12, xs: 12 }}>
              <Link to={routers.DevSkill}>
                <Button
                  endIcon={<AppIcon name='arrow-right' size={20} />}
                  variant='contained'
                  color='info'
                  className='skill-button'
                >
                  see all skills
                </Button>
              </Link>
            </Grid2>
          </Grid2>
          <SkillAccordionBoard />
        </Stack>
      </SkillsBox>
    </Container>
  )
}
