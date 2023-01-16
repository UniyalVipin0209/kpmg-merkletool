import React, { Component } from 'react';
import { AiFillRightCircle } from "react-icons/ai";
import docimg from '../Assets/humberto-chavez-FVh_yqLR9eA-unsplash-removebg-preview.png'
import { AiOutlineDoubleRight, AiOutlineArrowRight } from "react-icons/ai";
import logo from '../Assets/Group 1369.svg'
import progress from '../Assets/progress_bar/Group 1652.png'

class FirstQuestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {  
        };
    }

    handleChange=(e)=>{
        const data= e.target.name
        this.setState({
            [data]: e.target.value
        })
    }

    render(){
        console.log(this.props)
        const data = this.props.postData.physicallimitation
        return (
            <div>
                <div id="first_questbody">
                    <div id="logo_row">
                        <img src={logo} />
                    </div>
                    <div className='row' id="kccq_heading">
                        <center><label>The KC Cardiomyopathy Questionnaire <span >KCCQ12</span></label></center>
                    </div>
                    <div id="progress_bar">
                        <img src={progress} />
                    </div>
                    <div className="row" id="kccq_question">
                        <p>1. Heart failure affects different people in different ways.Some have <span>difficulty breathing</span> while others
                        feel fatigue. Please indicate how much you are limited by heart failure (difficulty breathing or fatigue) in your
                        ability to do the following activities over the past 2 weeks.</p>
                    </div>
                    <div id="kccq_table">
                        <div id="table_other">
                            <div id="table_heading">
                                <label id="label">Activity</label>
                                <label id="label1">Extremely</label>
                                <label id="label1">Very</label>
                                <label id="label1">Moderately</label>
                                <label id="label1" >Slightly</label>
                                <label id="label1">Not at all</label>
                                <label id="label1">Other reason</label>
                            </div>
                            <div id="table_data">
                                <label id="label">A. Showering/Bathing
                                <br/> <span>{this.props.errors !== '' ? this.props.errors.Q1A : ''}</span></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1A === "1" ? true : false} name="Q1A" id="1" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1A === "2" ? true : false} name="Q1A" id="2"  onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1A === "3" ? true : false} name="Q1A" id="3"  onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1A === "4" ? true : false} name="Q1A" id="4" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1A === "5" ? true : false} name="Q1A" id="5"  onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1A === "6" ? true : false} name="Q1A" id="6" onChange={this.props.handlecheckbox}/></label>
                            </div>
                            <div id="table_data">
                                <label id="label">B. Walking 100 meters daily <br/>On level ground
                                <br/> <span>{this.props.errors !== '' ? this.props.errors.Q1B : ''}</span></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1B === "1" ? true : false} name="Q1B" id="1" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1B === "2" ? true : false} name="Q1B" id="2" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1B === "3" ? true : false} name="Q1B" id="3" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1B === "4" ? true : false} name="Q1B" id="4" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1B === "5" ? true : false} name="Q1B" id="5" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1B === "6" ? true : false} name="Q1B" id="6" onChange={this.props.handlecheckbox}/></label>
                            </div>
                            <div id="table_data">
                                <label id="label">C. Hurrying or jogging ( If to <br/> Catch a bus)
                                <br/> <span>{this.props.errors !== '' ? this.props.errors.Q1C : ''}</span></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1C === "1" ? true : false} name="Q1C" id="1" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1C === "2" ? true : false} name="Q1C" id="2" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1C === "3" ? true : false} name="Q1C" id="3" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1C === "4" ? true : false} name="Q1C" id="4" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1C === "5" ? true : false} name="Q1C" id="5" onChange={this.props.handlecheckbox}/></label>
                                <label id="label1"><input type="checkbox" checked={data.Q1C === "6" ? true : false} name="Q1C" id="6" onChange={this.props.handlecheckbox}/></label>
                            </div>

                        </div>
                        <div id="table_mobile">
                            <label id="label1">a. Showering/Bathing</label>
                            <div id="label"><label id="span1">Extremely</label> <span id="span2"><input type="checkbox" name="Q1A" id="1" checked={data.Q1A === "1" ? true : false} onChange={this.props.handlecheckbox}/></span></div>
                            <label id="label"><span id="span1">Very</span> <span id="span2"><input type="checkbox" name="Q1A" id="2" checked={data.Q1A === "2" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Moderately</span> <span id="span2"><input type="checkbox" name="Q1A" id="3" checked={data.Q1A === "3" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Slightly</span> <span id="span2"><input type="checkbox" name="Q1A" id="4" checked={data.Q1A === "4" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Not at all</span> <span id="span2"><input type="checkbox" name="Q1A" id="5" checked={data.Q1A === "5" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Other reasons</span> <span id="span2"><input type="checkbox" name="Q1A" id="6" checked={data.Q1A === "6" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label1">B. Walking 100 meters daily <br/>On level ground</label>
                            <label id="label"><span id="span1">Extremely</span> <span id="span2"><input type="checkbox" name="Q1B" id="1" checked={data.Q1B === "1" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Very</span> <span id="span2"><input type="checkbox" name="Q1B" id="2" checked={data.Q1B === "2" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Moderately</span> <span id="span2"><input type="checkbox" name="Q1B" id="3" checked={data.Q1B === "3" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Slightly</span> <span id="span2"><input type="checkbox" name="Q1B" id="4" checked={data.Q1B === "4" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Not at all</span> <span id="span2"><input type="checkbox" name="Q1B" id="5" checked={data.Q1B === "5" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Other reasons</span> <span id="span2"><input type="checkbox" name="Q1B" id="6" checked={data.Q1B === "6" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label1">C. Hurrying or jogging ( If to <br/> Catch a bus)</label>
                            <label id="label"><span id="span1">Extremely</span> <span id="span2"><input type="checkbox" name="Q1C" id="1" checked={data.Q1C === "1" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Very</span> <span id="span2"><input type="checkbox" name="Q1C" id="2" checked={data.Q1C === "2" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Moderately</span> <span id="span2"><input type="checkbox" name="Q1C" id="3" checked={data.Q1C === "3" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Slightly</span> <span id="span2"><input type="checkbox" name="Q1C" id="4" checked={data.Q1C === "4" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Not at all</span> <span id="span2"><input type="checkbox" name="Q1C" id="5" checked={data.Q1C === "5" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                            <label id="label"><span id="span1">Other reasons</span> <span id="span2"><input type="checkbox" name="Q1C" id="6" checked={data.Q1C === "6" ? true : false} onChange={this.props.handlecheckbox}/></span></label>
                        </div>
                        
                    </div>
                    <button onClick={() => this.props.handleQuestion(1)} id="next_button">Next <AiOutlineDoubleRight /></button>
                        
                </div>

            </div>
            
        )
    }
}

export default FirstQuestion;