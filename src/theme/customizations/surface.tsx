import { Components, Theme } from '@mui/material/styles'

export const surfaceCustomization: Components<Theme> = {
  MuiContainer: {
    styleOverrides: {
      root: {
        padding: '0px !important',
        maxWidth: '1440px !important'
      }
    }
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        background: 'transparent !important',
        boxShadow: 'none',
        '&.Mui-expanded': {
          paddingBottom: '24px'
        }
      }
    }
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        padding: '0px !important',
        borderTop: '1px solid #353535',
        boxShadow: 'none'
      },
      content: ({ theme }) => ({
        transition: '0.3s',
        margin: '24px 0px',
        '&.Mui-expanded': {
          margin: '24px 0px',
          '& .MuiTypography-root:nth-child(1)': {
            fontSize: '50px',
            [theme.breakpoints.down('md')]: {
              fontSize: '32px'
            }
          }
        },
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column'
        }
      })
    }
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        padding: '0px'
      }
    }
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        padding: '0px',
        overflowX: 'auto',
        '& .MuiTabs-scroller': {
          overflowX: 'auto !important'
        },
        '& .MuiTabs-scroller::-webkit-scrollbar': {
          display: 'none'
        }
      },
      list: {
        transition: '0.3s',
        gap: '16px'
      },
      indicator: {
        display: 'none'
      }
    }
  },
  MuiTab: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        border: '1px solid #696A6E',
        borderRadius: '100px',
        '&.Mui-selected': {
          backgroundColor: '#5AFFA1',
          color: 'black !important',
          borderColor: 'transparent'
        }
      }
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        width: 'fit-content',
        height: 'fit-content',
        borderRadius: '100px'
      },
      label: {
        transition: '0.3s',
        padding: '0px',
        fontSize: '16px',
        fontWeight: 600,
        color: 'white'
      }
    }
  },
  MuiStack: {
    styleOverrides: {
      root: {
        transition: '0.3s'
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        transition: '0.3s',
        boxShadow: 'none'
      }
    }
  }
}
