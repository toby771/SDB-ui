import { Button, Stack } from '@mui/material'
import { useState } from 'react'
import gsap from 'gsap-trial'

import LabelInput from '@/components/input'
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect'

export default function InputBoard() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  useIsomorphicLayoutEffect(() => {
    gsap.fromTo('.contact-name', { y: -200, opacity: 0 }, { y: 0, opacity: 1, ease: 'back.inOut' })
    gsap.fromTo('.contact-email', { y: -200, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5, ease: 'back.inOut' })
    gsap.fromTo('.contact-message', { y: -200, opacity: 0 }, { y: 0, opacity: 1, delay: 1, ease: 'back.inOut' })
    gsap.fromTo('.contact-btn', { y: -200, opacity: 0 }, { y: 0, opacity: 1, delay: 1.5, ease: 'back.inOut' })
  }, [])

  return (
    <Stack gap={3} width='100%'>
      <LabelInput label='Name' value={name} setValue={setName} placeholder='Name' className='contact-name' />
      <LabelInput label='Email' value={email} setValue={setEmail} placeholder='Your email' className='contact-email' />
      <LabelInput
        className='contact-message'
        label='Message'
        value={message}
        setValue={setMessage}
        rows={15}
        placeholder='Tell us about your brilliant ideas here...'
      />
      <Button variant='contained' color='info' sx={{ width: '200px' }} className='contact-btn'>
        SUBMIT
      </Button>
    </Stack>
  )
}
