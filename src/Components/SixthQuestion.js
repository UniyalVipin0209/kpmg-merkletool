import React, { Component } from 'react';
import { AiFillRightCircle } from "react-icons/ai";
import docimg from '../Assets/humberto-chavez-FVh_yqLR9eA-unsplash-removebg-preview.png'
import { AiOutlineDoubleRight, AiOutlineArrowRight, AiOutlineDoubleLeft } from "react-icons/ai";
import logo from '../Assets/Group 1369.svg'
import progress from '../Assets/progress_bar/Group 1657.png'

class SixthQuestion extends React.Component{
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
        const data = this.props.postData.qualityoflife
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
                        <p>6. &nbsp; Over the past 2 weeks, how much has your <span>heart failure</span>
                             limited your enjoyment of life ?</p>

                            <label>{this.props.errors !== '' ? this.props.errors.Q6 : ''}</label>
                    </div>
                    <div id="kccq_table">
                        <div id="table_other">
                            <div id="table_heading_secQues">
                                <label id="label2">It has extremely limited my enjoyment of life</label>
                                <label id="label1">It has limited my enjoyment of life to a great extent</label>
                                <label id="label1">It has moderately limited my enjoyment of life</label>
                                <label id="label1" >It has slightly limited my enjoyment of life</label>
                                <label id="label1">It has not limited my enjoyment of life at all</label>
                            </div>
                            <div id="table_data_secQues">
                                <label id="label2"><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="1" checked={data.Q6 === "1" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="2" checked={data.Q6 === "2" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="3" checked={data.Q6 === "3" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="4" checked={data.Q6 === "4" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="5" checked={data.Q6 === "5" ? true : false}/></center></label>
                            </div>

                        </div>
                        <div id="table_mobile">
                            <div id="label"><label id="span1">It has extremely limited my enjoyment of life</label> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="1" checked={data.Q6 === "1" ? true : false}/></span></div>
                            <label id="label"><span id="span1">It has limited my enjoyment of life to a great extent</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="2" checked={data.Q6 === "2" ? true : false}/></span></label>
                            <label id="label"><span id="span1">It has moderately limited my enjoyment of life</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="3" checked={data.Q6 === "3" ? true : false}/></span></label>
                            <label id="label"><span id="span1">It has slightly limited my enjoyment of life</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="4" checked={data.Q6 === "4" ? true : false}/></span></label>
                            <label id="label"><span id="span1">It has not limited my enjoyment of life at all</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q6" id="5" checked={data.Q6 === "5" ? true : false}/></span></label>
                        </div>
                        
                    </div>
                    <button onClick={() => this.props.handleQuestion(1)} id="next_button">Next <AiOutlineDoubleRight /></button>
                        
                </div>

            </div>
        
        )
    }
}

export default SixthQuestion;