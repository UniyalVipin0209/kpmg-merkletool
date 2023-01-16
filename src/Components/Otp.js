import OTPInput, { ResendOTP } from "otp-input-react";
import React,{useState} from "react";

function Otp(props) {
  const [OTP, setOTP] = useState("");
  console.log(OTP)
  
  return (
    <>
        <OTPInput value={props.otp} onChange={props.handleOtpData} autoFocus OTPLength={6} otpType="number" disabled={false} secure />
        
       
    </>
  );
}
export default Otp;