import Slider from 'react-slick'
import { Paper as MuiPaper, Stack, styled, Typography, useColorScheme } from '@mui/material'

import Avatar from '@/components/avatar'
import { feedbackData } from '@/constants'
import { AppIcon } from '@/core/appicon'
import { useDeviceType } from '@/hooks/useDeviceType'
import { StackList } from '@/constants'
import { Feedback } from '@/types/feedback'

import './style.css'

const Paper = styled(MuiPaper)(({ theme }) => ({
  backgroundColor: '#202020',
  border: '1px solid #000',
  padding: '40px',
  borderRadius: '32px',
  [theme.breakpoints.down('md')]: {
    padding: '20px'
  },
  ...theme.applyStyles('light', {
    backgroundColor: 'white',
    borderColor: 'transparent',
    boxShadow: '0px 4px 64px 0px rgba(0, 0, 0, 0.04)'
  })
}))

const sliderSettings = {
  centerMode: true,
  centerPadding: '20%',
  infinite: true,
  slidesToShow: 1
}

export default function FeedbackSlider() {
  const { isMobile } = useDeviceType()
  const { mode } = useColorScheme()

  return (
    <Stack className='feedback-slider'>
      <Slider {...sliderSettings}>
        {StackList.map(stack =>
          feedbackData[stack].map((item: Feedback, index: number) => (
            <Paper key={`index-${index}`}>
              <Stack gap={isMobile ? '20px' : 5}>
                <Stack direction='row' alignItems='flex-start' justifyContent='space-between'>
                  <Stack direction='row' gap={2} alignItems='center'>
                    <Avatar img={item.img} size={64} />

                    <Stack gap='6px'>
                      <Typography variant='body2'>{item.name}</Typography>
                      <Typography variant='subtitle2' color={mode === 'dark' ? '#DDDDDD' : '#696A6E'}>
                        {item.position}
                      </Typography>
                    </Stack>
                  </Stack>
                  <AppIcon colors='blue' name='quoteup' size={48} />
                </Stack>

                <Typography variant='h6' fontStyle='italic'>
                  {item.description}
                </Typography>
              </Stack>
            </Paper>
          ))
        )}
      </Slider>
    </Stack>
  )
}
