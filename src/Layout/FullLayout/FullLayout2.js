import React, { Component } from 'react';
import logo from '../../Assets/astrazeneca-seeklogo.com (1).svg';
import miniLogo from '../../Assets/astrazeneca-seeklogo.com.svg';
import { BiSearch , BiBell } from "react-icons/bi";
import '../../style/components/_generalLayout.scss'
import {FiMenu, FiSettings} from 'react-icons/fi';
import {BsSearch} from 'react-icons/bs';
import bellSound from '../../Assets/mixkit-positive-notification-951.wav';
import not_logo from '../../Assets/astrazeneca-seeklogo.com.svg'

class FullLayout2 extends Component { 
 
    constructor(){
        super();
        this.state={
            notification_count:0,
            notify_bell:new Audio(bellSound),
            notifyState:true,
            toggleState: false,
            settingState: false,
        }

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    }


    componentDidMount=()=>{
       this.ringNotification();
       document.addEventListener("mousedown", this.handleClickOutside);
    }

    handleToggle=()=>{
        this.setState({
            toggleState: !this.state.toggleState
        })
    }
    
    ringNotification=()=>{
        this.state.notify_bell.load();
        this.state.notify_bell.play();
        
        const el = document.getElementById("bell-id");
        
        console.log("bool -- ",el.classList.contains('notify'))

        if(el.classList.contains('notify'))
            el.classList.remove('notify');
        
        el.classList.add('notify');

        this.setState({...this.state, notification_count:1+this.state.notification_count})
        this.setState({
            notifyState: !this.state.notifyState,
            settingState:false,
        })
    }

    handleRedirct=(data)=>{
        console.log('ftugihgiuyi')
        this.setState({
            toggleState: false,            
        })
        this.props.history.push('/'+ data)
    }

    handleSetting=()=>{
        this.setState({
            settingState: !this.state.settingState,
            notifyState:false
        })
    }

    handleLogoutRedirect=()=>{
        console.log('hghjgfu')
        this.props.history.push('/')
    }
    handleRedirc=()=>{
        console.log('wfws')
    }



    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                settingState: false,
                notifyState:false
            })
        }
    }
  
    render(){
        return  <div className='general-layout'>
                    <div className='gn-layout-header'>
                        <div className='gn-ly-header-left'>
                            <img src={logo} id="big-logo"/>
                            <img src={miniLogo} id="min-logo"/>
                        </div>
                        <div className='gn-ly-header-middle'>
                            <label onClick={() => this.handleRedirct('Patient')}>Patients</label>
                            <label>KCCQ Questionnaire</label>
                            <label>e-GFR Calculation</label>
                            <label>Diagnosis Guide</label>
                        </div>
                        <div className='gn-ly-header-right'>
                            <div className='input-box'>
                                <BsSearch className="input-box-search" color={'#9B9B9B'}></BsSearch>
                                <input type="text" placeholder='Search'/>
                            </div>
                            <div className='bell-box' >
                                {this.state.notification_count!=0 && <div className='data-count'>{this.state.notification_count}</div>}
                                <BiBell onClick={this.ringNotification} className="bell-icon" id="bell-id"></BiBell> 

                                {this.state.notifyState === true &&
                                    <div className="notefication-body" ref={this.setWrapperRef}>
                                        <ul>
                                            <li className="justify-content-end">Clear all</li>
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
                                {this.state.settingState === true &&
                                    <div className='notefication-body1' ref={this.setWrapperRef}>
                                        <ul onClick={this.handleLogoutRedirect}>
                                            <li>Logout</li>                                            
                                        </ul>
                                    </div>
                                }
                        
                            </div>
                            <div className='settings-box'>
                                <FiSettings onClick={this.handleSetting}></FiSettings>
                            </div>
                            <div className='mobile-menu'>
                                <FiMenu onClick={this.handleToggle}></FiMenu>
                            </div>
                        </div>
                        {this.state.toggleState === true &&
                                <div className='toggle-comp' ref={this.setWrapperRef}>
                                    <ul>
                                        <li onClick={() => this.handleRedirct('Patient')}>Patients</li>
                                        <li>KCCQ Questir</li>
                                        <li>e-GFR Calculation</li>
                                        <li>Diagnosis Guide</li>
                                        <li onClick={this.handleLogoutRedirect}>Logout</li>
                                    </ul>
                                </div>
                            }
                        
                        
                    </div>
                    <div className='gn-layout-body'>
                        {this.props.children}
                        
                    </div>
                </div>
    }
}

export default FullLayout2;
