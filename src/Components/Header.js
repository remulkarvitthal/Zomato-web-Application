import React from "react";

import "../Style/header.css";

class Header extends React.Component{
    constructor(){
        super();
        this.state={
            backgroundColor: '',
            display: '',
            position: ''           
        }
    }

    componentDidMount(){
        const path = this.props.history.location.pathname;
        this.setAttribute(path);
    }
 
    setAttribute = (path)=>{
        let bg, display,pos;
        if (path === '/'){
            bg = '#000000';
            display = 'none';
           
            
        }
        else {
            bg = '#ff0000';
            display = 'inline-block';
            
           
        }
        this.setState({backgroundColor: bg, display: display});
    }

    render(){
        const { backgroundColor , display} = this.state;
        return(
           
                <div className="division" style={{backgroundColor: backgroundColor}}>
                   
                   <div className="btnDiv">
                        <button className="login-1">Login</button>
                        <button className="account-1" >Create an account</button>
                   </div>
                   <div className="logoDiv">
                        <button className="elogo" style={{display : display}}>e!</button>
                   </div>
                        
                   
            </div>
           
        )
    }
}

export default Header;