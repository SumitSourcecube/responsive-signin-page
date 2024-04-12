import React from 'react'
import GoogleLogo from 'assets/images/icons/Google.png'
import './GoogleButton.scss'

const GoogleButton = () => {
  return (
    <div className='google-button-component'>
        <button className='google-button-component-element'><img src={GoogleLogo} alt="G" />Sign in with Google</button>
    </div>
  )
}

export default GoogleButton