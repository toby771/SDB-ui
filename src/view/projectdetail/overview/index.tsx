import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'

import { projectList } from '@/constants/projects'
import { StackType } from '@/types/stack'

import ProjectDetailPanel from '../panel'

export default function ProjectDetailOverview() {
  const { stack, id } = useParams()

  const overview = useMemo(
    () => projectList[stack as StackType].at(parseInt(id as string))?.detail.processOverview,
    [stack, id]
  )

  return (
    <ProjectDetailPanel title='process overview'>
      <Stack gap={6}>
        <Stack component='ul'>
          {overview?.description.map((item, index) => (
            <Stack component='li'>
              <Typography key={`index-${index}`}>
                {item}
                <br />
                <br />
              </Typography>
            </Stack>
          ))}
        </Stack>
        {overview?.img.map((item, index) => (
          <Box src={item} component='img' key={`index-${index}`} borderRadius='10px' />
        ))}
      </Stack>
    </ProjectDetailPanel>
  )
}
