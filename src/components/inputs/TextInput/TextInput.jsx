import React from 'react'
import './TextInput.scss'

const TextInput = ({id, placeholder, label, type}) => {
  return (
    <div className='input-component-div'>
      <label htmlFor={id} className='input-component-label'>{label}</label>
      <div className="input-component-tag">
        <input type={type} className={'input-text-component'} id={id} placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default TextInput