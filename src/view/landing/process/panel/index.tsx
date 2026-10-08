import { Stack, styled, Typography } from '@mui/material'
import SplitText from 'gsap-trial/dist/SplitText'
import gsap from 'gsap-trial'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'
import { color } from '@/theme'
import { useDeviceType } from '@/hooks/useDeviceType'

const DividerStack = styled(Stack)({
  width: '24px',
  height: '100%'
})

const CircleStack = styled(Stack)(({ theme }) => ({
  width: '24px',
  height: '24px',
  border: '1px solid white',
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'black',
  ...theme.applyStyles('light', {
    borderColor: 'black',
    backgroundColor: 'white'
  })
}))

export default function ProcessPanel({
  title,
  description,
  index
}: {
  title: string
  description: string
  index: number
}) {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    if (isMobile) return

    const trigger = {
      scrollTrigger: {
        trigger: `.process-panel-${index}`,
        start: 'top 50%',
        end: 'top 80%',
        scrub: 3
      }
    }

    gsap.timeline(trigger).fromTo(`.process-panel-body-${index}`, { y: -100, opacity: 0 }, { y: 0, opacity: 1 })
    gsap.timeline(trigger).to(`.process-panel-track-${index}`, { backgroundColor: color.green })

    document.fonts.ready.then(() => {
      const titleSplit = new SplitText(`.process-panel-txt-${index}`, {
        type: 'chars' // Can be 'words', 'chars', or 'lines'
      })

      gsap.timeline(trigger).from(titleSplit.chars, {
        x: -100,
        autoAlpha: 0,
        stagger: 3,
        delay: 5,
        duration: 8,
        ease: 'back.inOut'
      })
    })
  }, [isMobile])

  return (
    <Stack direction='row' gap='50px' className={`process-panel-${index}`}>
      <DividerStack>
        <CircleStack position='absolute' top={0} left={0} className={`process-panel-track-${index}`} />
      </DividerStack>
      <Stack gap={2} className={`process-panel-body-${index}`}>
        <Stack direction='row' alignItems='flex-end'>
          <Typography variant='h2' fontFamily='Archivo' lineHeight='normal'>
            {index}.&nbsp;
          </Typography>
          <Typography variant='h5' textTransform='uppercase' fontWeight={200} className={`process-panel-txt-${index}`}>
            {title}
          </Typography>
        </Stack>
        <Typography variant='body1' className={`process-panel-txt-${index}`}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  )
}
