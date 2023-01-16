import React, { Component } from 'react';
import { AiFillRightCircle } from "react-icons/ai";
import docimg from '../Assets/humberto-chavez-FVh_yqLR9eA-unsplash-removebg-preview.png'
import { AiOutlineDoubleRight, AiOutlineArrowRight,AiOutlineDoubleLeft } from "react-icons/ai";
import logo from '../Assets/Group 1369.svg'
import progress from '../Assets/progress_bar/Group 1659.png'

class EightQuestion extends React.Component{
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
        const data = this.props.postData.sociallimitation
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
                        <p>8. &nbsp; <span>How much does your heart failure affect your lifestyle ? Please indicate how your heart failure may have 
                            limited your participation in the following activities over the past 2 weeks.</span></p>
                    </div>
                    <div id="kccq_table">
                        <div id="table_other">
                            <div id="table_heading">
                                <label id="label">Activity</label>
                                <label id="label1">Severely Limited</label>
                                <label id="label1">Very Limited</label>
                                <label id="label1">Moderately Limited</label>
                                <label id="label1" >Slightly Limited</label>
                                <label id="label1">Did not Limit at all</label>
                                <label id="label1">Other reason</label>
                            </div>
                            <div id="table_data">
                                <label id="label">a.&nbsp; Hobies, recreational activities<br/>
                                <span>{this.props.errors !== '' ? this.props.errors.Q8A : ''}</span></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="1" checked={data.Q8A === "1" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="2" checked={data.Q8A === "2" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="3" checked={data.Q8A === "3" ? true : false}/></label>
                                <label id="label1" ><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="4" checked={data.Q8A === "4" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="5" checked={data.Q8A === "5" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="6" checked={data.Q8A === "6" ? true : false}/></label>
                            </div>
                            <div id="table_data">
                                <label id="label">b.&nbsp; Working (occupation) or doing household chores<br/>
                                <span>{this.props.errors !== '' ? this.props.errors.Q8B : ''}</span></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="1" checked={data.Q8B === "1" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="2" checked={data.Q8B === "2" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="3" checked={data.Q8B === "3" ? true : false}/></label>
                                <label id="label1" ><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="4" checked={data.Q8B === "4" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="5" checked={data.Q8B === "5" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="6" checked={data.Q8B === "6" ? true : false}/></label>
                            </div>
                            <div id="table_data">
                                <label id="label">c.&nbsp; Visiting family or friends out of your home <br/>
                                <span>{this.props.errors !== '' ? this.props.errors.Q8C : ''}</span></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="1" checked={data.Q8C === "1" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="2" checked={data.Q8C === "2" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="3" checked={data.Q8C === "3" ? true : false}/></label>
                                <label id="label1" ><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="4" checked={data.Q8C === "4" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="5" checked={data.Q8C === "5" ? true : false}/></label>
                                <label id="label1"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="6" checked={data.Q8C === "6" ? true : false}/></label>
                            </div>

                        </div>
                        <div id="table_mobile">
                            <label id="label1">a.&nbsp; Hobies, recreational activities</label>
                            <label id="label"><span id="span1">Severely Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="1" checked={data.Q8A === "1" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Very Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="2" checked={data.Q8A === "2" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Moderately Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="3" checked={data.Q8A === "3" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Slightly Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="4" checked={data.Q8A === "4" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Did not Limit at all</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="5" checked={data.Q8A === "5" ? true : false}/></span></label>
                            <div id="label"><label id="span1">Other reason</label> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8A" id="6" checked={data.Q8A === "6" ? true : false}/></span></div>
                            
                            <label id="label1">b.&nbsp; Working (occupation) or doing household chores</label>
                            <label id="label"><span id="span1">Severely Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="1" checked={data.Q8B === "1" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Very Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="2" checked={data.Q8B === "2" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Moderately Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="3" checked={data.Q8B === "3" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Slightly Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="4" checked={data.Q8B === "4" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Did not Limit at all</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="5" checked={data.Q8B === "5" ? true : false}/></span></label>
                            <div id="label"><label id="span1">Other reason</label> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8B" id="6" checked={data.Q8B === "6" ? true : false}/></span></div>
                            
                            <label id="label1">c.&nbsp; Visiting family or friends out of your home</label>
                            <label id="label"><span id="span1">Severely Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="1" checked={data.Q8C === "1" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Very Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="2" checked={data.Q8C === "2" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Moderately Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="3" checked={data.Q8C === "3" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Slightly Limited</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="4" checked={data.Q8C === "4" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Did not Limit at all</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="5" checked={data.Q8C === "5" ? true : false}/></span></label>
                            <div id="label"><label id="span1">Other reason</label> <span id="span2"><input type="checkbox" onChange={this.props.habdleFourthQuestion} name="Q8C" id="6" checked={data.Q8C === "6" ? true : false}/></span></div>
                        </div>
                        
                    </div>
                    <button onClick={() => this.props.handleFinal()} id="next_button1" >Submit</button>
                        
                </div>

            </div>
        )
    }
}

export default EightQuestion;