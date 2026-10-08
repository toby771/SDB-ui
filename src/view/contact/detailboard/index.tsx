import { Stack, styled, Typography as MuiTypography } from '@mui/material'
import { Link } from 'react-router-dom'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/dist/SplitText'

import { socialUrl } from '@/constants'
import DetailPanel from './panel'
import { useDeviceType } from '@/hooks/useDeviceType'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'

const Typography = styled(MuiTypography)(({ theme }) => ({
  letterSpacing: '-0.64px',
  fontSize: '32px',
  lineHeight: '120%',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px'
  }
}))

const UnderlineTypography = styled(Typography)({
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
  textDecorationSkipInk: 'none',
  textUnderlineOffset: 'auto',
  textUnderlinePosition: 'from-font',
  textDecorationThickness: 'auto'
})

export default function DetailBoard() {
  const { isMobile } = useDeviceType()

  useIsomorphicLayoutEffect(() => {
    document.fonts.ready.then(() => {
      const headerSplit = new SplitText('.contact-description', {
        type: 'chars' // Can be 'words', 'chars', or 'lines'
      })

      gsap.from(headerSplit.chars, {
        y: -100,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'back.inOut'
      })
    })
  }, [])

  return (
    <Stack gap={4}>
      <Typography variant='h5' className='contact-description'>
        Send us more about your briliant projects:
      </Typography>
      <DetailPanel title='Email' index={0}>
        <Link to=''>
          <UnderlineTypography>hello@silverdigital.bus</UnderlineTypography>
        </Link>
      </DetailPanel>
      <DetailPanel title='Address' index={1}>
        <Typography>ORLANDO, FL 32806</Typography>
      </DetailPanel>
      <DetailPanel title='Email' index={2}>
        <Stack gap={isMobile ? 2 : 4} component='ul'>
          {socialUrl.map((item, index) => (
            <Stack component='li' key={`index-${index}`}>
              <Link to={item.link}>
                <UnderlineTypography>{item.title}</UnderlineTypography>
              </Link>
            </Stack>
          ))}
        </Stack>
      </DetailPanel>
    </Stack>
  )
}
