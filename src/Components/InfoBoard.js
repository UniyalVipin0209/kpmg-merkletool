import React, {Component} from 'react';
import infoIcon from '../Assests/icon2/Record.svg';

class InfoBoard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return  <div className="card-body infoBoard">
                    <div className="infoHeader">
                        <img src={infoIcon} /> &nbsp;&nbsp;
                        
                        <div>Last Modified: Balakrishna SGF001-Jan-2020 11:34 AM</div>
                        <div>User Info</div>
                    </div>
                    <div className="infoBody">
                        {this.props.children}
                    </div>
                    <div className="infoFooter">
                        <img src={infoIcon} /> &nbsp;&nbsp;
                        Record Details
                    </div>
                </div>
    }
}

export { InfoBoard };