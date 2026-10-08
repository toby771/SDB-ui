import { useMemo, useState } from 'react'
import { Box, Stack, styled, Tab, Tabs } from '@mui/material'

import { feedbackData, StackList } from '@/constants'
import { StackType } from '@/types/stack'

import FeedbackPanel from './feedbackpanel'

const FeedbackBox = styled(Box)(({ theme }) => ({
  padding: '50px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 24px'
  }
}))

export default function ReputationFeedback() {
  const [selectedStack, setSelectedStack] = useState<StackType>('web')

  const handleTabChange = (_: React.SyntheticEvent, value: StackType) => {
    setSelectedStack(value)
  }

  const renderTabs = useMemo(
    () => (
      <Stack gap='50px'>
        <Tabs className='feature-button' value={selectedStack} onChange={handleTabChange}>
          {StackList.map((item, index) => (
            <Tab label={item} key={`index-${index}`} value={item} />
          ))}
        </Tabs>
        {StackList.map(
          (item, index) =>
            item === selectedStack && (
              <Stack
                component='ul'
                role='tabpanel'
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                gap='50px'
              >
                {feedbackData[selectedStack].map((item, index) => (
                  <Stack key={`index-${index}`} component='li'>
                    <FeedbackPanel {...item} />
                  </Stack>
                ))}
              </Stack>
            )
        )}
      </Stack>
    ),
    [selectedStack]
  )

  return <FeedbackBox>{renderTabs}</FeedbackBox>
}
