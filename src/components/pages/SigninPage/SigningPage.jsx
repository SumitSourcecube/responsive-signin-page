import React from 'react'
import './SigningPage.scss'
// import './Signin.scss'
import Logo from 'assets/images/icons/Logo.png'
import TextInput from 'components/inputs/TextInput/TextInput'
import InputCheckBox from 'components/inputs/InputCheckBox/InputCheckBox'
import ButtonComponent from 'components/inputs/Button/Button'
import GoogleButton from 'components/inputs/GoogleButton/GoogleButton'

const SigningPage = () => {
  return (
    <div className='signin-page-container'>
        <div className="signin-page-card">
            <div className="siginpage-logo">
                <img src={Logo} alt="logo" />
                <span id='logo-text'>PNFT Market</span>
            </div>
            <div className='signin-form-card'>
                <form className='signin-form'>
                    <div className="signin-form-header">
                        <span id='signing-header-text1'>NFT Access</span>
                        <span id='signing-header-text2'>Please fill your detail to access your account.</span>
                    </div>
                    <div className="signin-form-body">
                        <div className="form-body-inputs">
                            <div className="form-input-email">
                                <TextInput id={'email'} type={'email'} label={'Email'} placeholder={'debra.holt@example.com'}/>
                            </div>
                            <div className="form-input-password">
                                <TextInput id={'password'} type={'password'} label={'Password'} placeholder={'PASSWORD'}/>
                            </div>
                            <div className="form-input-check">
                                <InputCheckBox label={'Remember me'} />
                                <span className="form-input-check-text">Forgot password?</span>
                            </div>
                        </div>
                        <div className="form-body-buttons">
                            <div className="form-signing-button">
                                <ButtonComponent InnerText={'Sign In'}/>
                            </div>
                            <div className="form-googl-signing-button">
                                <GoogleButton/>
                            </div>
                            <div className='form-question-text'><span id="form-question-text1">Don’t have an account? </span><span id="form-question-text2">Sign up</span></div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="signing-page-side-image">

            </div>
        </div>
    </div>
  )
}

export default SigningPage