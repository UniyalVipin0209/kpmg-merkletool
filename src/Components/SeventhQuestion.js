import React, { Component } from 'react';
import { AiFillRightCircle } from "react-icons/ai";
import docimg from '../Assets/humberto-chavez-FVh_yqLR9eA-unsplash-removebg-preview.png'
import { AiOutlineDoubleRight, AiOutlineArrowRight ,AiOutlineDoubleLeft} from "react-icons/ai";
import logo from '../Assets/Group 1369.svg'
import progress from '../Assets/progress_bar/Group 1658.png'

class SeventhQuestion extends React.Component{
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
                        <p>7. If you had to spend the rest of your life with your heart failure the 
                            way it is right now, how would you feel about this ?</p>

                            <label>{this.props.errors !== '' ? this.props.errors.Q7 : ''}</label>
                    </div>
                    <div id="kccq_table">
                        <div id="table_other">
                            <div id="table_heading_secQues">
                                <label id="label2">Completely dissatisfied</label>
                                <label id="label1">Mostly dissatisfied</label>
                                <label id="label1">Somewhat satisfied</label>
                                <label id="label1" >Mostly satisfied</label>
                                <label id="label1">Completely satisfied</label>
                            </div>
                            <div id="table_data_secQues">
                                <label id="label2"><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="1" checked={data.Q7 === "1" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="2" checked={data.Q7 === "2" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="3" checked={data.Q7 === "3" ? true : false}/></center></label>
                                <label id="label1" ><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="4" checked={data.Q7 === "4" ? true : false}/></center></label>
                                <label id="label1"><center><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="5" checked={data.Q7 === "5" ? true : false}/></center></label>
                            </div>

                        </div>
                        <div id="table_mobile">
                            <div id="label"><label id="span1">Completely dissatisfied</label> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="1" checked={data.Q7 === "1" ? true : false}/></span></div>
                            <label id="label"><span id="span1">Mostly dissatisfied</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="2" checked={data.Q7 === "2" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Somewhat satisfied</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="3" checked={data.Q7 === "3" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Mostly satisfied</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="4" checked={data.Q7 === "4" ? true : false}/></span></label>
                            <label id="label"><span id="span1">Completely satisfied</span> <span id="span2"><input type="checkbox" onChange={this.props.habdleThirdQuestion} name="Q7" id="5" checked={data.Q7 === "5" ? true : false}/></span></label>
                        </div>
                        
                    </div>
                    <button onClick={() => this.props.handleQuestion(1)} id="next_button">Next <AiOutlineDoubleRight /></button>
                        
                </div>

            </div>
        //     <div style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',padding:'20px',borderRadius:'8px'}}>
        //         <div style={{textAlign:'right'}}>
        //             <img src={logo} style={{width:'18%'}}/>
        //         </div>
        //     <div className='row' id="kccq_heading">
        //          <center><label>The KC Cardiomyopathy Questionnaire <span style={{color:'#836198'}}>KCCQ12</span></label></center>
        //     </div>
        //        <div id="progress_bar">
        //         <img src={progress} style={{width:'98%'}}/>
        //        </div>
        //     <div className="row" id="kccq_question">
        //          <p>7. &nbsp; <span>If you had to spend the rest of your life with your heart failure the way it is right now, how would you feel about this ?</span></p>
        //     </div>

        //     <div id="other5" style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
        //      <div className="row" id="kccq_table_heading" style={{backgroundColor:'white'}}>
        //              <label style={{width:'20%',color:'black'}}><center>Completely dissatisfied</center></label>
        //              <label style={{width:'20%',color:'black'}}><center>Mostly dissatisfied</center></label>
        //              <label style={{width:'20%',color:'black'}}><center>Somewhat satisfied</center></label>
        //              <label style={{width:'20%',color:'black'}}><center>Mostly satisfied</center></label>
        //              <label style={{width:'20%',color:'black'}}><center>Completely satisfied</center></label>
        //      </div>
        //      <div className="row" id="kccq_table_data">
        //              <label style={{width:'20%'}}><center><input type="checkbox" /></center></label>
        //              <label style={{width:'20%'}}><center><input type="checkbox" /></center></label>
        //              <label style={{width:'20%'}}><center><input type="checkbox" /></center></label>
        //              <label style={{width:'20%'}}><center><input type="checkbox" /></center></label>
        //              <label style={{width:'20%'}}><center><input type="checkbox" /></center></label>
        //      </div>
        //     </div>
        //     <div id="mobile5">
        //        <div className='row'>
        //                 <div className='row' style={{padding:'10px 5px'}}>
        //                     <div className="" style={{width:'90%',color:'grey'}}><label>Completely dissatisfied</label></div>
        //                     <div className="" style={{width:'10%'}}><input type="checkbox" /></div>
        //                 </div>
        //                 <div className='row' style={{padding:'10px 5px'}}>
        //                     <div className="" style={{width:'90%',color:'grey'}}><label>Mostly dissatisfied</label></div>
        //                     <div className="" style={{width:'10%'}}><label style={{width:'15%'}}><center><input type="checkbox" /></center></label></div>
        //                 </div>
        //                 <div className='row' style={{padding:'10px 5px'}}>
        //                     <div className="" style={{width:'90%',color:'grey'}}><label>Somewhat satisfied</label></div>
        //                     <div className="" style={{width:'10%'}}><label style={{width:'15%'}}><center><input type="checkbox" /></center></label></div>
        //                 </div>
        //                 <div className='row' style={{padding:'10px 5px'}}>
        //                     <div className="" style={{width:'90%',color:'grey'}}><label>Mostly satisfied</label></div>
        //                     <div className="" style={{width:'10%'}}><label style={{width:'15%'}}><center><input type="checkbox" /></center></label></div>
        //                 </div>
        //                 <div className='row' style={{padding:'10px 5px'}}>
        //                     <div className="" style={{width:'90%',color:'grey'}}><label>Completely satisfied</label></div>
        //                     <div className="" style={{width:'10%'}}><label style={{width:'15%'}}><center><input type="checkbox" /></center></label></div>
        //                 </div>
        //             </div>
        //        </div>
        //     <div style={{display:'flex'}}>
        //      <button onClick={() => this.props.handlePrevious(1)} id="prev_button" ><AiOutlineDoubleLeft/>Previous</button>
        //      <button onClick={() => this.props.handleQuestion(1)} id="next_button">Next <AiOutlineDoubleRight /></button>
        //     </div>
        //  </div>
        )
    }
}

export default SeventhQuestion;