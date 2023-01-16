import React, {Component} from 'react';
import { BsXLg } from 'react-icons/bs';
import { FaFilter, FaTimes } from 'react-icons/fa';

export default class SearchFilter extends Component{

    render(){
        return  <div className="row mt-4">
                    <div className="col-md-4 searchClient">
                        <input type="text" placeholder="Search" className="form-control" /> 
                    </div>
                    <div className="col-md-5 ">
                        <div className="filterClient">
                        <FaFilter size={18} color={'#999999'}></FaFilter>
                        &nbsp;&nbsp; <span>Filter</span>
                        <div className="searchInputs">
                            <div>
                                <input type="text" placeholder="SQ7321" />
                                <div><BsXLg></BsXLg> </div>
                            </div> 
                            <div>
                                <input type="text" placeholder="Raj"/>
                                <div><BsXLg></BsXLg></div>
                            </div>
                            <div>
                                <input type="text" placeholder="Buyer"/>
                                <div><BsXLg></BsXLg></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 addDetails text-center">
                        <button onClick={this.props.handleAdd}>ADD</button>
                    </div>
                </div>
    }
}