import React from 'react'
import './InputWithIcon.css'

export default function InputWithIcon({name,disabled,value,icon}) {
  return (
    <label htmlFor={name} className="icon-input-wrapper">
        {icon}
        <input type="text" name='name' disabled={disabled} value={value}/>
    </label>
  )
}
