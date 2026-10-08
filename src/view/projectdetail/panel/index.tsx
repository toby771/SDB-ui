import { Grid2, Typography } from '@mui/material'

export default function ProjectDetailPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Grid2 container spacing='29px'>
      <Grid2 size={{ md: 5, xs: 12 }}>
        <Typography variant='h3' textTransform='capitalize'>
          {title}
        </Typography>
      </Grid2>
      <Grid2 size={{ md: 7, xs: 12 }}>{children}</Grid2>
    </Grid2>
  )
}
