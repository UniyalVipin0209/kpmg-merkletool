import React,{Component} from 'react';
import { AiOutlineCheckCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsExclamationCircle } from 'react-icons/bs';
import { GrCaretNext, GrCaretPrevious } from 'react-icons/gr';
import { MdBlock } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
import moment from 'moment';

import activeIcon from '../Assests/icon2/Green.svg';
import inactiveIcon from '../Assests/icon2/Grey.svg';
import noticeIcon from '../Assests/icon2/Grey.svg';
import blacklisteIcon from '../Assests/icon2/Red.svg';
import csvIcon from '../Assests/icon2/Group 619.svg';

class UserDynamicTable extends Component{
    constructor(props){
        super(props);
    }

    convert(data){
        return moment().format(data)
    }

    render(){
        console.log("this -- ",this.props.tableData)
        return  <div className="row">   
        <div className="col-md-12 mt-4 userIndxTable">
            <table className="table-responsive">
                <thead >
                    <tr >
                        <td>Role ID</td>
                        <td>Role Name</td>
                        {/* <td>Official Contact</td> */}
                        <td>Department</td>
                        <td>Creation Date</td>
                        <td className="text-center">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-role')}>
                            <div>
                                <div className="successEmpID"> <AiOutlineCheckCircle color={"#fff"} size={18}></AiOutlineCheckCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Operation Manager</td>
                        <td>Business</td>
                        <td>01-Jan-2020</td>
                        <td>Active</td>
                    </tr> */}
                    {this.props.tableData.map((val,i)=><tr>
                        <td onClick={()=>this.props.history.push('/admin/edit/user-role')}>
                           
                            <div>
                            {val.status!=null?(val.status.status_type=="Active"?<img src={activeIcon} />:(val.status.status_type=="Inactive" && <img src={inactiveIcon} />)):<img src={activeIcon} />} &nbsp; <span>{val.role_id}</span>
                            </div>
                        </td>
                        <td>{val.role_name}</td>
                        <td>{val.department[0].department}</td>
                        {/* <td>{val.department.department? val.department.department:"-"}</td> */}
                        <td>{moment(val.created_date).format("DD-MMM-YYYY")}</td>
                        <td className="text-center">{val.status!=null?val.status.status_type:'-'}</td>
                        {/* {val.status.status_type != null ? val.status.status_type : "-"} */}
                    </tr>)}
                    {/* <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-role')}>
                            <div>
                                <div className="successEmpID"> <AiOutlineCheckCircle color={"#fff"} size={18}></AiOutlineCheckCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Financial Analyst</td>
                        <td>Finance</td>
                        <td>01-Jan-2020</td>
                        <td>Active</td>
                    </tr> 
                    <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-role')}>
                            <div>
                                <div className="successEmpID"> <AiOutlineCheckCircle color={"#fff"} size={18}></AiOutlineCheckCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Product Manager</td>
                        <td>IT</td>
                        <td>01-Jan-2020</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-role')}>
                            <div>
                                <div className="successEmpID"> <AiOutlineCheckCircle color={"#fff"} size={18}></AiOutlineCheckCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Sales Manager</td>
                        <td>Sales</td>
                        <td>01-Jan-2020</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-role')}>
                            <div>
                                <div className="successEmpID"> <AiOutlineCheckCircle color={"#fff"} size={18}></AiOutlineCheckCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Operations Manager</td>
                        <td>Business</td>
                        <td>01-Jan-2020</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-role')}>
                            <div>
                                <div className="pausedEmpID"> <AiOutlineMinusCircle color={"#fff"} size={18}></AiOutlineMinusCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Accountant</td>
                        <td>Finance</td>
                        <td>01-Jan-2020</td>
                        <td>Inactive</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-info')}>
                            <div>
                                <div className="warningEmpId"> <BsExclamationCircle color={"#fff"} size={18}></BsExclamationCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Business Analyst</td>
                        <td>IT</td>
                        <td>01-Jan-2020</td>
                        <td>Notice Period</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-role')}>
                            <div>
                                <div className="successEmpID"> <AiOutlineCheckCircle color={"#fff"} size={18}></AiOutlineCheckCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Sales Engineer</td>
                        <td>Sales</td>
                        <td>01-Jan-2020</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-role')}>
                            <div>
                                <div className="successEmpID"> <AiOutlineCheckCircle color={"#fff"} size={18}></AiOutlineCheckCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Rajasekhar</td>
                        <td>Finance</td>
                        <td>01-Jan-2020</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.props.history.push('/admin/user-role')}>
                            <div>
                                <div className="successEmpID"> <AiOutlineCheckCircle color={"#fff"} size={18}></AiOutlineCheckCircle></div> &nbsp; SG1234
                            </div>
                        </td>
                        <td>Rajasekhar</td>
                        <td>Finance</td>
                        <td>01-Jan-2020</td>
                        <td>Active</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
        <div className="col-md-12">
            <div className="paginationCard">
                &nbsp;&nbsp;
                <div>Items per page :</div> &nbsp;&nbsp;&nbsp;
                <div>
                    <select>
                        <option value="20">20</option>
                    </select>
                </div>
                <div className="pageNavigators">
                   <GrCaretPrevious></GrCaretPrevious>
                   <span className="activeSpan">1</span>
                   <span>2</span>
                   <span>3</span>
                   <span>4</span>
                   <span>5</span>
                   <span>6</span>
                   <span>7</span>
                   <span>8</span>
                   <span>9</span>
                   <GrCaretNext></GrCaretNext>
                </div>
                <div className="downloadAs">
                    <span>Download as : <img src={csvIcon} /></span>
                </div>
            </div>
        </div>
    </div>
    }
    //     return  <table className="userDynTbl">
    //                 <thead>
    //                     <tr>
    //                         <td>dd</td>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <td>dd</td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    // }
}

const mapStateToProps =(state)=>{
    return{

    }
}

const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators({

    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDynamicTable)