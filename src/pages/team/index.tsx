import { Box, Container } from '@mui/material'

import TeamHeader from '@/view/team/header'
import SquadSlider from '@/view/team/slider'
import Squad from '@/view/team/squad'
import SquadTitle from '@/view/team/title'
import LoopBack from '@/assets/img/loop.webp'

export default function Team() {
  return (
    <Box
      paddingTop='124px'
      sx={{
        background: `url(${LoopBack}) no-repeat`,
        backgroundPosition: 'center top'
      }}
    >
      <Container>
        <TeamHeader />
        <SquadSlider />
        <SquadTitle />
        <Squad />
      </Container>
    </Box>
  )
}
