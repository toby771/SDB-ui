import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Typography } from '@mui/material'

import { projectList } from '@/constants/projects'
import { StackType } from '@/types/stack'

export default function ProjectDetailHeader() {
  const { stack, id } = useParams()

  const project = useMemo(() => projectList[stack as StackType].at(parseInt(id as string)), [stack, id])

  return (
    <Stack gap={4}>
      <Stack direction='row'>
        <Typography variant='body1' color='textDisabled'>
          Projects / &nbsp;
        </Typography>
        <Typography variant='body1'>{project?.title}</Typography>
      </Stack>
      <Stack gap={2}>
        <Typography variant='h1' fontSize='50px'>
          {project?.projectName}
        </Typography>
        <Typography variant='body1' textTransform='capitalize' color='warning'>
          {project?.dateRange}
        </Typography>
      </Stack>
      <Typography variant='body1'>
        Frugl Market is a Saas product by Frugl Group as a solution to local small and medium grocery retailers to
        manage their products, orders, deliveries and more. It also provides a platform for these shops to extend their
        reach to more consumers who are using Frugl Grocery App.
      </Typography>
    </Stack>
  )
}
