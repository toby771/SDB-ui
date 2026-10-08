import { RouterProvider } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import gsap from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/dist/ScrollTrigger'
import SplitText from 'gsap-trial/dist/SplitText'

import routes from './routes'

import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'keen-slider/keen-slider.min.css'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
