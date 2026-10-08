import { Button as MuiButton, Grid2, Stack, Typography, styled } from '@mui/material'

import { techSkillsData } from '@/constants/skills'
import CustomAccordion from '@/components/accordion'
import { color } from '@/theme'

const Button = styled(MuiButton)(({ theme }) => ({
  borderRadius: '8px',
  backgroundColor: color.grey,
  boxShadow: 'none',
  ...theme.applyStyles('light', {
    backgroundColor: '#F3F3F3',
    color: 'black'
  }),
  ':hover': {
    backgroundColor: theme.palette.info.main,
    color: 'black',
    boxShadow: 'none'
  },
  [theme.breakpoints.down('md')]: {
    padding: '8px 16px !important'
  }
}))

export default function SkillAccordionBoard() {
  return (
    <Stack component='ul'>
      {techSkillsData.skills.map((item, index) => (
        <Stack component='li' key={`index-${index}`}>
          <CustomAccordion key={`index-${index}`} title={item.name} subtitle={item.description} index={index}>
            <Grid2 spacing={2} container>
              <Grid2 size='grow' />
              <Grid2 size={{ lg: 6, md: 12, sm: 12, xs: 12 }} container component='ul'>
                {item.icons.map((IconComponent, index) => (
                  <Grid2 component='li' key={`index-${index}`} size='auto'>
                    <Button startIcon={<IconComponent color='inherit' />} variant='contained'>
                      <Typography variant='subtitle1' lineHeight='30px'>
                        {item.lang[index]}
                      </Typography>
                    </Button>
                  </Grid2>
                ))}
              </Grid2>
            </Grid2>
          </CustomAccordion>
        </Stack>
      ))}
    </Stack>
  )
}
