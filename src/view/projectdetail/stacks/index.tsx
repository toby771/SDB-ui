import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Button as MuiButton, Stack, styled, Typography } from '@mui/material'

import { projectList } from '@/constants/projects'
import { StackType } from '@/types/stack'

import ProjectDetailPanel from '../panel'
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

export default function ProjectDetailStacks() {
  const { stack, id } = useParams()

  const project = useMemo(
    () => projectList[stack as StackType].at(parseInt(id as string))?.detail.techStack,
    [stack, id]
  )

  return (
    <ProjectDetailPanel title='tech stacks'>
      <Stack gap={6}>
        <Stack component='ul' direction='row' flexWrap='wrap' gap={2}>
          {project?.icons.map((IconComponent, index) => (
            <Stack component='li' key={`index-${index}`}>
              <Button startIcon={<IconComponent color='inherit' />} variant='contained'>
                <Typography variant='subtitle1' lineHeight='30px'>
                  {project?.lang[index]}
                </Typography>
              </Button>
            </Stack>
          ))}
        </Stack>
        <Typography variant='body1' color='textDisabled'>
          {project?.description}
        </Typography>
      </Stack>
    </ProjectDetailPanel>
  )
}
