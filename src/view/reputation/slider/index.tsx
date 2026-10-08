import { useMemo, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { Box, Stack, styled, Typography } from '@mui/material'

import Avatar from '@/components/avatar'
import { feedbackData, StackList } from '@/constants'
import LoopLinearBack from '@/assets/img/loop-linear.webp'
import { type Feedback } from '@/types/feedback'

import './style.css'

const SliderBox = styled(Box)({
  cursor: 'pointer',

  background: `url(${LoopLinearBack}) no-repeat`,
  backgroundPosition: 'center bottom'
})

export default function ReputationSlider() {
  const [curIndex, setCurIndex] = useState<number>(0)
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })

        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', () => nextTimeout)
        slider.on('detailsChanged', instance => {
          setCurIndex(instance.track.details.rel)
          nextTimeout()
        })
      }
    ]
  )

  const linearFeedbackData = useMemo(() => {
    const data: Feedback[] = []

    StackList.map(stack => {
      return feedbackData[stack].map((item: Feedback) => {
        return data.push(item)
      })
    })

    return data
  }, [])

  return (
    <Stack gap='100px' alignItems='center'>
      <Stack direction='row'>
        {linearFeedbackData.map((item, index) => (
          <Stack
            width='63px'
            height='4px'
            key={`index-${index}`}
            sx={theme => ({
              backgroundColor: index === curIndex ? theme.palette.info.main : '#696A6E',
              transition: '0.3s'
            })}
          />
        ))}
      </Stack>

      <SliderBox ref={sliderRef} className='keen-slider'>
        {StackList.map((stack, stackId) =>
          feedbackData[stack].map((item, index) => (
            <Stack
              key={`index-${stackId}-${index}`}
              component='li'
              alignItems='center'
              className='keen-slider__slide'
              gap={8}
              sx={{
                padding: '0px 120px 100px 120px'
              }}
            >
              <Typography textAlign='center' variant='h5' letterSpacing='-0.8px'>
                {item.description}
              </Typography>
              <Stack gap='28px' alignItems='center'>
                <Box
                  borderRadius='100%'
                  sx={theme => ({
                    border: '1px solid',
                    borderColor: theme.palette.info.main
                  })}
                >
                  <Avatar img={item.img} size={72} />
                </Box>
                <Stack direction='row'>
                  <Typography variant='body1'>{item.name}</Typography>
                  <Typography variant='body1' color='textDisabled'>
                    ,&nbsp;{item.position}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ))
        )}
      </SliderBox>
    </Stack>
  )
}
