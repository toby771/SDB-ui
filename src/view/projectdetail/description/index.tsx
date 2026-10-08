import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'

import { projectList } from '@/constants/projects'
import { StackType } from '@/types/stack'

import ProjectDetailPanel from '../panel'

export default function ProjectDetailDescription() {
  const { stack, id } = useParams()

  const project = useMemo(() => projectList[stack as StackType].at(parseInt(id as string)), [stack, id])

  return (
    <ProjectDetailPanel title='descriptions'>
      <Typography variant='body1'>{project?.detail.description}</Typography>
    </ProjectDetailPanel>
  )
}
