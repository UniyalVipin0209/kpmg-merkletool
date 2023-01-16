import React, { Component } from 'react';
import logo from '../../Assets/astrazeneca-seeklogo.com (1).svg';
import miniLogo from '../../Assets/astrazeneca-seeklogo.com.svg';
import { BiSearch , BiBell } from "react-icons/bi";
import '../../style/components/_generalLayout.scss'
import {FiMenu, FiSettings} from 'react-icons/fi';
import {BsSearch} from 'react-icons/bs';
import bellSound from '../../Assets/mixkit-positive-notification-951.wav';
import not_logo from '../../Assets/astrazeneca-seeklogo.com.svg'

class FullLayout1 extends Component { 
 
    constructor(){
        super();
        this.state={
            notification_count:0,
            notify_bell:new Audio(bellSound),
            notifyState:true,
            toggleState: false
        }

    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    handleClickOutside(event) {
        this.setState({
            notifyState:false,
            toggleState: false
        })
      };

    componentDidMount=()=>{
       this.ringNotification();
       document.addEventListener('click', this.handleClickOutside, true);
    }

    handleToggle=()=>{
        console.log(this.state.toggleState)
        this.setState({
            toggleState: !this.state.toggleState
        })
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
      };
    
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
        })
    }

    handleRedirct=(data)=>{
        console.log('ftugihgiuyi')
        this.setState({
            toggleState: false,            
        })
        this.props.history.push('/'+ data)
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
                            <label onClick={() => this.handleRedirct('Kccq_questionire')}>KCCQ Questionnaire</label>
                            <label>GFR Calculation</label>
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
                                    <div className="notefication-body">
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
                            </div>
                            <div className='settings-box'>
                                <FiSettings></FiSettings>
                            </div>
                            <div className='mobile-menu'>
                                <FiMenu onClick={this.handleToggle}></FiMenu>
                            </div>
                        </div>
                        {this.state.toggleState === true &&
                                <div className='toggle-comp'>
                                    <ul>
                                        <li onClick={() => this.handleRedirct('Patient')}>Patients</li>
                                        <li onClick={() => this.handleRedirct('Kccq_questionire')}>KCCQ Questir</li>
                                        <li>GFR Calculation</li>
                                        <li>Diagnosis Guide</li>
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

export default FullLayout1;
