import React, { Component } from 'react';



class Login extends Component{

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

      

    render(){
        return(
            <form action="/login" method='POST'>
                <input type="text" name='userName' placeholder='User Name'
                onChange={(e)=>this.handleInputChange(e)}/>
                <input type="password" name='password' placeholder='Password'
                onChange={(e)=>this.handleInputChange(e)}/>
                <input onClick={(e)=>this.props.handleLoginSubmit(e,this.state.userName, this.state.password)} type="submit" value='Submit'/>
            </form>   
        )
    }
}


export default Login;