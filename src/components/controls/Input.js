import React from 'react'
import { TextField } from '@material-ui/core'


export const Input = (props) => {
    const { variant, name, label, value, error = null, onChange } = props
    return (
        <TextField variant={variant || 'outlined'}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && { error: true, helperText: error })}
        />
    )
}
