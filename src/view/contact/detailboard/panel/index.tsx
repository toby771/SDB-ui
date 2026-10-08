import React from 'react'

import { Paper as MuiPaper, Stack, styled, Typography } from '@mui/material'
import { useDeviceType } from '@/hooks/useDeviceType'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import gsap from 'gsap-trial'

const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: '32px',
  borderRadius: '16px',
  backgroundColor: 'rgba(255, 255, 255, 0.04)',
  backgroundImage: 'none',
  boxShadow: 'none',
  [theme.breakpoints.down('md')]: {
    padding: '24px'
  },
  ...theme.applyStyles('light', {
    backgroundColor: '#F5F5F5'
  })
}))

export default function DetailPanel({
  children,
  title,
  index
}: {
  children: React.ReactNode
  title: string
  index: number
}) {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo(
      `.contact-panel-${index}`,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, delay: index * 0.5, ease: 'back.inOut', duration: 3 }
    )
  }, [])

  return (
    <Paper className={`contact-panel-${index}`}>
      <Stack gap={isMobile ? 2 : 3}>
        <Typography variant='body1' color='textDisabled' fontSize='24px !important'>
          {title}:
        </Typography>
        {children}
      </Stack>
    </Paper>
  )
}
