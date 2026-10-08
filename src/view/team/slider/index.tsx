import Slider from 'react-slick'
import { Box, Stack } from '@mui/material'

import About01 from '@/assets/img/about_squad/about01.webp'
import About02 from '@/assets/img/about_squad/about02.webp'
import About03 from '@/assets/img/about_squad/about03.webp'

import './style.css'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
}

const photoList = [About01, About02, About03]

export default function SquadSlider() {
  return (
    <Stack className='squad-slider'>
      <Slider {...sliderSettings} swipe>
        {photoList.map((item, index) => (
          <Box
            component='img'
            key={`index-${index}`}
            alt={`squad-${index}`}
            src={item}
            height='725px'
            width='fit-content !important'
          />
        ))}
      </Slider>
    </Stack>
  )
}
