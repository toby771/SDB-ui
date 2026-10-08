import { Link } from 'react-router-dom'
import { Box, Container, Grid2, Stack, styled, Typography as MuiTypography } from '@mui/material'

import { AppIcon } from '@/core/appicon'
import { useDeviceType } from '@/hooks/useDeviceType'
import { footerNav, socialUrl } from '@/constants'

const FooterBox = styled(Box)(({ theme }) => ({
  padding: '96px 48px 32px 48px',
  [theme.breakpoints.down('md')]: {
    padding: '24px 20px'
  }
}))

const Typography = styled(MuiTypography)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center'
  }
}))

const NavTypograph = styled(Typography)({
  textTransform: 'uppercase'
})

export default function Footer() {
  const { isNotDesktop } = useDeviceType()

  return (
    <Container>
      <FooterBox>
        <Stack gap={12}>
          <Grid2 container columns={13} component='ul' gap={isNotDesktop ? '24px' : ''}>
            <Grid2 size={{ lg: 7, md: 13, sm: 13, xs: 13 }} component='li'>
              <Stack gap={4}>
                <Stack
                  direction='row'
                  gap='8px'
                  alignItems='center'
                  justifyContent={isNotDesktop ? 'center' : ''}
                  component={Link}
                  to='/'
                >
                  <AppIcon name='logo' size={60} />
                  <Stack direction='row'>
                    <Typography variant='h6' fontWeight={600}>
                      Silver&nbsp;
                    </Typography>
                    <Typography variant='h6' fontWeight={200}>
                      Digital Bus LLC
                    </Typography>
                  </Stack>
                </Stack>

                <Stack>
                  <Typography variant='subtitle1' fontWeight={400} color='textDisabled'>
                    Registered on
                  </Typography>
                  <Typography variant='subtitle1' fontWeight={500}>
                    2875 S Orange Ave STE500 NUM 6779
                  </Typography>
                </Stack>

                <Link to=''>
                  <Typography
                    variant='subtitle1'
                    sx={{
                      textDecorationLine: 'underline',
                      textDecorationStyle: 'solid',
                      textDecorationSkipInk: 'none',
                      textUnderlineOffset: 'auto',
                      textUnderlinePosition: 'from-font',
                      textDecorationThickness: 'auto'
                    }}
                  >
                    hello@silverdigital.bus
                  </Typography>
                </Link>
              </Stack>
            </Grid2>

            {footerNav.map((item, index) => (
              <Grid2 size={{ lg: 3, md: 13, sm: 13, xs: 13 }} component='li' key={`index-${index}`}>
                <Stack gap='32px'>
                  <NavTypograph color='textDisabled' variant='subtitle1' letterSpacing='2px' fontWeight={400}>
                    {item.header}
                  </NavTypograph>
                  <Stack component='ul' gap='32px'>
                    {item.children.map((item, index) => (
                      <Stack component='li' key={`index-${index}`}>
                        <Stack component={Link} to={item.link}>
                          <NavTypograph variant='button' fontWeight={500}>
                            {item.title}
                          </NavTypograph>
                        </Stack>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Grid2>
            ))}
          </Grid2>

          <Stack direction={isNotDesktop ? 'column' : 'row'} gap='48px'>
            {!isNotDesktop && (
              <NavTypograph flex='1 0 0' variant='button' color='textDisabled'>
                © 2024 Silver Digital Bus
              </NavTypograph>
            )}

            <Stack direction='row' component='ul' gap={5} flex='1 0 0' justifyContent='center'>
              {socialUrl.map((item, index) => (
                <Stack component='li' key={`index-${index}`}>
                  <Stack component={Link} to={item.link}>
                    <Typography variant='button'>{item.title}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>

            <Stack flex='1 0 0' direction={isNotDesktop ? 'column' : 'row'} justifyContent='center'>
              <NavTypograph variant='button' color='textDisabled'>
                For assistance you may call us at:
              </NavTypograph>
              <NavTypograph variant='button'>ORLANDO, FL 32806</NavTypograph>
            </Stack>

            {isNotDesktop && (
              <NavTypograph flex='1 0 0' variant='button' color='textDisabled'>
                © 2024 Silver Digital Bus
              </NavTypograph>
            )}
          </Stack>
        </Stack>
      </FooterBox>
    </Container>
  )
}
