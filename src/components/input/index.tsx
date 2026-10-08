import React, { Dispatch } from 'react'

import { FormControl, FormLabel, InputBase, useColorScheme } from '@mui/material'

interface LabelInputProps {
  value: string | undefined
  setValue: Dispatch<React.SetStateAction<string>>
  placeholder: string
  label: string | undefined
  rows?: number
  type?: string
  className?: string
}

export default function LabelInput({
  value,
  setValue,
  label,
  rows,
  type,
  placeholder,
  className = ''
}: LabelInputProps) {
  const { mode } = useColorScheme()

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <FormControl fullWidth className={className}>
      <FormLabel
        htmlFor={label}
        sx={theme => ({
          transition: '0.3s',
          color: '#696A6E',
          fontSize: '18px',
          ...theme.applyStyles('dark', {
            color: '#FFF'
          }),
          '&.Mui-focused': {
            color: 'black',
            ...theme.applyStyles('dark', {
              color: 'white'
            })
          }
        })}
      >
        {label}
      </FormLabel>
      <InputBase
        onChange={onHandleChange}
        value={value}
        name={label}
        required
        placeholder={placeholder}
        multiline={!!rows}
        rows={rows}
        type={type}
        sx={theme => ({
          flexGrow: 1,
          fontSize: '18px',
          backgroundColor: 'transparent',
          borderRadius: '24px',
          padding: '16px 24px',
          border: '1px solid #696A6E',
          overflow: 'auto',
          marginTop: '16px',
          '&.Mui-focused': {
            borderColor: mode === 'dark' ? 'white' : 'black'
          },
          ...theme.applyStyles('dark', {
            backgroundColor: 'transparent'
          })
        })}
      />
    </FormControl>
  )
}
