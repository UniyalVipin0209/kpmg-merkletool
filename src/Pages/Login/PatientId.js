import React from 'react';
import { FcGoogle } from "react-icons/fc";
import GoogleLogin from 'react-google-login';
import loading from '../../Assets/Loading_icon.gif'

const PatientId =(props)=>{
    console.log(props)
    const data = props.patient1
    const data1 = props.patient2
    const data2 = props.patient3
    return  <div className='row'>
    <div className='col-md-12 d-flex justify-content-center'>
        <div className='form-medium-box'>
            <div className='row form-field m-0 mt-4'>
                <div className='col-md-12 label-area'>
                    <label>Recent Patient ID’s</label>
                </div>
                <div className='col-md-12 input-area'>
                    {data !== undefined &&
                        <input type="text" className='form-control' placeholder='' value={data}/>
                    }
                    {data1 !== undefined &&
                        <input type="text" className='form-control' placeholder=''  value={data1}/>
                    }
                    {data2 !== undefined &&
                        <input type="text" className='form-control' placeholder='' onChange={props.handleChange} name="email" value={data2}/>
                    }
                    
                    {/* <input type="text" className='form-control'  placeholder='' onChange={props.handleChange} name="email" value={props.patient2}/>
                    
                    <input type="text" className='form-control'  placeholder='' onChange={props.handleChange} name="email" value={props.patient3}/> */}
                    

                </div>
            </div>
           
            
        </div>
    </div>
</div>
}

export default PatientId;