import { squadTitleAnimation } from '@/constants/scrolltriger'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { Box, styled, Typography } from '@mui/material'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'

const TitleBox = styled(Box)(({ theme }) => ({
  padding: '100px 50px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 20px'
  }
}))

export default function SquadTitle() {
  useIsomorphicLayoutEffect(() => {
    document.fonts.ready.then(() => {
      const titleSplit = new SplitText('.squad-title', {
        type: 'words' // Can be 'words', 'chars', or 'lines'
      })

      gsap.timeline(squadTitleAnimation).from(titleSplit.words, {
        y: -100,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 5,
        ease: 'back.inOut'
      })
    })
  }, [])

  return (
    <TitleBox id='squad-title'>
      <Typography variant='h4' letterSpacing='-1.92px' className='squad-title'>
        We thrive on turning your wildest design aspirations into stunning realities. At Silver Digital Bus, every
        project is a collaboration, every client is a friend, and every design and development is a work of art crafted
        with care and enthusiasm.
      </Typography>
    </TitleBox>
  )
}
