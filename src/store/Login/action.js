import axios from 'axios';
import {LOGIN_DATA,LOGIN_DATA_ERR,SIGNUP_DATA, SIGNUP_DATA_ERR, ALL_PATIENT_DATA, ALL_PATIENT_DATA_ERR,GET_KCCQ_CATEGORY,GET_KCCQ_CATEGORY_ERR,
  GET_PATIENT_PROGRESS,GET_PATIENT_PROGRESS_ERR,FORGOT_DATA_ERR,FORGOT_DATA,VERIFY_OTP_ERR,VERIFY_OTP,UPADATE_PASSWORD_ERR,UPADATE_PASSWORD,VERIFY_OTP_LOGIN_ERR,VERIFY_OTP_LOGIN,
  UPDATE_PROFILE_ERR,UPDATE_PROFILE,RESET_OTP_VERIFICATION_ERR,RESET_OTP_VERIFICATION,LOGIN_RESENT_API_ERR,LOGIN_RESENT_API,FORGOT_RESENT_API_ERR,FORGOT_RESENT_API} from './types'
  import Swal from 'sweetalert2'
  import withReactContent from 'sweetalert2-react-content'
  const MySwal = withReactContent(Swal)
  
  
  const devURLTnega = "http://165.22.223.12:5000/";
  
  
  export const postLoginApi = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/signin',data)
    .then((res) => {
      console.log(res)
      dispatch({type:LOGIN_DATA,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:LOGIN_DATA_ERR,payload:err});
    })
  }

  export const resentPostApi = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/resendAuth',data)
    .then((res) => {
      console.log(res)
      dispatch({type:LOGIN_RESENT_API,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:LOGIN_RESENT_API_ERR,payload:err});
    })
  }

  export const resentForgotApi = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/resendtoken',data)
    .then((res) => {
      console.log(res)
      dispatch({type:FORGOT_RESENT_API,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:FORGOT_RESENT_API_ERR,payload:err});
    })
  }

  export const updateProfile = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/editprofile',data,{    headers: { 
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    })
    .then((res) => {
      console.log(res)
      dispatch({type:UPDATE_PROFILE,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:UPDATE_PROFILE_ERR,payload:err});
    })
  }

  export const otpMailReset = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/resetmail',data,{    headers: { 
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    })
    .then((res) => {
      console.log(res)
      dispatch({type:RESET_OTP_VERIFICATION,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:RESET_OTP_VERIFICATION_ERR,payload:err});
    })
  }

  export const ForgotPostApi = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/forgotpassword',data)
    .then((res) => {
      console.log(res)
      dispatch({type:FORGOT_DATA,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:FORGOT_DATA_ERR,payload:err});
    })
  }

  export const otpVerifyApi = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/resettokenverify',data)
    .then((res) => {
      console.log(res)
      dispatch({type:VERIFY_OTP,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:VERIFY_OTP_ERR,payload:err});
    })
  }

  export const otpVerifyLoginApi = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/authenticate',data)
    .then((res) => {
      console.log(res)
      dispatch({type:VERIFY_OTP_LOGIN,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:VERIFY_OTP_LOGIN_ERR,payload:err});
    })
  }


  export const postUpdatePassword = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/updatepassword',data)
    .then((res) => {
      console.log(res)
      dispatch({type:UPADATE_PASSWORD,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:UPADATE_PASSWORD_ERR,payload:err});
    })
  }

  export const postSignUp = (data) => (dispatch) => {
    axios.post(devURLTnega + 'api/doc/signup',data)
    .then((res) => {
      console.log(res)
      dispatch({type:SIGNUP_DATA,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:SIGNUP_DATA_ERR,payload:err});
    })
  }

  export const getAllConsultedPatient = () => (dispatch) => {
    axios.get(devURLTnega + 'api/pat/getallpat',{
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((res) => {
      console.log(res)
      dispatch({type:ALL_PATIENT_DATA,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:ALL_PATIENT_DATA_ERR,payload:err});
    })
  }

  export const getKccqPatientCategory = () => (dispatch) => {
    axios.get(devURLTnega + 'api/pat/getpatmoncount',{
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((res) => {
      console.log(res)
      dispatch({type:GET_KCCQ_CATEGORY,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:GET_KCCQ_CATEGORY_ERR,payload:err});
    })
  }

  export const getPatientProgress = () => (dispatch) => {
    axios.get(devURLTnega + 'api/pat/getmonthlyavg',{
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((res) => {
      console.log(res)
      dispatch({type:GET_PATIENT_PROGRESS,payload:res});
    })
    .catch((err) => {
      console.log(err)
      dispatch({type:GET_PATIENT_PROGRESS_ERR,payload:err});
    })
  }
  

