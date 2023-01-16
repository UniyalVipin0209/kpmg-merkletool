import React, { Component } from "react";
import logo from "../../Assets/astrazeneca-seeklogo.com (1).svg";
import miniLogo from "../../Assets/Path 1713.png";
import { BiSearch, BiBell } from "react-icons/bi";
import { FiMenu, FiSettings } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import bellSound from "../../Assets/audio/notification_tone.mp3";

class GeneralLayout extends Component {
  constructor() {
    super();
    this.state = {
      notification_count: 0,
      notify_bell: new Audio(bellSound),
    };
  }

  componentDidMount = () => {
    this.ringNotification();
  };

  ringNotification = () => {
    this.state.notify_bell.load();
    this.state.notify_bell.play();

    const el = document.getElementById("bell-id");

    console.log("bool -- ", el.classList.contains("notify"));

    if (el.classList.contains("notify")) el.classList.remove("notify");

    el.classList.add("notify");

    this.setState({
      ...this.state,
      notification_count: 1 + this.state.notification_count,
    });
  };

  render() {
    return (
      <div className="general-layout">
        <div className="gn-layout-header">
          <div className="gn-ly-header-left">
            <img src={logo} id="big-logo" />
            <img src={miniLogo} id="min-logo" />
          </div>

          <div className="gn-ly-header-right">
            <div className="input-box">
              <BsSearch
                className="input-box-search"
                color={"#9B9B9B"}
              ></BsSearch>
              <input type="text" placeholder="Search" />
            </div>
            <div className="dropdown show">
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
              </div>
            </div>
            <div className="settings-box">
              <FiSettings></FiSettings>
            </div>
            <div className="mobile-menu">
              <FiMenu></FiMenu>
            </div>
          </div>
        </div>
        <div className="gn-layout-body">{this.props.children}</div>
      </div>
    );
  }
}

export default GeneralLayout;
