import React from 'react';
import axios from 'axios';


import '../Style/home.css';

import Wallpaper from './wallpaper';

import QuickSearch from './quickSearch';

class Home extends React.Component {
    constructor(){
        super();
        this.state ={
            location:[]
        }
    }
    componentDidMount = async()=>{
        sessionStorage.clear();
        let location = await axios({
            method: 'GET',
            url: 'http://localhost:8500/getlocations',
            headers: { 'Content-Type': 'application/json' }
        });
        this.setState({location : location.data});
        // .then(respones =>{
        //     this.setState({ location: respones.data })
        // })
        // .catch(err => console.log(err));
    }
    render() {
        const {location} = this.state;
        return(

            <div>
              
                <Wallpaper locationData = {location} />
                <QuickSearch />

                
            </div>
        )
    }
}

export default Home;