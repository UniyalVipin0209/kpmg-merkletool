import React from 'react';
import { BsEye,BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from 'react-google-login';

const SignUp =(props)=>{ 

return  <div className='row'>
<div className='col-md-12 d-flex justify-content-center'>
    <div className='form-medium-box'>
        <div className='row form-field m-0 mt-3'>
            <div className='col-md-12 '>
                <label>Enter your Name</label>
            </div>
            <div className='col-md-12'> 
                <input type="text" className='form-control' onChange={props.handleChange} name="name" value={props.name}/>
                {props.errors !=='' &&
                    <p style={{color:'red',fontSize:'12px'}}>{props.errors.name}</p>
                }
            </div>
        </div>
        <div className='row form-field m-0 mt-1'>
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
        <div className='row form-field m-0 mt-1'>
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
        <div className='row form-field m-0 mt-1'>
            <div className='col-md-12 '>
                <label>Enter your PRC License</label>
            </div>
            <div className='col-md-12 input-pass'>
                    <input type="text" className='form-control' onChange={props.handleChange} name="prc" value={props.prc}/><br/>
                    {props.errors !=='' &&
                        <p style={{color:'red',fontSize:'12px'}}>{props.errors.prc}</p>
                    }
                </div>
        </div>

        <div className='row form-field m-0 mt-1'>
            <div className='col-md-12 '>
                <label>Clinic/Hospital Affiliation</label>
            </div>
            <div className='col-md-12 input-pass'>
                    <input type="text" className='form-control' onChange={props.handleChange} name="clinic" value={props.clinic}/><br/>
                    {props.errors !=='' &&
                        <p style={{color:'red',fontSize:'12px'}}>{props.errors.clinic}</p>
                    }
                </div>
        </div>
        <div className='row m-0 mt-2'>
            <div className='col-md-12 d-flex align-items-center'>
                <input type="checkbox" onChange={props.handleCheckbox}/> &nbsp;<label className='remember-me'><span>I Here by accept the </span><span style={{color:'#7E4F9B'}}><u>Terms & Conditions</u></span><span> and the </span>
                <span style={{color:'#7E4F9B'}}><u>Privacy policy.</u></span>
                <span></span></label>
            </div>
        </div>
        <div className='row m-0 mt-4'>
            <div className='col-md-12 '>
                <button className='btn form-signIn' onClick={props.handleSignUp}>Sign Up</button>
            </div>
            <div className='col-md-12 mt-4 '>
            <GoogleLogin
                        clientId="1271211834-424085hevob6it7nqia01ti4ltv9s3rt.apps.googleusercontent.com"
                        render={renderProps => (
                            <button id="googlebutton1" className='btn form-signIn-google'  onClick={renderProps.onClick} disabled={renderProps.disabled}><FcGoogle/> &nbsp; &nbsp; Sign In with google</button>
                        )}
                        buttonText="Login"
                        onSuccess={props.responseGoogleSignUp}
                        onFailure={props.responseGoogleSignUp}
                        cookiePolicy={'single_host_origin'}
                    />
                {/* <button className='btn form-g-signIn'> <FcGoogle></FcGoogle> Sign Up with google</button>  */}
            </div>
        </div>
    </div>
</div>
</div>
}

export default SignUp;