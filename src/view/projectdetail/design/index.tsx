import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid2, Stack, Typography } from '@mui/material'

import { projectList } from '@/constants/projects'
import { StackType } from '@/types/stack'

import ProjectDetailPanel from '../panel'

export default function ProjectDetailDesign() {
  const { stack, id } = useParams()

  const design = useMemo(() => projectList[stack as StackType].at(parseInt(id as string))?.detail.design, [stack, id])

  return (
    <Stack gap='50px'>
      <ProjectDetailPanel title='UI design'>
        {design?.description.map((item, index) => (
          <Typography key={`index-${index}`} variant='body1'>
            {item}
            <br />
            <br />
          </Typography>
        ))}
      </ProjectDetailPanel>
      <Grid2 container spacing={3} component='ul'>
        {design?.img.map((item, index) => (
          <Grid2 size={{ lg: 4, md: 6, xs: 12 }} component='li'>
            <Box component='img' src={item} key={`index-${index}`} alt={item} width='100%' height='100%' />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  )
}
