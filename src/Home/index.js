import React from "react";
import Banner from "../Assets/eth-india/hybrid exchange.png";
import welcome from "../Assets/Welcome, To platform that takes care to next level..svg";
import logo from "../Assets/eth-india/ethIndiaicon-new-icon.png";
import GoogleLogin from "react-google-login";
import astra from "../Assets/Path 5311.svg";
import { FcGoogle } from "react-icons/fc";
//import Login from "../Pages/Login/Login";
import axios from "axios";
import SignUp from "../Pages/SignUp/signUp";
import { postLoginApi, postSignUp, ForgotPostApi } from "../store/Login/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import CryptoJS from "crypto-js";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
import swal from "sweetalert";
import MetaLogin from "../Pages/MetaLogin/MetaLogin";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      password: "",
      email: "",
      name: "",
      clinic: "",
      prc: "",
      errors: "",
      signIn: true,
      signState: false,
      termsandconditions: false,
      emailEncrypt: "",
      showPass: false,
    };
  }

  componentDidMount() {
    localStorage.clear();
  }

  componentDidUpdate(prev) {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, document.title, window.location.href);
    });
    if (prev.SuccLogin !== this.props.SuccLogin) {
      console.log(this.props.SuccLogin);
      localStorage.setItem("token", this.props.SuccLogin.token);
      this.setState({
        signState: false,
      });

      swal({ text: this.props.SuccLogin.message }).then((res) => {
        this.props.history.push({
          pathname: "/Otp_Login",
          state: { email: this.state.email, password: this.state.password },
        });
      });
    }
    if (prev.FailedSignUp !== this.props.FailedSignUp) {
      console.log(this.props.FailedSignUp);
      //toast.error("SignUp failed");
    }
    if (prev.SuccSignUp !== this.props.SuccSignUp) {
      console.log(this.props.SuccSignUp);
      // toast.success(this.props.SuccSignUp.data.message);
      this.setState({
        signIn: true,
        email: "",
        password: "",
      });
    }
    if (prev.SuccForgot !== this.props.SuccForgot) {
      console.log(this.props.SuccForgot);
      this.props.history.push({
        pathname: "Forgot_Password",
        state: { email: this.state.emailEncrypt },
      });
    }
    if (prev.failedLogin !== this.props.failedLogin) {
      console.log(this.props.failedLogin);
      //toast.error("login failed");
    }
    if (prev.failForgot !== this.props.failForgot) {
      // toast.error(this.props.failForgot.response.data.message);
    }
  }

  handleChange = (e) => {
    const data = e.target.name;
    this.setState({
      [data]: e.target.value,
    });
  };

  responseGoogle = (response) => {
    console.log(response);
    const encryptconfigs = {
      key: "t700#zkrF@db0705",
      iv: "i700#zkrF@db0705",
    };
    var key = CryptoJS.enc.Latin1.parse(encryptconfigs.key);
    var iv = CryptoJS.enc.Latin1.parse(encryptconfigs.iv);
    var tokenId = CryptoJS.AES.encrypt(response.tokenId, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    tokenId = tokenId.toString();
    console.log(tokenId);

    const token = {
      token: tokenId,
    };
    axios
      .post("http://165.22.223.12:5000/api/doc/auth/google", token)
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          console.log("fsdfhudfhu");
          localStorage.setItem("token", res.data.token);
          this.props.history.push("/Dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  responseGoogleSignUp = (response) => {
    console.log(response);
    const encryptconfigs = {
      key: "t700#zkrF@db0705",
      iv: "i700#zkrF@db0705",
    };
    var key = CryptoJS.enc.Latin1.parse(encryptconfigs.key);
    var iv = CryptoJS.enc.Latin1.parse(encryptconfigs.iv);
    var tokenId = CryptoJS.AES.encrypt(response.tokenId, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    tokenId = tokenId.toString();
    console.log(tokenId);

    const token = {
      token: tokenId,
    };
    axios
      .post("http://165.22.223.12:5000/api/doc/signupwithgoogle", token)
      .then((res) => {
        console.log(res);
        this.props.history.push(res.data.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleValidation() {
    const errors = {};
    let formIsValid = true;

    //  FirstName
    if (this.state.password === undefined || this.state.password === "") {
      formIsValid = false;
      errors.password = "This is a required field";
    }

    if (this.state.email === undefined || this.state.email === "") {
      formIsValid = false;
      errors.email = "This is a required field";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      formIsValid = false;
      errors.email = "please enter valid email id";
    } else {
      formIsValid = true;
    }

    this.setState({ errors });
    return formIsValid;
  }

  handleSubmit = () => {
    console.log(this.handleValidation());
    if (this.handleValidation()) {
      this.setState({
        signState: true,
      });

      const encryptconfigs = {
        key: "t700#zkrF@db0705",
        iv: "i700#zkrF@db0705",
      };
      var key = CryptoJS.enc.Latin1.parse(encryptconfigs.key);
      var iv = CryptoJS.enc.Latin1.parse(encryptconfigs.iv);
      var email = CryptoJS.AES.encrypt(this.state.email, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      email = email.toString();

      var password = CryptoJS.AES.encrypt(this.state.password, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      password = password.toString();

      const body = {
        email: email,
        password: password,
      };
      // this.props.history.push('/Dashboard')
      this.props.postLoginApi(body);
    }
  };

  handleSignUpValidation() {
    const errors = {};
    let formIsValid = true;

    //  FirstName
    if (this.state.password === undefined || this.state.password === "") {
      formIsValid = false;
      errors.password = "This is a required field";
    }

    if (this.state.email === undefined || this.state.email === "") {
      formIsValid = false;
      errors.email = "This is a required field";
    }
    if (this.state.prc === undefined || this.state.prc === "") {
      formIsValid = false;
      errors.prc = "This is a required field";
    }
    if (this.state.clinic === undefined || this.state.clinic === "") {
      formIsValid = false;
      errors.clinic = "This is a required field";
    }

    if (this.state.name === undefined || this.state.name === "") {
      formIsValid = false;
      errors.name = "This is a required field";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      formIsValid = false;
      errors.email = "please enter valid email id";
    } else {
      formIsValid = true;
    }

    this.setState({ errors });
    return formIsValid;
  }
  handleSignUp = () => {
    if (this.handleSignUpValidation()) {
      const encryptconfigs = {
        key: "t700#zkrF@db0705",
        iv: "i700#zkrF@db0705",
      };
      var key = CryptoJS.enc.Latin1.parse(encryptconfigs.key);
      var iv = CryptoJS.enc.Latin1.parse(encryptconfigs.iv);
      var email = CryptoJS.AES.encrypt(this.state.email, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });
      email = email.toString();

      var name = CryptoJS.AES.encrypt(this.state.name, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });

      name = name.toString();

      var password = CryptoJS.AES.encrypt(this.state.password, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });

      password = password.toString();

      var clinic = CryptoJS.AES.encrypt(this.state.clinic, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });

      clinic = clinic.toString();

      var prc = CryptoJS.AES.encrypt(this.state.prc, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      });

      prc = prc.toString();

      const data = {
        name: name,
        email: email,
        password: password,
        clinic_or_hospital_affiliation: clinic,
        prc_licence: prc,
        termsandconditions: this.state.termsandconditions,
      };
      this.props.postSignUp(data);
    }
  };

  handleCheckbox = () => {
    this.setState({
      termsandconditions: !this.state.termsandconditions,
    });
  };

  handleSignUpToggle = () => {
    this.props.history.push("/SignUp");
    // this.setState({...this.state, signIn:false})
  };

  handleForgot = () => {
    console.log("jgihg");
    const encryptconfigs = {
      key: "t700#zkrF@db0705",
      iv: "i700#zkrF@db0705",
    };
    var key = CryptoJS.enc.Latin1.parse(encryptconfigs.key);
    var iv = CryptoJS.enc.Latin1.parse(encryptconfigs.iv);
    var email = CryptoJS.AES.encrypt(this.state.email, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    email = email.toString();
    this.setState({
      emailEncrypt: email,
    });

    const body = {
      email: email,
    };
    this.props.ForgotPostApi(body);
    // this.props.history.push('/Forgot_Password')
  };

  handleEye = () => {
    this.setState({
      showPass: !this.state.showPass,
    });
  };

  handleOtpLogin = () => {
    this.props.history.push("/Otp_Login");
  };

  render() {
    console.log(this.state);
    return (
      <div className="login-page">
        {/* <ToastContainer /> */}
        <div className="lg-page-banner">
          <div className="banner">
            <label>Welcome, To platform that takes care to next level</label>
            <div className="banner-img">
              <img id="banner_img" src={Banner} />
            </div>
          </div>
        </div>
        <div className="lg-page-form">
          <div className="lg-pg-form-box">
            <img src={logo} className="as-icon" />
            <div className="row">
              <div className="col-md-12">
                <label className="form-title">Merkel Tree</label>
                <br />
                {/* <label className='form-subtitle'>{this.state.signIn?"Welcome back, Kindly enter your details":"Kindly give us enough information to create your profile."}</label> */}
              </div>
            </div>

            <MetaLogin></MetaLogin>
            {/* {this.state.signIn &&  */}
            {/* <Login {...this.state} 
                            handleSignUpToggle={this.handleSignUpToggle} 
                            handleSubmit={this.handleSubmit}
                            responseGoogle={this.responseGoogle}
                            handleChange={this.handleChange}
                            handleForgot={this.handleForgot}
                            handleEye={this.handleEye}
                            handleOtpLogin={this.handleOtpLogin}>
                            
                        </Login> */}
            {/* } */}
            {/* {!this.state.signIn && 
                        <SignUp {...this.state}
                        handleSignUp={this.handleSignUp}
                        responseGoogleSignUp={this.responseGoogleSignUp}
                        handleChange={this.handleChange}
                        handleCheckbox={this.handleCheckbox}
                        handleEye={this.handleEye}>
                        </SignUp>} */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    SuccLogin: state.login.login_data.data,
    failedLogin: state.login.login_err,
    SuccSignUp: state.login.signUp_data,
    FailedSignUp: state.login.signUp_data_err,
    SuccForgot: state.login.forgot,
    failForgot: state.login.forgot_err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      postLoginApi,
      postSignUp,
      ForgotPostApi,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
