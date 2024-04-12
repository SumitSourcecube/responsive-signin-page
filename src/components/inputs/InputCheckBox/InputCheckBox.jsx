import React from 'react'
import './InputCheckBox.scss'

const InputCheckBox = ({label, name}) => {
  return (
    <div className='InputcheckBox-component'>
        <input type="checkbox" id="checkbox" name={name} className='input-check'/>
        <label htmlFor="checkbox" className='input-lable'>{label}</label>
    </div>
  )
}

export default InputCheckBox