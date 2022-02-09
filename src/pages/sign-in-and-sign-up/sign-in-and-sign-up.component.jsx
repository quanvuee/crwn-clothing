import './sign-in-and-sign-up.styles.scss'
import React from 'react'
import Signin from '../../components/signin/signin.component'
import Signup from '../../components/signup/signup.component'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <Signin/>
        <Signup/>
    </div>
)

export default SignInAndSignUpPage