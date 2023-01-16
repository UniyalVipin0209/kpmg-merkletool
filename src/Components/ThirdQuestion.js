import React, { Component } from 'react';
import { AiFillRightCircle } from "react-icons/ai";
import docimg from '../Assets/humberto-chavez-FVh_yqLR9eA-unsplash-removebg-preview.png'
import { AiOutlineDoubleRight, AiOutlineArrowRight , AiOutlineDoubleLeft} from "react-icons/ai";
import logo from '../Assets/Group 1369.svg'
import progress from '../Assets/progress_bar/Group 1653.png'

class ThirdQuestion extends React.Component{
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
                        <p>3. Over the past 2 weeks,an average, how many times has fatigue limited your ability to do what you ?</p>

                        <label>{this.props.errors !== '' ? this.props.errors.Q3 : ''}</label>
                    </div>
                    <div id="kccq_table">
                        <div id="table_other">
                            <div id="table_heading_thrdQues">
                                <label id="label1">All of the Time</label>
                                <label id="label1">Several Times per day</label>
                                <label id="label1">At least once a day</label>
                                <label id="label1" >3 or more times per week but not every day</label>
                                <label id="label1">1-2 times per week</label>
                                <label id="label1">Less than Once a week</label>
                                <label id="label1">Never over the past 2 weeks</label>
                            </div>
                            <div id="table_data_thrdQues">
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="1" checked={data.Q3 === "1" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="2" checked={data.Q3 === "2" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="3" checked={data.Q3 === "3" ? true : false}/></center></label>
                                <label id="label1" ><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="4" checked={data.Q3 === "4" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="5" checked={data.Q3 === "5" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="6" checked={data.Q3 === "6" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="7" checked={data.Q3 === "7" ? true : false}/></center></label>
                            </div>

                        </div>
                        <div id="table_mobile">
                            <div id="label"><label id="span1">All of the Time</label> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="1" checked={data.Q3 === "1" ? true : false}/></span></div>
                            <label id="label"><span id="span1">Several Times per day</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="2" checked={data.Q3 === "2" ? true : false}/></span></label>
                            <label id="label"><span id="span1">At least once a day</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="3" checked={data.Q3 === "3" ? true : false}/></span></label>
                            <label id="label"><span id="span1">3 or more times per week but not every day</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="4" checked={data.Q3 === "4" ? true : false} /></span></label>
                            <label id="label"><span id="span1">1-2 times per week</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="5" checked={data.Q3 === "5" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Less than Once a week</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="6" checked={data.Q3 === "6" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Never over the past 2 weeks</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q3" id="7" checked={data.Q3 === "7" ? true : false}/></span></label>
                        </div>
                        
                    </div>
                    <button onClick={() => this.props.handleQuestion(1)} id="next_button">Next <AiOutlineDoubleRight /></button>
                        
                </div>

            </div>
        
        )
    }
}

export default ThirdQuestion;