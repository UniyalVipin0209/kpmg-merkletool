import React, { Component } from 'react';
import { AiFillRightCircle } from "react-icons/ai";
import docimg from '../Assets/humberto-chavez-FVh_yqLR9eA-unsplash-removebg-preview.png'
import { AiOutlineDoubleRight, AiOutlineArrowRight,AiOutlineDoubleLeft } from "react-icons/ai";
import logo from '../Assets/Group 1369.svg'
import progress from '../Assets/progress_bar/Group 1653.png'

class FivthQuestion extends React.Component{
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
                        <p>5. Over the past 2 weeks,an average, how many times have you brrn forced to <span> sleep sitting up in a chair </span>or with at least 3 pillows to props you up because
                            of difficulty breathing ?</p>

                            <label>{this.props.errors !== '' ? this.props.errors.Q5 : ''}</label>
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
                                <label id="label2"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="1" checked={data.Q5 === "1" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="2" checked={data.Q5 === "2" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="3" checked={data.Q5 === "3" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="4" checked={data.Q5 === "4" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="5" checked={data.Q5 === "5" ? true : false}/></center></label>
                            </div>

                        </div>
                        <div id="table_mobile">
                            <div id="label"><label id="span1">Every Morning</label> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="1" checked={data.Q5 === "1" ? true : false}/></span></div>
                            <label id="label"><span id="span1">3 or more times per week but ot every day</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="2" checked={data.Q5 === "2" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Less than once a week</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="3" checked={data.Q5 === "3" ? true : false}/></span></label>
                            <label id="label"><span id="span1">1-2 times per week</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="4" checked={data.Q5 === "4" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Never over the past 2 week</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleSecondQuestion} name="Q5" id="5" checked={data.Q5 === "5" ? true : false}/></span></label>
                        </div>
                        
                    </div>
                    <button onClick={() => this.props.handleQuestion(1)} id="next_button">Next <AiOutlineDoubleRight /></button>
                        
                </div>

            </div>
       
        )
    }
}

export default FivthQuestion;