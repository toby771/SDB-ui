import { Box, Grid2, Stack, styled, Typography } from '@mui/material'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'

import { member } from '@/constants/member'
import { AppIcon } from '@/core'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'

import MemberPanel from './memberpanel'
import { squadBodyAnimation } from '@/constants/scrolltriger'

const SquadBox = styled(Box)(({ theme }) => ({
  padding: '50px 50px 150px 50px',
  [theme.breakpoints.down('md')]: {
    padding: '16px 20px'
  }
}))

export default function Squad() {
  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline(squadBodyAnimation)
      .fromTo(
        '.squad-arrow',
        { x: -400, y: 400, scale: 0.5 },
        { x: 0, y: 0, ease: 'back.inOut', scale: 1, duration: 0.5 }
      )

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.squad-body-header', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })
      const descSplit = new SplitText('.squad-body-desc', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })

      gsap.timeline(squadBodyAnimation).from(headerSplit.words, {
        y: -100,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.inOut'
      })

      gsap.timeline(squadBodyAnimation).from(descSplit.words, {
        x: -100,
        autoAlpha: 0,
        stagger: 0.05,
        ease: 'back.inOut',
        duration: 0.5
      })
    })
  }, [])

  return (
    <SquadBox id='squad-body'>
      <Stack gap={4}>
        <Stack direction='row' justifyContent='space-between'>
          <Stack gap={4}>
            <Typography variant='h2' className='squad-body-header'>
              our squad
            </Typography>
            <Typography variant='body1' width='75%' className='squad-body-desc'>
              Our team is a tight-knit family of developers, designers, artists, and visionaries, all bound by the same
              creative and software enthusiasm.
            </Typography>
          </Stack>
          <AppIcon name='arrow-top-right' size={234} className='squad-arrow' />
        </Stack>

        <Grid2 container spacing={3}>
          {member.map((item, index) => (
            <Grid2 size={{ lg: 4, md: 6, xs: 12 }}>
              <MemberPanel name={item.name} role={item.role} img={item.photo} index={index} key={`index-${index}`} />
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </SquadBox>
  )
}
