import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid2, Stack, Typography } from '@mui/material'

import { projectList } from '@/constants/projects'
import { StackType } from '@/types/stack'

import ProjectDetailPanel from '../panel'

export default function ProjectDetailGotchas() {
  const { stack, id } = useParams()

  const gotchas = useMemo(() => projectList[stack as StackType].at(parseInt(id as string))?.detail.gotchas, [stack, id])

  return (
    <Stack gap='50px'>
      <ProjectDetailPanel title='gotchas'>
        <Stack component='ul'>
          {gotchas?.description.map((item, index) => (
            <Stack component='li'>
              <Typography variant='body1' key={`index-${index}`}>
                {item}
                <br />
                <br />
              </Typography>
            </Stack>
          ))}
        </Stack>
      </ProjectDetailPanel>

      <Grid2 container spacing={3}>
        <Grid2 size={{ md: 6, xs: 12 }}>
          <Box component='img' src={gotchas?.img[0]} alt='gotchas-1' height='100%' width='100%' />
        </Grid2>
        <Grid2 size={{ md: 6, xs: 12 }} container>
          <Grid2 size={12}>
            <Box component='img' src={gotchas?.img[1]} alt='gotchas-2' height='100%' width='100%' />
          </Grid2>
          <Grid2 size={12}>
            <Box component='img' src={gotchas?.img[2]} alt='gotchas-3' height='100%' width='100%' />
          </Grid2>
        </Grid2>
      </Grid2>
    </Stack>
  )
}
