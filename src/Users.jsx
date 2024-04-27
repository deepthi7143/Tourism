import React, { Component } from 'react'

export class Users extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"Unknown",
            Code:'Unknown'
        }
    }
    styles={
        fontStyle:'italic',
        color:"Red"
    }
    stylee={
        margin:'10px'
    }
    

    knowAboutMe = ()=>{
        this.setState({
            message:'My Name is Pawan',
            Code:'I am A good Boy'
        })
    }

    askHisFriend = ()=>{
        this.setState({
            message:'His name is Pawan katraj',
            Code:'He is a Rasikudu'
        })
    }
  render() {
    return (
      <div>
        <h3 style={this.styles} >{this.state.message}</h3>
        <h3 style={{color:"blue"}} >{this.state.Code}</h3>
        <button style={{cursor:"pointer"}}  onClick={this.knowAboutMe}>Know About Me</button>
        <button  style={{cursor:"pointer"}}  onClick={this.askHisFriend}>Ask His Friend</button>
      </div>
    )
  }
}

export default Users