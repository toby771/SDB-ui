import { FC } from 'react'
import { Stack } from '@mui/material'

import { color } from '@/theme'

import Logo from '@/assets/svg/logo.svg'
import ArrowRight from '@/assets/svg/arrow-right.svg'
import Sun from '@/assets/svg/sun.svg'
import Menu from '@/assets/svg/menu.svg'
import ArrowDown from '@/assets/svg/arrow-down.svg'
import Star from '@/assets/svg/star.svg'
import Attachment from '@/assets/svg/attachment.svg'
import Award from '@/assets/svg/award.svg'
import Display from '@/assets/svg/display.svg'
import Group from '@/assets/svg/group.svg'
import ShieldStar from '@/assets/svg/shield-star.svg'
import TimeCirle from '@/assets/svg/time-circle.svg'
import Quoteup from '@/assets/svg/quoteup.svg'
import Border from '@/assets/svg/border.svg'
import Close from '@/assets/svg/close.svg'
import ArrowTopRight from '@/assets/svg/arrow-top-right.svg'
import Loop from '@/assets/svg/loop.svg'

export const ICON_MAP = {
  logo: Logo,
  'arrow-right': ArrowRight,
  sun: Sun,
  menu: Menu,
  'arrow-down': ArrowDown,
  star: Star,
  attachment: Attachment,
  award: Award,
  display: Display,
  group: Group,
  'shield-star': ShieldStar,
  'time-circle': TimeCirle,
  quoteup: Quoteup,
  border: Border,
  close: Close,
  'arrow-top-right': ArrowTopRight,
  loop: Loop
}

export type IconName = keyof typeof ICON_MAP

interface AppIconProps {
  name: IconName
  width?: string | number
  height?: string | number
  className?: string
  size?: number
  colors?: keyof typeof color
  borderRadius?: string
}

export const AppIcon: FC<AppIconProps> = ({
  name,
  colors,
  size = 20,
  height,
  width,
  borderRadius,
  className,
  ...props
}) => {
  const IconComponent = ICON_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  return (
    <Stack
      className={`app-icon ${className}`}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 'max-content',

        color: colors && color[colors],
        '& svg': { width: width || size, height: height || size, borderRadius: borderRadius }
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}
