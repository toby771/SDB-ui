import { Box, Button, Chip, Stack, Typography } from '@mui/material'

import { StackType } from '@/types/stack'
import { Link } from 'react-router-dom'
import { useDeviceType } from '@/hooks/useDeviceType'

export default function ProjectPanel({
  img,
  title,
  description,
  tech,
  stack,
  index
}: {
  img: string
  title: string
  description: string
  tech: StackType
  stack: string[]
  index: number
}) {
  const { isMobile } = useDeviceType()

  return (
    <Box
      component='div'
      className='project-panel-item'
      position='relative'
      display='flex'
      alignItems='flex-end'
      sx={{
        background: `url(${img}) lightgray 50% / cover no-repeat`,
        width: '100vw'
      }}
    >
      <Stack component={Link} to={`/${tech}/${index}`}>
        <Button
          sx={{
            width: '120px',
            height: '120px',
            background: 'rgba(255, 255, 255, 0.40)',
            backdropFilter: 'blur(10px)',
            border: 'none',
            textTransform: 'capitalize',
            top: '10%',
            right: '20%',
            position: 'absolute'
          }}
        >
          View Details
        </Button>
      </Stack>
      <Stack
        padding={isMobile ? '20px' : '50px 150px'}
        justifyContent='space-between'
        direction={isMobile ? 'column' : 'row'}
        width='100%'
        gap={2}
      >
        <Stack gap={3}>
          <Typography variant='h4'>{title}</Typography>
          <Typography variant='body1'>{description}</Typography>
        </Stack>
        <Stack direction='row' gap='8px'>
          {stack.map((item, index) => (
            <Chip
              label={item}
              variant='filled'
              key={`index-${index}`}
              sx={{
                background: 'rgba(255, 255, 255, 0.24)',
                backdropFilter: 'blur(2px)',
                padding: '16px 16px',
                textTransform: 'uppercase'
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  )
}
