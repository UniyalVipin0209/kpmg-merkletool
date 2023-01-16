import React, { Component } from 'react';
import { BiSearch , BiBell } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import logo from '../../Assets/astrazeneca-seeklogo.com (1).svg'
import { ImMenu,ImCross} from "react-icons/im";
import { BsSearch , BsBell} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgMenu ,CgLogOut} from "react-icons/cg";
import not_logo from '../../Assets/astrazeneca-seeklogo.com.svg'


class HeaderLayout1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: '' ,
            drawerStatus:false,  
            notifyState: false,  
            settingsState:false,        
        };
        this.ref = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount=()=>{
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
      };

      handleClickOutside(event) {
        this.setState({
            notifyState:false
        })
      };

    handleSetting=()=>{
        this.setState({
            settingsState: !this.state.settingsState
        })
    }

    handleChange=(e)=>{
        const data= e.target.name
        this.setState({
            [data]: e.target.value
        })
    }

    handleMenu=()=>{
        this.setState({
            drawerStatus: !this.state.drawerStatus,
        })
    }

    handleNotification=()=>{
        this.setState({
            notifyState: !this.state.notifyState,
        })
    }

    handleRedirct=(data)=>{
        this.handleMenu()
        this.props.history.push('/'+ data)
    }

    handleLogout=()=>{
        this.props.history.push('/')
        this.setState({
            drawerStatus: false,
            settingsState: false
        })
    }


    render(){
        return (
            <div className="" id="mainsec1">
                <div className="col-md-12" id="fullHeader1">
                   <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 col-md-5 col-sm-9">
                                <img src={logo} id="logo_img" />
                            </div>
                            <div className="col-lg-7 menu_option" >
                                <div className='container-fluid'>
                                    <div className="row">
                                        <div className="col-md-3"><a>Patients</a></div>
                                        <div className="col-md-3"><a onClick={() => this.handleRedirct('Kccq_questionire')}>KCCQ Questionnaire</a></div>
                                        <div className="col-md-3"><a>GFR Calculation</a></div>
                                        <div className="col-md-3"><a>Management Guide</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-7 col-sm-2" id="thrd_block">
                                <div className="row">
                                    <div id="serc_bar"><BsSearch id="serch_symb"/><input value={this.state.search} name="search" onChange={this.handleChange} /></div>
                                    <div id="menu_div" onClick={this.handleNotification} ><BsBell id="symb_menu"/>
                                        
                                    </div>
                                    <div id="menu_div" onClick={this.handleSetting}><FiSettings id="symb_menu"/></div>
                                    <div id="menu_div1" onClick={this.handleMenu}><CgMenu id="symb_menu"/></div>
                                </div>
                                
                            </div>
                            {this.state.notifyState === true &&
                                <div id="div_ul">
                                    <ul id="ul_li">
                                        <li id="li_data"><a>Clear all</a></li>
                                        <li><img src={not_logo} /> &nbsp; notification 1</li>
                                        <hr/>
                                        <li><img src={not_logo} /> &nbsp; notification 2</li>
                                        <hr/>
                                        <li><img src={not_logo} /> &nbsp; notification 3</li>
                                        <hr/>
                                        <li><img src={not_logo} /> &nbsp; notification 4</li>
                                    </ul>
                                </div>
                            }
                            {this.state.drawerStatus === true &&
                                <div id="div_ul">
                                    <ul id="ul_li">
                                        <li> &nbsp; Patients</li>
                                        <hr/>
                                        <li onClick={() => this.handleRedirct('Kccq_questionire')}> &nbsp; KCCQ Questionnaire</li>
                                        <hr/>
                                        <li> &nbsp; GFR Calculation</li>
                                        <hr/>
                                        <li> &nbsp; Management Guide</li>
                                        <hr/>
                                        <li onClick={this.handleLogout}> &nbsp; Logout</li>
                                    </ul>
                                </div>
                            }
                            {this.state.settingsState === true &&
                                <div id="div_ul1">
                                    <ul id="ul_li1">
                                        <li onClick={this.handleLogout}> <CgLogOut/>&nbsp; Logout</li>
                                        
                                    </ul>
                                </div>
                            }
                        </div>
                   </div>
                </div>
                <div className="col-md-12">
                    
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default HeaderLayout1;