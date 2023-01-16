import React, { Component } from "react";
import "./App.scss";
import "./style/dashboard.scss";
import "./style/kccq.scss";
import "./style/Pages/_login.scss";
import "./style/dashboard.scss";
import "./style/Pages/_patient.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouteWithLayout from "./Layout/RouteWithLayout";
import HomeScreen from "./Home/index";
import FullLayout from "./Layout/FullLayout/FullLayout";
import FullLayout1 from "./Layout/FullLayout/FullLayout1";
import FullLayout2 from "./Layout/FullLayout/FullLayout2";
import FullLayout3 from "./Layout/FullLayout/FullLayout3";
// import Dashboard from './Screen/Dashboard';
import HeaderLayout from "./Layout/FullLayout/HeaderLayout";
import HeaderLayout1 from "./Layout/FullLayout/HeaderLayout1";
// import Kccq from './Screen/Kccq'
// import KccqCalculation from './Screen/KccqCalculation';
// import Patientdetail from './Screen/Patientdetail'
// import PatientIdGenerate from './Screen/PatientAccount'
// import PatientData from './Screen/PatientData'
// import DoctorDashboard from './Pages/Doctor/DoctorDashboard';
// import NewPatient from './Screen/NewPatient'
// import ForgotPassword from './Screen/ForgotPassword'
// import ChangePassword from './Screen/ChangePassword'
// import GFRCalculation from './Screen/GfrCalculation'
// import Guide from './Screen/Guide'
// import OtpLogin from './Screen/OtpLogin'
// import LvEjection from './Screen/LvEjection'
// import Edit from './Screen/Edit'
// import Lvscreen2 from './Screen/LvScreen2'
// import GoogleSignUp from './Screen/GoogleSignUp';
// import signUp from './Screen/SignUp'
import MetaFileUpload from "./Pages/MetaFileUpload";
import MainLayout from "./Layout/FullLayout/MainLayout";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <RouteWithLayout
            layout={FullLayout}
            path="/"
            exact
            component={HomeScreen}
          />
          <RouteWithLayout
            layout={MainLayout}
            path="/file-storage"
            component={MetaFileUpload}
          />

          {/* <RouteWithLayout layout={FullLayout} path="/SignUp" exact component={signUp} />
            <RouteWithLayout layout={FullLayout} path="/signup/details" exact component={GoogleSignUp} />
            <RouteWithLayout layout={FullLayout} path="/Otp_Login" exact component={OtpLogin} />
            <RouteWithLayout layout={FullLayout} path="/Forgot_Password" exact component={ForgotPassword} />
            <RouteWithLayout layout={FullLayout} path="/Change_Password" exact component={ChangePassword} />
            <RouteWithLayout layout={FullLayout3} path="/Profile_Edit" exact component={Edit} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
