import React , {Component} from 'react';
import axios from 'axios';
import PlayerCollectionCard from '../Components/PlayerCollectionCard'

class MainContent extends Component{

    state = {
        userCollection: []
    }
    

    getUsers = async ()=>{

        await axios.get('http://localhost:4050/mongodb/dbGET/127.0.0.1/27017/poolSize=20&w=majority/test/playersCollectionAppLevel/document/'+JSON.stringify({}))
        .then(res => {
            this.setState({ userCollection: res.data.body });
            console.log(res.data.body);
            console.log(this.state.userCollection);
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    renderPlayers(){
        
        console.log("called")
        if(this.state.userCollection.length)
        return this.state.userCollection.map( player =>
            <PlayerCollectionCard fname = {player.fName} lname = {player.lName} email = {player.email} id_cust = {player._id}/>
        )
        else
        return (<div></div>)
    }

    rendernothing(){

    }


    render(){
        const collection = this.state.userCollection;
        return (
            <div>
                <button type="button" className="btn btn-primary m-5" onClick = {this.getUsers}>Primary</button>                
                {/* {this.state.userCollection.length !== 0 ?
                this.renderPlayers():this.rendernothing()
                } */}

                {this.renderPlayers()}
            </div>
        )
    }

    
}
export default MainContent
//mongodb/dbGET/127.0.0.1/27017/poolSize=20&w=majority/test/playersCollectionAppLevel/document