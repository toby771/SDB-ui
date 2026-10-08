import { Components, Theme } from '@mui/material/styles'

export const transitionCustomization: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      '@global': {
        body: {
          transition: 'all 0.3s linear' // Example transition
        }
      }
    }
  }
}
