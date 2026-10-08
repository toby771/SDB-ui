import { Divider, Stack, Typography } from '@mui/material'

import Avatar from '@/components/avatar'
import { Feedback } from '@/types/feedback'
import { useDeviceType } from '@/hooks/useDeviceType'

export default function FeedbackPanel(props: Feedback) {
  const { description, img, name, position, title } = props

  const { isMobile } = useDeviceType()

  return (
    <Stack gap={3}>
      <Stack>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </Stack>
      <Stack direction='row' gap={2} alignItems='center' paddingBottom={isMobile ? '24px' : '50px'}>
        <Avatar img={img} size={isMobile ? 36 : 64} />

        <Stack gap={isMobile ? '4px' : '6px'}>
          <Typography variant='body1' lineHeight='120%' letterSpacing='0.16px'>
            {name}
          </Typography>
          <Typography variant='body1' lineHeight='120%' letterSpacing='0.16px' color='textDisabled'>
            {position}
          </Typography>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  )
}
