import React , {Component} from 'react';
import axios from 'axios';

class PlayerCollectionCard extends Component{
    
    render(){
        return (
            <div>
                <div className="card rounded-lg cardCust ">
                    <div className="card-body d-flex flex-column justify-content-center">
                        <h5 className="card-title d-flex mt-2">NAME:  {this.props.fname}{this.props.lname} </h5>
                            <p className="card-text CardTextCust d-flex justify-content-center">id: {this.props.id_cust}   EMAIL:{this.props.email}</p>
                        <div className = "d-flex justify-content-center">
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
    
}
export default PlayerCollectionCard