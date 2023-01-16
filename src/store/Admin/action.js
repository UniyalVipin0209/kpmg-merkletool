import { devUrl } from "../../utilities/config";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  POST_KCCQ_QUESTION,
  POST_KCCQ_QUESTION_ERR,
  POST_KCCQ_REMARK_ERR,
  POST_KCCQ_REMARK,
  GET_GENERATE_ID,
  GET_GENERATE_ID_ERR,
  CREATE_PATIENT_ERR,
  CREATE_PATIENT,
  GET_ALL_PATIENT_ERR,
  GET_ALL_PATIENT,
  GET_PATIENT_DATA_ERR,
  GET_PATIENT_DATA,
  POST_CREATININE_ERR,
  POST_CREATININE,
  POST_CYS_CREATININE_ERR,
  POST_CYS_CREATININE,
  POST_LV_EJECTION,
  POST_LV_EJECTION_ERR,
} from "./types";

import axios from "axios";
import {
  WALLET_ADDRESS,
  GET_MERKLE_TREE,
  GET_HASH,
  GET_PROOF,
  GET_ROOT,
  VERIFY_PROOF,
} from "./types";
import swal from "sweetalert";
const MySwal = withReactContent(Swal);

export const setWalletAddress = (data) => (dispatch) => {
  dispatch({ type: WALLET_ADDRESS, payload: data });
};

const ethDevUrl = "http://20.96.181.1:4000/";

// genrateMerkelTree
export const getGenrateMerkelTree = (fileData) => (dispatch) => {
  const body = new FormData();
  body.append("file", fileData);

  axios
    .post(ethDevUrl + "api/v1/upload", body)
    .then((res) => {
      console.log("FileUpload :", res.data);
      dispatch({ type: GET_MERKLE_TREE, payload: res });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_MERKLE_TREE, payload: err });
    });
};

export const getHash = (data1, data2) => (dispatch) => {
  const body = {
    userid: data1,
    amount: data2,
  };
  axios
    .post(ethDevUrl + "gethash", body)
    .then((res) => {
      console.log("GetHash ", res);
      swal("Leaf Hash", "Successful", "success");
      dispatch({ type: GET_HASH, payload: res });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_HASH, payload: err });
    });
};

export const getProof = (data) => (dispatch) => {
  const body = { leaf: data };
  console.log("runing");
  axios
    .post(ethDevUrl + "GetProof", body)
    .then((res) => {
      // if (Object.keys(res.data.GET_PROOF).length > 0) {
      swal("Proof", "Generated", "success");
      // } else {
      //   swal("Proof", "Generation Failed", "error");
      // }
      // if (res.data.get_proof.length !== 0) {
      // swal("Proof", "Generated", "success");
      // } else {
      //   swal("Proof", "Generation Failed", "error");
      // }
      console.log("GetProof API Resp::", res?.data);
      dispatch({ type: GET_PROOF, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_PROOF, payload: err });
    });
};

export const getRootData = () => (dispatch) => {
  // const body=data;
  console.log("runing");
  axios
    .get(ethDevUrl + "GetRoot")
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_ROOT, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_ROOT, payload: err });
    });
};

export const verifyProof = (data1, data2, data3) => (dispatch) => {
  console.log("data1 - ", data1);
  console.log("data2 - ", data2);
  console.log("data3 - ", data3);
  const body = {
    proof: data1,
    root: data2,

    leaf: data3,
  };
  console.log("runing");
  axios
    .post(ethDevUrl + "VerifyleafProof", body)
    .then((res) => {
      console.log("VerifyLeafProof API Resp::", res?.data);
      let popupType =
        res.data === "Proof validation unsuccessfully !! Try Again"
          ? "error"
          : "success";
      swal("PoR", res.data, popupType);

      console.log("Proof :::", res.data);
      dispatch({ type: VERIFY_PROOF, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      //swal('PoR','Error Occurred!!','success');
      dispatch({ type: VERIFY_PROOF, payload: err });
    });
};
