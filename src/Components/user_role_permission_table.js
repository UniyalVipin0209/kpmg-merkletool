import React, { Component } from 'react';

class UR_PermissionTable extends Component{
   
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    componentDidUpdate(prev){

    }

    render(){
    return <div className='row' style={{width:'100%'}}>
                <div className="col-md-12 permissionTable ">
                    <table>
                        <tbody>
                            <tr className='thre'>
                                <td>Permissions</td>
                                <td>View</td>
                                <td>Maker</td>
                                <td>Checker</td>
                                <td>Authorize</td>
                            </tr>
                            {this.props.data.length!=0?<tr>
                                <td>Masters</td>
                                {/* <td><input type="checkbox" className='tes' onChange={this.handleChange} name="masters_permissions" id="0" checked={this.props.data.masters_permissions[0].status} disabled={!this.state.masters_permissions[0].enabled} /><label><span></span></label></td> */}
                                <td><input type="checkbox" id="MV"/><label for="MV"></label></td>
                                <td><input type="checkbox" id="MM"/><label for="MM"></label></td>
                                <td><input type="checkbox" id="MC"/><label for="MC"></label></td>
                                <td><input type="checkbox" id="MA"/><label for="MA"></label></td>
                              {/* <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="1" checked={this.props.data.masters_permissions[1].status} disabled={!this.state.masters_permissions[1].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="2" checked={this.sta.masters_permissions[2].status} disabled={!this.state.masters_permissions[2].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="3" checked={this.state.masters_permissions[3].status} disabled={!this.state.masters_permissions[3].enabled} /><label><span></span></label></td> */}
                            </tr>:<tr>
                                <td colSpan={5} className='text-center'>No Permissions Assigned.</td>    
                            </tr>}
                            <tr>
                                <td>Users</td>
                                {/* <td><input type="checkbox" className='tes' onChange={this.handleChange} name="masters_permissions" id="0" checked={this.props.data.masters_permissions[0].status} disabled={!this.state.masters_permissions[0].enabled} /><label><span></span></label></td> */}
                                <td><input type="checkbox" id="UV"/><label for="UV"></label></td>
                                <td><input type="checkbox" id="UM"/><label for="UM"></label></td>
                                <td><input type="checkbox" id="UC"/><label for="UC"></label></td>
                                <td><input type="checkbox" id="UA"/><label for="UA"></label></td>
               {/* <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="1" checked={this.props.data.masters_permissions[1].status} disabled={!this.state.masters_permissions[1].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="2" checked={this.sta.masters_permissions[2].status} disabled={!this.state.masters_permissions[2].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="3" checked={this.state.masters_permissions[3].status} disabled={!this.state.masters_permissions[3].enabled} /><label><span></span></label></td> */}
                            </tr>
                            <tr>
                                <td>User Roles</td>
                                {/* <td><input type="checkbox" className='tes' onChange={this.handleChange} name="masters_permissions" id="0" checked={this.props.data.masters_permissions[0].status} disabled={!this.state.masters_permissions[0].enabled} /><label><span></span></label></td> */}
                                <td><input type="checkbox" id="UrV"/><label for="UrV"></label></td>
                                <td><input type="checkbox" id="UrM"/><label for="UrM"></label></td>
                                <td><input type="checkbox" id="UrC"/><label for="UrC"></label></td>
                                <td><input type="checkbox" id="UrA"/><label for="UrA"></label></td>
              {/* <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="1" checked={this.props.data.masters_permissions[1].status} disabled={!this.state.masters_permissions[1].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="2" checked={this.sta.masters_permissions[2].status} disabled={!this.state.masters_permissions[2].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="3" checked={this.state.masters_permissions[3].status} disabled={!this.state.masters_permissions[3].enabled} /><label><span></span></label></td> */}
                            </tr>
                            <tr>
                                <td>Lead Queue</td>
                                {/* <td><input type="checkbox" className='tes' onChange={this.handleChange} name="masters_permissions" id="0" checked={this.props.data.masters_permissions[0].status} disabled={!this.state.masters_permissions[0].enabled} /><label><span></span></label></td> */}
                                <td><input type="checkbox" id="LV"/><label for="LV"></label></td>
                                <td><input type="checkbox" id="LM"/><label for="LM"></label></td>
                                <td><input type="checkbox" id="LC"/><label for="LC"></label></td>
                                <td><input type="checkbox" id="LA"/><label for="LA"></label></td>
            {/* <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="1" checked={this.props.data.masters_permissions[1].status} disabled={!this.state.masters_permissions[1].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="2" checked={this.sta.masters_permissions[2].status} disabled={!this.state.masters_permissions[2].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="3" checked={this.state.masters_permissions[3].status} disabled={!this.state.masters_permissions[3].enabled} /><label><span></span></label></td> */}
                            </tr>
                            <tr>
                                <td>Collection Queue</td>
                                {/* <td><input type="checkbox" className='tes' onChange={this.handleChange} name="masters_permissions" id="0" checked={this.props.data.masters_permissions[0].status} disabled={!this.state.masters_permissions[0].enabled} /><label><span></span></label></td> */}
                                <td><input type="checkbox" id="CQV"/><label for="CQV"></label></td>
                                <td><input type="checkbox" id="CQM"/><label for="CQM"></label></td>
                                <td><input type="checkbox" id="CQC"/><label for="CQC"></label></td>
                                <td><input type="checkbox" id="CQA"/><label for="CQA"></label></td>
             {/* <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="1" checked={this.props.data.masters_permissions[1].status} disabled={!this.state.masters_permissions[1].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="2" checked={this.sta.masters_permissions[2].status} disabled={!this.state.masters_permissions[2].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="3" checked={this.state.masters_permissions[3].status} disabled={!this.state.masters_permissions[3].enabled} /><label><span></span></label></td> */}
                            </tr>
                            <tr>
                                <td>Reports</td>
                                {/* <td><input type="checkbox" className='tes' onChange={this.handleChange} name="masters_permissions" id="0" checked={this.props.data.masters_permissions[0].status} disabled={!this.state.masters_permissions[0].enabled} /><label><span></span></label></td> */}
                                <td><input type="checkbox" id="RV"/><label for="RV"></label></td>
                                <td><input type="checkbox" id="RM"/><label for="RM"></label></td>
                                <td><input type="checkbox" id="RC"/><label for="RC"></label></td>
                                <td><input type="checkbox" id="RA"/><label for="RA"></label></td>
             {/* <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="1" checked={this.props.data.masters_permissions[1].status} disabled={!this.state.masters_permissions[1].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="2" checked={this.sta.masters_permissions[2].status} disabled={!this.state.masters_permissions[2].enabled} /><label><span></span></label></td>
                                <td><input type="checkbox" onChange={this.handleChange} name="masters_permissions" id="3" checked={this.state.masters_permissions[3].status} disabled={!this.state.masters_permissions[3].enabled} /><label><span></span></label></td> */}
                            </tr>
                           
                        </tbody>
                    </table>        
                </div>
            </div>
    }
}

export { UR_PermissionTable };