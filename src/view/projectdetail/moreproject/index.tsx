import { Button, Grid2, Stack, Typography } from '@mui/material'

import { projectList } from '@/constants/projects'
import ProjectPanel from '@/components/projectpanel'
import { AppIcon } from '@/core'

export default function MoreProjects() {
  return (
    <Grid2 container spacing='50px' component='ul'>
      <Grid2 size={12} component='li'>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='h3'>More of our projects</Typography>
          <Button
            variant='outlined'
            endIcon={<AppIcon name='arrow-right' size={20} />}
            sx={{
              width: 'fit-content'
            }}
          >
            See more
          </Button>
        </Stack>
      </Grid2>

      {projectList.web.slice(0, 2).map((item, index) => (
        <Grid2 size={{ md: 6, xs: 12 }}>
          <ProjectPanel
            header={item.title}
            description={item.description}
            img={item.img}
            stack={item.stack}
            tech='web'
            index={index}
          />
        </Grid2>
      ))}
    </Grid2>
  )
}
