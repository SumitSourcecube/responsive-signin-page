import React from 'react'
import './Button.scss'

const ButtonComponent = ({InnerText}) => {
  return (
    <div className='button-component-div'>
      <button className='button-component-element'>{InnerText}</button>
    </div>
  )
}

export default ButtonComponent