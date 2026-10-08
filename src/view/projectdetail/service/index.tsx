import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Button as MuiButton, Stack, styled } from '@mui/material'

import { projectList } from '@/constants/projects'
import { StackType } from '@/types/stack'

import ProjectDetailPanel from '../panel'

const Button = styled(MuiButton)(() => ({
  borderRadius: '16px',
  backgroundColor: 'rgba(90, 196, 255, 0.16)',
  boxShadow: 'none',
  color: '#5AC4FF'
}))

export default function ProjectDetailService() {
  const { stack, id } = useParams()

  const project = useMemo(() => projectList[stack as StackType].at(parseInt(id as string)), [stack, id])

  return (
    <ProjectDetailPanel title='services'>
      <Stack component='ul' direction='row' gap={2} flexWrap='wrap'>
        {project?.detail.services.map((item, index) => (
          <Stack component='li' key={`index-${index}`}>
            <Button color='warning' variant='contained'>
              {item}
            </Button>
          </Stack>
        ))}
      </Stack>
    </ProjectDetailPanel>
  )
}
