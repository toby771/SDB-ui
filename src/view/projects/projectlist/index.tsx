import { Box, Grid2, Stack, Tab, Tabs } from '@mui/material'
import { useMemo, useState } from 'react'

import { StackList } from '@/constants'
import { type StackType } from '@/types/stack'
import { projectList } from '@/constants/projects'

import ProjectPanel from '@/components/projectpanel'

export default function ProjectList() {
  const [selectedStack, setSelectedStack] = useState<StackType>('web')

  const handleTabChange = (_: React.SyntheticEvent, value: StackType) => {
    setSelectedStack(value)
  }

  const renderTabs = useMemo(
    () => (
      <>
        <Tabs className='feature-button' value={selectedStack} onChange={handleTabChange}>
          {StackList.map((item, index) => (
            <Tab label={item} key={`index-${index}`} value={item} />
          ))}
        </Tabs>
        {StackList.map(
          (item, index) =>
            item === selectedStack && (
              <Grid2
                container
                component='ul'
                role='tabpanel'
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                spacing='50px'
              >
                {projectList[selectedStack].map((item, index) => (
                  <Grid2 key={`index-${index}`} size={{ md: 6, sm: 12 }}>
                    <ProjectPanel
                      header={item.title}
                      description={item.description}
                      img={item.img}
                      stack={item.stack}
                      tech={selectedStack}
                      index={index}
                    />
                  </Grid2>
                ))}
              </Grid2>
            )
        )}
      </>
    ),
    [selectedStack]
  )

  return (
    <Box marginTop='100px'>
      <Stack gap='50px'>{renderTabs}</Stack>
    </Box>
  )
}
