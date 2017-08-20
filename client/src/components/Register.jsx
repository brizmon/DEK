import React, { Component } from 'react';



class Register extends Component{

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

      

    render(){
        return(
            <form action="/register" method='POST'>
                <input type="text" name='firstName' placeholder='First Name'
                onChange={(e)=>this.handleInputChange(e)}/>
                <input type="text" name='lastName' placeholder='Last Name'
                onChange={(e)=>this.handleInputChange(e)}/>
                <input type="text" name='userName' placeholder='User Name'
                onChange={(e)=>this.handleInputChange(e)}/>
                <input type="email" name='email' placeholder='Email'
                onChange={(e)=>this.handleInputChange(e)}/>
                <input type="password" name='password' placeholder='Password'
                onChange={(e)=>this.handleInputChange(e)}/>
                <input onClick={(e)=>this.props.handleRegisterSubmit(e, this.state)} type="submit" value='Submit'/>
            </form>
        )
    }
}


export default Register;