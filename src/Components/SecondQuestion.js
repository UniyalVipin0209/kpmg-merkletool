import React, { Component } from 'react';
import { AiFillRightCircle } from "react-icons/ai";
import docimg from '../Assets/humberto-chavez-FVh_yqLR9eA-unsplash-removebg-preview.png'
import { AiOutlineDoubleRight, AiOutlineArrowRight,AiOutlineDoubleLeft } from "react-icons/ai";
import logo from '../Assets/Group 1369.svg'
import progress from '../Assets/progress_bar/Group 1653.png'

class SecondQuestion extends React.Component{
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
        const data = this.props.postData.symptomfrequency
        console.log(data)
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
                        <p>2. Over the past 2 weeks, how many times did you have <span>swelling in your feet</span>, 
                            ankles or legs when you wake up in the morning ?</p>
                            <label>{this.props.errors !== '' ? this.props.errors.Q2 : ''}</label>
                    </div>
                    <div id="kccq_table">
                        <div id="table_other">
                            <div id="table_heading_secQues">
                                <label id="label2">Every Morning</label>
                                <label id="label1">3 or more times per week but ot every day</label>
                                <label id="label1">Less than once a week</label>
                                <label id="label1" >1-2 times per week</label>
                                <label id="label1">Never over the past 2 week</label>
                            </div>
                            <div id="table_data_secQues">
                                <label id="label2"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q2" id="1" checked={data.Q2 === "1" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q2" id="2" checked={data.Q2 === "2" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q2" id="3" checked={data.Q2 === "3" ? true : false}/></center></label>
                                <label id="label1" ><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q2" id="4" checked={data.Q2 === "4" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q2" id="5" checked={data.Q2 === "5" ? true : false}/></center></label>
                            </div>

                        </div>
                        <div id="table_mobile">
                            <div id="label"><label id="span1">Every Morning</label> <span id="span2"><input type="checkbox" checked={data.Q2 === "1" ? true : false} name="Q2" id="1" onChange={this.props.habdleSecondQuestion}/></span></div>
                            <label id="label"><span id="span1">3 or more times per week but ot every day</span> <span id="span2"><input type="checkbox" checked={data.Q2 === "2" ? true : false} name="Q2" id="2" onChange={this.props.habdleSecondQuestion}/></span></label>
                            <label id="label"><span id="span1">Less than once a week</span> <span id="span2"><input type="checkbox" checked={data.Q2 === "3" ? true : false} name="Q2" id="3" onChange={this.props.habdleSecondQuestion}/></span></label>
                            <label id="label"><span id="span1">1-2 times per week</span> <span id="span2"><input type="checkbox" checked={data.Q2 === "4" ? true : false} name="Q2" id="4" onChange={this.props.habdleSecondQuestion}/></span></label>
                            <label id="label"><span id="span1">Never over the past 2 week</span> <span id="span2"><input type="checkbox" checked={data.Q2 === "5" ? true : false} name="Q2" id="5" onChange={this.props.habdleSecondQuestion}/></span></label>
                        </div>
                         
                    </div>
                    <button onClick={() => this.props.handleQuestion(1)} id="next_button">Next <AiOutlineDoubleRight /></button>
                        
                </div>

            </div>
            
        )
    }
}

export default SecondQuestion;