import { Box, Button, Chip, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'

import { AppIcon } from '@/core'
import { StackType } from '@/types/stack'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'

interface TabPanelProps {
  header: string
  description: React.ReactNode
  img: string
  stack: string[]
  tech: StackType
  index: number
}

export default function ProjectPanel(props: TabPanelProps) {
  const { header, description, img, stack: stackList, tech, index } = props

  useIsomorphicLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.project-panel-${index}`,
          start: 'top 70%',
          end: 'top 80%',
          scrub: 3
        }
      })
      .fromTo(
        `.project-panel-${index}`,
        { y: -200, opacity: 0 },
        { y: 0, opacity: 1, delay: 2 + index * 4, duration: 0.1 }
      )

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.project-panel-button-${index}`,
          start: 'top 50%',
          end: 'top 80%',
          scrub: 3
        }
      })
      .fromTo(`.project-panel-button-${index}`, { opacity: 0 }, { opacity: 1 })

    document.fonts.ready.then(() => {
      const headerSplit = new SplitText(`.project-panel-text-01-${index}`, {
        type: 'chars' // Can be 'words', 'chars', or 'lines'
      })
      const descSplit = new SplitText(`.project-panel-text-02-${index}`, {
        type: 'chars' // Can be 'words', 'chars', or 'lines'
      })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.project-panel-text-01-${index}`,
            start: 'top 50%',
            end: 'top 80%',
            scrub: 3
          }
        })
        .from(headerSplit.chars, {
          x: 50,
          autoAlpha: 0,
          stagger: 0.2,
          delay: 3,
          duration: 4
        })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.project-panel-text-02-${index}`,
            start: 'top 50%',
            end: 'top 80%',
            scrub: 3
          }
        })
        .from(descSplit.chars, {
          x: -50,
          autoAlpha: 0,
          stagger: 0.05,
          delay: 8
        })
    })
  }, [])

  return (
    <Stack gap={3} height='100%' className={`project-panel-${index}`} width='100% !important'>
      <Box component='img' src={img} borderRadius='10px' height='100%' />
      <Stack gap={1}>
        <Typography variant='h6' className={`project-panel-text-01-${index}`}>
          {header}
        </Typography>
        <Typography variant='subtitle1' color='textDisabled' width='70%' className={`project-panel-text-02-${index}`}>
          {description}
        </Typography>
      </Stack>
      <Link to={`/project/${tech}/${index}`}>
        <Button
          className={`project-panel-button-${index}`}
          variant='outlined'
          endIcon={<AppIcon name='arrow-right' size={20} />}
          sx={{
            width: 'fit-content'
          }}
        >
          View
        </Button>
      </Link>
      <Stack component='ul' position='absolute' flexWrap='wrap' display='flex' direction='row' padding={2} gap={2}>
        {stackList.map((item, index) => (
          <Stack component='li' key={`index-${index}`}>
            <Chip
              label={item}
              variant='filled'
              sx={{
                background: 'rgba(255, 255, 255, 0.24)',
                backdropFilter: 'blur(2px)',
                padding: '8px 16px',
                textTransform: 'uppercase'
              }}
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
