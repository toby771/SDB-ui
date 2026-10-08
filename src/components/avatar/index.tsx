import MuiAvatar from '@mui/material/Avatar'

interface AvatarProps {
  img: string
  size: number
}

export default function Avatar(props: AvatarProps) {
  const { img, size } = props

  return <MuiAvatar alt='avatar' src={img} sx={{ width: size, height: size }} />
}
