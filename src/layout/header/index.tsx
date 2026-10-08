import { Link } from 'react-router-dom'
import { Box, Button, Container, IconButton, Popover, Stack, styled, Typography, useColorScheme } from '@mui/material'

import { AppIcon } from '@/core/appicon'
import { useDeviceType } from '@/hooks/useDeviceType'
import { useState } from 'react'
import { pageNavs, socialUrl } from '@/constants'
import { color } from '@/theme'
import { routers } from '@/configs'

const HeaderBox = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  zIndex: '10000',
  padding: '32px 50px',

  [theme.breakpoints.down('md')]: {
    padding: '16px 20px'
  }
}))

const TouchButton = styled(Button)(({ theme }) => ({
  ...theme.applyStyles('light', {
    backgroundColor: 'white'
  })
}))

export default function Header() {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const { mode, systemMode, setMode } = useColorScheme()

  const { isDesktop } = useDeviceType()

  const handleMode = () => {
    if ((systemMode || mode) === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  window.onscroll = scrollFunction

  return (
    <HeaderBox
      sx={() => ({
        backdropFilter: isSticky ? 'blur(20px)' : 'none',
        backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
        transition: '0.3s'
      })}
    >
      <Container>
        <Stack direction='row' justifyContent='space-between'>
          <Stack direction='row' gap='8px' alignItems='center' component={Link} to='/'>
            <AppIcon name='logo' size={isDesktop ? 60 : 40} />
            {isDesktop && (
              <Stack direction='row'>
                <Typography variant='h6' fontWeight={600}>
                  Silver&nbsp;
                </Typography>
                <Typography variant='h6' fontWeight={200}>
                  Digital Bus LLC
                </Typography>
              </Stack>
            )}
          </Stack>

          <Stack direction='row' gap={!isDesktop ? '24px' : '48px'}>
            <Stack gap='24px' direction='row' alignItems='center'>
              <IconButton size='large' onClick={handleMode}>
                <AppIcon name='sun' size={!isDesktop ? 22 : 20} />
              </IconButton>

              {isDesktop && (
                <Link to={routers.Contact}>
                  <TouchButton variant='outlined' endIcon={<AppIcon name='arrow-right' size={20} />}>
                    GET IN TOUCH
                  </TouchButton>
                </Link>
              )}
            </Stack>
            <Stack gap='24px' direction='row' alignItems='center'>
              {isDesktop && (
                <Typography variant='body1' fontWeight={500}>
                  Menu
                </Typography>
              )}
              <TouchButton
                onClick={handleClick}
                sx={{
                  padding: '10px 10px !important',
                  backgroundColor: 'transparent',
                  borderColor: 'transparent'
                }}
              >
                <AppIcon name='menu' width={isDesktop ? 63 : 40} height={isDesktop ? 44 : 40} />
              </TouchButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{
          zIndex: 10000
        }}
        slotProps={{
          paper: {
            sx: theme => ({
              width: '600px',
              height: '820px',
              padding: '32px',
              backgroundColor: '#010202',
              backgroundImage: 'none',
              [theme.breakpoints.down('md')]: {
                width: '335px',
                height: '664px'
              },
              ...theme.applyStyles('light', {
                backgroundColor: 'white'
              })
            })
          }
        }}
      >
        <Stack gap={4} height='100%' justifyContent='space-between'>
          <Stack gap={4}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Typography
                variant='body1'
                sx={{
                  color: '#CECECE'
                }}
              >
                Menu
              </Typography>
              <Stack direction='row' gap={2} alignItems='center'>
                <Typography variant='subtitle2'>Close</Typography>

                <IconButton
                  onClick={handleClose}
                  sx={{
                    padding: isDesktop ? '16px' : '10px'
                  }}
                >
                  <AppIcon name='close' size={20} />
                </IconButton>
              </Stack>
            </Stack>
            <Stack component='ul' gap={4}>
              {pageNavs.map((item, index) => (
                <Stack component='li' key={`index-${index}`}>
                  <Link to={item.link}>
                    <Typography variant='h4'>{item.title}</Typography>
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack justifyContent='space-between' direction='row'>
            <Stack justifyContent='flex-end'>
              <Link to=''>
                <Typography
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
              <Typography>ORLANDO, FL 32806</Typography>
            </Stack>
            <Stack component='ul' gap={2}>
              {socialUrl.map((item, index) => (
                <Stack component='li' key={`index-${index}`}>
                  <Link to={item.link}>
                    <Typography color={color.blue}>{item.title}</Typography>
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Popover>
    </HeaderBox>
  )
}
