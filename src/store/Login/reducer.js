import {LOGIN_DATA_ERR,LOGIN_DATA,SIGNUP_DATA , SIGNUP_DATA_ERR, ALL_PATIENT_DATA, ALL_PATIENT_DATA_ERR,GET_KCCQ_CATEGORY,GET_KCCQ_CATEGORY_ERR,
    GET_PATIENT_PROGRESS,GET_PATIENT_PROGRESS_ERR,FORGOT_DATA_ERR,FORGOT_DATA,VERIFY_OTP_ERR,VERIFY_OTP,UPADATE_PASSWORD_ERR,UPADATE_PASSWORD,
    VERIFY_OTP_LOGIN_ERR,VERIFY_OTP_LOGIN,UPDATE_PROFILE_ERR,UPDATE_PROFILE,RESET_OTP_VERIFICATION_ERR,RESET_OTP_VERIFICATION,LOGIN_RESENT_API_ERR,LOGIN_RESENT_API,
    FORGOT_RESENT_API_ERR,FORGOT_RESENT_API} from './types';

const initialState = {
    message:'waiting for the reducer',
    login_err: '',
    login_data:'',
    signUp_data:'',
    signUp_data_err:'',
    getAllpatient:'',
    getAllpatient_err:'',
    getCategoryKccq:'',
    getCategoryKccq_err:'',
    patientProgress:'',
    patientProgress_err:'',
    forgot_err:'',
    forgot:'',
    otpVerification_err:'',
    otpVerification:'',
    password_updation_err:'',
    password_updation:'',
    Otp_Login_err:'',
    Otp_Login:'',
    profile_edit_err:'',
    profile_edit:'',
    reset_otp_err:'',
    reset_otp:'',
    resendForgotApi_err:'',
    resendForgotApi:'',
}

export default function reducer(state=initialState,{type,payload}){
    switch(type){
        case FORGOT_RESENT_API_ERR:
            return{
                ...state,
                resendForgotApi_err:payload
            }
        case FORGOT_RESENT_API:
            return{
                ...state,
                resendForgotApi:payload
            }
        case LOGIN_RESENT_API_ERR:
            return{
                ...state,
                resendLoginApi_err:payload
            }
        case LOGIN_RESENT_API:
            return{
                ...state,
                resendLoginApi:payload
            }
        case RESET_OTP_VERIFICATION_ERR:
            return{
                ...state,
                reset_otp_err:payload
            }
        case RESET_OTP_VERIFICATION:
            return{
                ...state,
                reset_otp:payload
            }
        case UPDATE_PROFILE_ERR:
            return{
                ...state,
                profile_edit_err:payload
            }
        case UPDATE_PROFILE:
            return{
                ...state,
                profile_edit:payload
            }
        case VERIFY_OTP_LOGIN_ERR:
            return{
                ...state,
                Otp_Login_err:payload
            }
        case VERIFY_OTP_LOGIN:
            return{
                ...state,
                Otp_Login:payload
            }
        case UPADATE_PASSWORD_ERR:
            return{
                ...state,
                password_updation_err:payload
            }
        case UPADATE_PASSWORD:
            return{
                ...state,
                password_updation:payload
            }
        case VERIFY_OTP_ERR:
            return{
                ...state,
                otpVerification_err:payload
            }
        case VERIFY_OTP:
            return{
                ...state,
                otpVerification:payload
            }
        case FORGOT_DATA_ERR:
            return{
                ...state,
                forgot_err:payload
            }
        case FORGOT_DATA:
            return{
                ...state,
                forgot:payload
            }
        case GET_PATIENT_PROGRESS_ERR:
            return{
                ...state,
                patientProgress_err:payload
            }
        case GET_PATIENT_PROGRESS:
            return{
                ...state,
                patientProgress:payload
            }
        case GET_KCCQ_CATEGORY_ERR:
            return{
                ...state,
                getCategoryKccq_err:payload
            }
        case GET_KCCQ_CATEGORY:
            return{
                ...state,
                getCategoryKccq:payload
            }
        case ALL_PATIENT_DATA_ERR:
            return{
                ...state,
                getAllpatient_err:payload
            }
        case ALL_PATIENT_DATA:
            return{
                ...state,
                getAllpatient:payload
            }
        case SIGNUP_DATA_ERR:
            return{
                ...state,
                signUp_data_err:payload
            }
        case SIGNUP_DATA:
            return{
                ...state,
                signUp_data:payload
            }
        case LOGIN_DATA_ERR:
            return{
                ...state,
                login_err:payload
            }
        case LOGIN_DATA:
            return{
                ...state,
                login_data:payload
            }
        default:
            return{
                ...state
            }
    }
}