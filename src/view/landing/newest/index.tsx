import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'
import { Box, Container, LinearProgress, Stack, styled, Typography } from '@mui/material'

import { StackList } from '@/constants'
import { projectList } from '@/constants/projects'

import ProjectPanel from './panel'
import { useDeviceType } from '@/hooks/useDeviceType'

gsap.registerPlugin(ScrollTrigger)

const NewestBox = styled(Box)({
  padding: '0px 48px 50px 48px'
})

export default function Newest() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)

  const { isMobile } = useDeviceType()

  useEffect(() => {
    if (!containerRef?.current) return
    const sections = gsap.utils.toArray<HTMLDivElement>('.project-panel-item', containerRef.current)
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      duration: 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: '+=3500',
        onUpdate: scrollTrigger => {
          setProgress(scrollTrigger.progress)
        }
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true))
    }
  }, [])

  return (
    <Box ref={containerRef} paddingTop='130px'>
      <Container>
        <NewestBox>
          <Stack direction={isMobile ? 'column' : 'row'} justifyContent='space-between' alignItems='center' gap={4}>
            <Typography variant='h2'>newest project</Typography>
            <LinearProgress
              value={progress * 100}
              variant='determinate'
              color='warning'
              sx={{
                width: isMobile ? '100%' : '400px',
                backgroundColor: '#696A6E'
              }}
            />
          </Stack>
        </NewestBox>
      </Container>

      <Stack
        width={`calc(${100 * 10}% + 295px)`}
        height='calc(100vh - 250px)'
        flexWrap='nowrap'
        direction='row'
        sx={{
          overscrollBehavior: 'none'
        }}
      >
        {StackList.map((tech, techId) =>
          projectList[tech].map((item, index) => (
            <ProjectPanel
              key={`index-${techId}-${index}`}
              img={item.img}
              title={item.title}
              description={item.description}
              tech={tech}
              stack={item.stack}
              index={index}
            />
          ))
        )}
        {/* <Stack padding='50px' gap={3} className='project-panel-item' width='250px'>
          <Typography variant='h6'>Ready to be amaze with our project?</Typography>
          <Button variant='outlined' endIcon={<AppIcon name='arrow-right' size={20} />}>
            See all projects
          </Button>
        </Stack> */}
      </Stack>
    </Box>
  )
}
