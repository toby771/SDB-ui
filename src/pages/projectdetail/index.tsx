import { useParams } from 'react-router-dom'
import { Box, Container, Divider, Stack, styled } from '@mui/material'

import ProjectDetailHeader from '@/view/projectdetail/header'
import { useMemo } from 'react'
import { projectList } from '@/constants/projects'
import { StackType } from '@/types/stack'
import ProjectDetailDescription from '@/view/projectdetail/description'
import ProjectDetailService from '@/view/projectdetail/service'
import ProjectDetailStacks from '@/view/projectdetail/stacks'
import ProjectDetailOverview from '@/view/projectdetail/overview'
import ProjectDetailDesign from '@/view/projectdetail/design'
import ProjectDetailGotchas from '@/view/projectdetail/gotchas'
import ThankYou from '@/view/projectdetail/thankyou'
import MoreProjects from '@/view/projectdetail/moreproject'

const ProjectDetailBox = styled(Box)(({ theme }) => ({
  padding: '50px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 20px'
  }
}))

export default function ProjectDetail() {
  const { stack, id } = useParams()

  const project = useMemo(() => projectList[stack as StackType].at(parseInt(id as string)), [stack, id])

  return (
    <ProjectDetailBox paddingTop='124px !important'>
      <Container>
        <Stack gap='50px'>
          <ProjectDetailHeader />
          <Box component='img' src={project?.img} borderRadius={3} alt={project?.title} />

          <ProjectDetailDescription />
          <Divider />

          <ProjectDetailService />
          <Divider />

          <ProjectDetailStacks />
          <Divider />

          <ProjectDetailOverview />
          <Divider />

          <ProjectDetailDesign />
          <Divider />

          <ProjectDetailGotchas />
          <Divider />

          <ThankYou />
          <Divider />

          <MoreProjects />
        </Stack>
      </Container>
    </ProjectDetailBox>
  )
}
