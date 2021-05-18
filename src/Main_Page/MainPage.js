import React, { Component } from 'react';
import Navbar from '../navbar1/navbar'
import Navbar2 from '../navbar2/navbar2'
class MainPage extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Navbar2/>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">TT Dashboard</h1>
                        <p className="lead"></p>
                    </div>
                
                <div className = "container">
                    <div className = "row">
                        <div className = "col-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Game1</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default MainPage