import React from 'react';
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from 'react-google-login';
import loading from '../../Assets/Loading_icon.gif'
//import Google from '../../Layout/Components/google'
import { BsEye,BsEyeSlash } from "react-icons/bs";

const Login =(props)=>{
    return  <div className='row'>
    <div className='col-md-12 d-flex justify-content-center'>
        <div className='form-medium-box'>
            <div className='row form-field m-0 mt-4'>
                <div className='col-md-12 '>
                    <label>Enter your E-Mail ID</label>
                </div>
                <div className='col-md-12'>
                    <input type="text" className='form-control' onChange={props.handleChange} name="email" value={props.email}/>
                    {props.errors !=='' &&
                        <p style={{color:'red',fontSize:'12px'}}>{props.errors.email}</p>
                    }
                </div>
            </div>
            <div className='row form-field m-0 mt-4'>
                <div className='col-md-12 '>
                    <label>Enter your password</label>
                </div>
                <div className='col-md-12 input-pass'>
                    <div>
                        <input type={props.showPass === false ? "password" : "text" } className='form-control' onChange={props.handleChange} name="password" value={props.password}/>{props.showPass === false ? <BsEye className='mt-2 eyebutton' onClick={props.handleEye}/> : <BsEyeSlash className='mt-2 eyebutton' onClick={props.handleEye}/>}<br/>
                    </div>
                    {props.errors !=='' &&
                        <p style={{color:'red',fontSize:'12px'}}>{props.errors.password}</p>
                    }
                </div>
            </div>
            <div className='row m-0 mt-4'>
                <div className='col-md-12 d-flex align-items-center'>
                <input type="checkbox" /> &nbsp;<label className='remember-me'><span>Remember your password?</span><span></span></label>
                </div>
                <div className='col-md-12 ' style={{textAlign:'right'}} onClick={props.handleForgot}>
                    <label className='acc-generator'>Forgot Password?</label>
                </div>
                <div className='col-md-12 ' style={{textAlign:'right'}}>
                    <label className='acc-generator' onClick={props.handleSignUpToggle}>Create new account?</label>
                </div>
            </div>
            <div className='row m-0 mt-4'>
                <div className='col-md-12 '>
                    <button className='btn form-signIn' onClick={props.handleSubmit}>Sign In</button>
                </div>
                <div className='col-md-12 mt-4 '>
                    {/* <Google/> */}
                    {/* <GoogleLogin
                        clientId="1271211834-424085hevob6it7nqia01ti4ltv9s3rt.apps.googleusercontent.com"
                        render={renderProps => (
                            <button id="googlebutton1" className='btn form-signIn-google'  onClick={renderProps.onClick} disabled={renderProps.disabled}><FcGoogle/> &nbsp; &nbsp; Sign In with google</button>
                        )}
                        buttonText="Login"
                        onSuccess={props.responseGoogle}
                        onFailure={props.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /> */}
                </div>
            </div>
        </div>
    </div>
</div>
}

export default Login;