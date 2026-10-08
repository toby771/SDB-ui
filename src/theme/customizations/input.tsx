import { Components, Theme } from '@mui/material/styles'

export const inputCustomization: Components<Theme> = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        width: 'fit-content',
        height: 'fit-content'
      }
    }
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        border: '1px solid',
        padding: '16px',
        variants: [
          {
            props: {
              size: 'large'
            },
            style: {
              padding: '15px',
              [theme.breakpoints.down('lg')]: {
                padding: '10px'
              }
            }
          }
        ]
      })
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        minHeight: '0px',
        transition: '0.3s',
        minWidth: '0px',
        padding: '16px 24px !important',
        borderRadius: '100px',
        fontSize: '18px',
        fontWeight: 600,
        display: 'flex',
        gap: '8px',
        border: '1px solid',
        lineHeight: '100%',
        width: '100%',
        boxShadow: 'none',
        '& .MuiButton-icon': {
          margin: '0px'
        },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              border: 'none'
            }
          },
          {
            props: { color: 'info' },
            style: {
              color: 'black'
            }
          }
        ]
      }
    }
  },
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        transition: '0.3s',
        ...theme.applyStyles('light', {
          color: 'black'
        }),
        variants: [
          {
            props: {
              variant: 'h1'
            },
            style: {
              textTransform: 'capitalize',
              wordWrap: 'break-word',
              [theme.breakpoints.down('md')]: {
                fontSize: '50px',
                fontWeight: '400'
              }
            }
          },
          {
            props: {
              variant: 'h2'
            },
            style: {
              textTransform: 'capitalize',
              wordWrap: 'break-word',
              [theme.breakpoints.down('md')]: {
                fontSize: '40px',
                fontWeight: '400'
              }
            }
          },
          {
            props: {
              variant: 'h5'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '20px'
              }
            }
          },
          {
            props: {
              variant: 'h4'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '32px',
                lineHeight: '40px'
              }
            }
          },
          {
            props: {
              variant: 'h6'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '24px'
              }
            }
          },
          {
            props: {
              variant: 'body1'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '16px'
              }
            }
          },
          {
            props: {
              variant: 'body2'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '18px'
              }
            }
          },
          {
            props: {
              variant: 'subtitle1'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '14px'
              }
            }
          },
          {
            props: {
              variant: 'subtitle2'
            },
            style: {
              [theme.breakpoints.down('md')]: {
                fontSize: '14px'
              }
            }
          }
        ]
      })
    }
  }
}
