import { Box, Container, styled, Typography } from '@mui/material'

import ProjectList from '@/view/projects/projectlist'
import LoopBack from '@/assets/img/loop.webp'

const ProjectsBox = styled(Box)(({ theme }) => ({
  padding: '224px 50px 150px 50px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '104px 20px 50px 20px'
  },
  background: `url(${LoopBack}) no-repeat`,
  backgroundPosition: 'center top'
}))

export default function Projects() {
  return (
    <ProjectsBox>
      <Container>
        <Typography variant='h1' textAlign='center'>
          projects
        </Typography>
        <ProjectList />
      </Container>
    </ProjectsBox>
  )
}
