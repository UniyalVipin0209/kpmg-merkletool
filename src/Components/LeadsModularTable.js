import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';

export const LeadsModularTable =({navigator})=>{
    return  <table className='leadsTableCss'>
                {/* <thead> */}
                    <tr className='headTable'>
                        {/* <td></td> */}
                        <td>CLIENT ID</td>
                        <td>BUYER NAME</td>
                        <td>CREATED BY</td>
                        <td>USER NAME</td>
                        <td className='text-center'>EXISTING CUSTOMER</td>
                        <td>STATUS</td>
                    </tr>
                {/* </thead>
                <tbody> */}
                    <tr  style={{borderTopLeftRadius:'5px'}} className='bodyTable'>
                        {/* <td style={{borderTopLeftRadius:'5px'}}><input type="checkbox" id="client_Id_1"/><label for="client_Id_1"></label></td> */}
                        <td>123456</td>
                        <td onClick={navigator}>Rama Krishna Traders</td>
                        <td>RM-sales</td>
                        <td>Amar Singh</td>
                        <td className='text-center'>Yes</td>
                        <td><BsFillCircleFill size={8} color={"#4CAF50"}></BsFillCircleFill> &nbsp;Approved</td>
                    </tr>
                    <tr className='bodyTable'>
                        {/* <td><input type="checkbox"  id="client_Id_2"/><label for="client_Id_2"></label></td> */}
                        <td>123456</td>
                        <td>Rama Krishna Traders</td>
                        <td>Customer</td>
                        <td>Rama dev</td>
                        <td className='text-center'>No</td>
                        <td><BsFillCircleFill size={8} color={"#F2A247"}></BsFillCircleFill> &nbsp;Review</td>
                    </tr>

                    <tr className='bodyTable'>
                        {/* <td><input type="checkbox"  id="client_Id_2"/><label for="client_Id_2"></label></td> */}
                        <td>123456</td>
                        <td>Rama Krishna Traders</td>
                        <td>Customer</td>
                        <td>Rama dev</td>
                        <td className='text-center'>No</td>
                        <td><BsFillCircleFill size={8} color={"#F2A247"}></BsFillCircleFill> &nbsp;Review</td>
                   </tr>

                    <tr className='bodyTable'>
                        {/* <td><input type="checkbox"  id="client_Id_2"/><label for="client_Id_2"></label></td> */}
                        <td>123456</td>
                        <td>Rama Krishna Traders</td>
                        <td>Customer</td>
                        <td>Rama dev</td>
                        <td className='text-center'>Yes</td>
                        <td><BsFillCircleFill size={8} color={"#F86666"}></BsFillCircleFill> &nbsp;Rejected</td>
                    </tr>


                    <tr className='bodyTable'>
                        {/* <td><input type="checkbox"  id="client_Id_2"/><label for="client_Id_2"></label></td> */}
                        <td>123456</td>
                        <td>Rama Krishna Traders</td>
                        <td>Customer</td>
                        <td>Rama dev</td>
                        <td className='text-center'>No</td>
                        <td><BsFillCircleFill size={8} color={"#F2A247"}></BsFillCircleFill> &nbsp;Review</td>
                    </tr>



                    <tr className='bodyTable'>
                        {/* <td><input type="checkbox"  id="client_Id_2"/><label for="client_Id_2"></label></td> */}
                        <td>123456</td>
                        <td>Rama Krishna Traders</td>
                        <td>Customer</td>
                        <td>Rama dev</td>
                        <td className='text-center'>No</td>
                        <td><BsFillCircleFill size={8} color={"#F2A247"}></BsFillCircleFill> &nbsp;Review</td>
                    </tr>


                    <tr className='bodyTable'>
                        {/* <td><input type="checkbox"  id="client_Id_2"/><label for="client_Id_2"></label></td> */}
                        <td>123456</td>
                        <td>Rama Krishna Traders</td>
                        <td>Customer</td>
                        <td>Rama dev</td>
                        <td className='text-center'>No</td>
                        <td><BsFillCircleFill size={8} color={"#F2A247"}></BsFillCircleFill> &nbsp;Review</td>
                    </tr>

                    <tr className='bodyTable'>
                        {/* <td><input type="checkbox"  id="client_Id_2"/><label for="client_Id_2"></label></td> */}
                        <td>123456</td>
                        <td>Rama Krishna Traders</td>
                        <td>Customer</td>
                        <td>Rama dev</td>
                        <td className='text-center'>No</td>
                        <td><BsFillCircleFill size={8} color={"#F2A247"}></BsFillCircleFill> &nbsp;Review</td>
                    </tr>

                    <tr className='bodyTable'>
                        {/* <td><input type="checkbox"  id="client_Id_2"/><label for="client_Id_2"></label></td> */}
                        <td>123456</td>
                        <td>Rama Krishna Traders</td>
                        <td>Customer</td>
                        <td>Rama dev</td>
                        <td className='text-center'>No</td>
                        <td><BsFillCircleFill size={8} color={"#F2A247"}></BsFillCircleFill> &nbsp;Review</td>
                    </tr>

                    <tr className='bodyTable2'>
                        {/* <td><input type="checkbox"  id="client_Id_2"/><label for="client_Id_2"></label></td> */}
                        <td>123456</td>
                        <td>Rama Krishna Traders</td>
                        <td>Customer</td>
                        <td>Rama dev</td>
                        <td className='text-center'>No</td>
                        <td><BsFillCircleFill size={8} color={"#F2A247"}></BsFillCircleFill> &nbsp;Review</td>
                    </tr>
                {/* </tbody> */}
            </table>
}
