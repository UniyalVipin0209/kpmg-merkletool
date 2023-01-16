import {POST_KCCQ_QUESTION,POST_KCCQ_QUESTION_ERR,POST_KCCQ_REMARK_ERR,POST_KCCQ_REMARK,GET_GENERATE_ID,GET_GENERATE_ID_ERR,
    CREATE_PATIENT_ERR,CREATE_PATIENT,GET_ALL_PATIENT_ERR,GET_ALL_PATIENT,GET_PATIENT_DATA_ERR,GET_PATIENT_DATA,POST_CREATININE_ERR,POST_CREATININE,
    POST_CYS_CREATININE_ERR,POST_CYS_CREATININE,POST_LV_EJECTION_ERR,POST_LV_EJECTION} from './types';

    
import { WALLET_ADDRESS, GET_MERKLE_TREE, GET_HASH, GET_PROOF,GET_ROOT, VERIFY_PROOF } from "./types";
// import 
const initialState = {
    message:'waiting for the reducer',
    kccqQuestion:'',
    kccqQuestion_err:'',
    kccqRemark_err:'',
    kccqRemark:'',
    getGenerate_err:'',
    getGenerate:'',
    patientCreate_err:'',
    patientCreate:'',
    allPatient_err:'',
    allPatient:'',
    getDetail_err:'',
    getDetail:'',
    creatinine_data_err:'',
    creatinine_data:'',
    cys_creatinine_data_err:'',
    cys_creatinine_data:'',
    lv_data_err:'',
    lv_data:'',

    //New data
    wallet_address:'',
    get_merkle_tree:'',
    get_hash:'',
    get_proof:'',
    get_root:'',
    verify_proof:''
}

export default function reducer(state=initialState,{type,payload}){
    switch(type){
        case POST_LV_EJECTION_ERR:
            return{
                ...state,
                lv_data_err:payload
            }
        case POST_LV_EJECTION:
            return{
                ...state,
                lv_data:payload
            }
        case POST_CYS_CREATININE_ERR:
            return{
                ...state,
                cys_creatinine_data_err:payload
            }
        case POST_CYS_CREATININE:
            return{
                ...state,
                cys_creatinine_data:payload
            }
        case POST_CREATININE_ERR:
            return{
                ...state,
                creatinine_data_err:payload
            }
        case POST_CREATININE:
            return{
                ...state,
                creatinine_data:payload
            }
        case GET_PATIENT_DATA_ERR:
            return{
                ...state,
                getDetail_err:payload
            }
        case GET_PATIENT_DATA:
            return{
                ...state,
                getDetail:payload
            }
        case GET_ALL_PATIENT_ERR:
            return{
                ...state,
                allPatient_err:payload
            }
        case GET_ALL_PATIENT:
            return{
                ...state,
                allPatient:payload
            }
        case CREATE_PATIENT_ERR:
            return{
                ...state,
                patientCreate_err:payload
            }
        case CREATE_PATIENT:
            return{
                ...state,
                patientCreate:payload
            }
        case GET_GENERATE_ID_ERR:
            return{
                ...state,
                getGenerate_err:payload
            }
        case GET_GENERATE_ID:
            return{
                ...state,
                getGenerate:payload
            }
        case POST_KCCQ_REMARK_ERR:
            return{
                ...state,
                kccqRemark_err:payload
            }
        case POST_KCCQ_REMARK:
            return{
                ...state,
                kccqRemark:payload
            }
        case POST_KCCQ_QUESTION_ERR:
            return{
                ...state,
                kccqQuestion_err:payload
            }
        case POST_KCCQ_QUESTION:
            return{
                ...state,
                kccqQuestion:payload
            }        


        // New code
        case WALLET_ADDRESS:
            return{
                ...state,
                wallet_address:payload
            }

        case GET_MERKLE_TREE:
            return {
                ...state,
                get_merkle_tree:payload
            }

        case GET_HASH:
            return {
                ...state,
                get_hash:payload
            }
        case GET_PROOF:
            return {
                ...state,
                get_proof:payload
            }
        case GET_ROOT:
            return{
                ...state,
                get_root:payload
            }   
        case VERIFY_PROOF:
            return {
                ...state,
                verify_proof:payload
            }
        default:
            return{
                ...state
            }
    }
}