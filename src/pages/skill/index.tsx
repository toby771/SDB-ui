import { Box, Container, Stack, styled, Typography } from '@mui/material'

import SkillAccordionBoard from '@/view/landing/skills/accordionboard'
import LoopBack from '@/assets/img/loop.webp'

const DevSkillBox = styled(Box)(({ theme }) => ({
  padding: '124px 50px 50px 50px',
  background: `url(${LoopBack}) no-repeat`,
  backgroundPosition: 'center top',
  [theme.breakpoints.down('md')]: {
    padding: '124px 20px 16px 20px'
  }
}))

export default function DevSkill() {
  return (
    <DevSkillBox>
      <Container>
        <Stack gap='50px'>
          <Typography variant='h1' maxWidth='70%'>
            primary development skills
          </Typography>
          <SkillAccordionBoard />
        </Stack>
      </Container>
    </DevSkillBox>
  )
}
