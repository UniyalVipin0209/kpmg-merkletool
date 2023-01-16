import React, { Component } from "react";
import logo from "../../Assets/eth-india/merkel_tree_bitcoin_l.png";
import miniLogo from "../../Assets/astrazeneca-seeklogo.com.svg";
import { BiSearch, BiBell } from "react-icons/bi";
import "../../style/components/_generalLayout.scss";
import { FiMenu, FiSettings } from "react-icons/fi";

import { BsSearch } from "react-icons/bs";
import bellSound from "../../Assets/mixkit-positive-notification-951.wav";
import not_logo from "../../Assets/astrazeneca-seeklogo.com.svg";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  CheckCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { GrDocumentCsv } from "react-icons/gr";
//import Particles from 'react-particles-js';

class MainLayout extends Component {
  constructor() {
    super();
    this.state = {
      notification_count: 0,
      notify_bell: new Audio(bellSound),
      notifyState: true,

      menuItemStage: "",
      menuitems: [
        {
          label: "Upload CSV",
          key: "uploadcsv",
          icon: <GrDocumentCsv color="white" />,
          onClick: (e) => {
            //console.log("upload11", e.key);
            this.setState({ menuItemStage: "STAGE1" });
          },
        },
        {
          label: "Leaf Hash",
          key: "leafhash",
          icon: <AppstoreOutlined color="white" />,
          onClick: () => this.setState({ menuItemStage: "STAGE2" }),
        },
        {
          label: "Proof",
          key: "getproof",
          icon: <SettingOutlined color="white" />,
          onClick: () => this.setState({ menuItemStage: "STAGE3" }),
        },
        {
          label: "Verify Proof",
          key: "Verifyproof",
          icon: <CheckCircleOutlined color="white" />,
          onClick: () => this.setState({ menuItemStage: "STAGE4" }),
        },
      ],
    };

    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    this.setState({
      notifyState: false,
    });
  }

  componentDidMount = () => {
    this.ringNotification();
    document.addEventListener("click", this.handleClickOutside, true);
  };

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  ringNotification = () => {
    // this.state.notify_bell.load();
    // this.state.notify_bell.play();

    const el = document.getElementById("bell-id");

    console.log("bool -- ", el.classList.contains("notify"));

    if (el.classList.contains("notify")) el.classList.remove("notify");

    el.classList.add("notify");

    this.setState({
      ...this.state,
      notification_count: 1 + this.state.notification_count,
    });
    this.setState({
      notifyState: !this.state.notifyState,
    });
  };

  render() {
    return (
      <div className="general-layout">
        <div className="gn-layout-header">
          <div className="gn-ly-header-left">
            <img
              src={logo}
              style={{ width: "3.5rem", borderRadius: "100px" }}
              id="big-logo"
            />{" "}
            &nbsp;&nbsp; <span></span>
            {/* <img src={miniLogo} id="min-logo"/> */}
          </div>

          {/* <div className="gn-ly-header-middle">
            <Menu
              mode="horizontal"
              theme="light"
              items={this.state.menuitems}
            />
          </div> */}

          <div className="gn-ly-header-right">
            <div className="input-box">
              <BsSearch
                className="input-box-search"
                color={"#9B9B9B"}
              ></BsSearch>
              <input type="text" placeholder="Search" />
            </div>
            {/* <div className="dropdown show"> */}
            <div className="bell-box">
              {this.state.notification_count != 0 && (
                <div className="data-count">
                  {this.state.notification_count}
                </div>
              )}
              <BiBell
                onClick={this.ringNotification}
                className="bell-icon"
                id="bell-id"
              ></BiBell>

              {this.state.notifyState === true && (
                <div className="notefication-body">
                  <ul>
                    <li className="justify-content-end">Clear all</li>
                    <li>
                      <img src={not_logo} /> &nbsp; notification 1
                    </li>
                    <hr />
                    <li>
                      <img src={not_logo} /> &nbsp; notification 2
                    </li>
                    <hr />
                    <li>
                      <img src={not_logo} /> &nbsp; notification 3
                    </li>
                    <hr />
                    <li>
                      <img src={not_logo} /> &nbsp; notification 4
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* </div> */}
            <div className="settings-box">
              <FiSettings></FiSettings>
            </div>
            <div className="mobile-menu">{/* <FiMenu></FiMenu> */}</div>
          </div>
        </div>
        <div className="gn-layout-body">
          {/* Move FileUpload File logic starts     */}
          {this.props.children}
          {/* Move FileUpload File logic ends     */}
        </div>
      </div>
    );
  }
}

export default MainLayout;
