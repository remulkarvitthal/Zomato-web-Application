import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class Wallpaper extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurants: [],
            inputText: '',
            suggestions: []
        }
    }

    handleLocation = (event) => {
        const locationId = event.target.value;

        axios({
            method: 'GET',
            url: `http://localhost:8050/${locationId}`,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ restaurants: response.data })
            })
            .catch(err => console.log(err));
    }

    handleSearch = (event) => {
        let inputText = event.target.value;
        const { restaurants } = this.state;
        const suggestions = restaurants.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()));
        this.setState({ suggestions, inputText });
    }

    showSuggestion = () => {
        const { suggestions, inputText } = this.state;

        if (suggestions.length === 0 && inputText === undefined) {
            return null;
        }
        if (suggestions.length > 0 && inputText === '') {
            return null;
        }
        if (suggestions.length === 0 && inputText) {
            return (
                <ul className="ul-1">
                    <li className="li-1">No search Results Found</li>
                </ul>
            );
        }
        return (
            <ul className="ul-1">
                {
                    suggestions.map((item, index) => (
                        <li className="li-1" key={item._id} onClick={() => this.selectingRestaurant(item)}>
                            {`${item.name} - ${item.locality}, ${item.city}`}
                        </li>
                    ))
                }
            </ul>
        );
    }

    selectingRestaurant = (selectedRestaurant) => {
        this.props.history.push(`/detail?restaurant=${selectedRestaurant._id}`);
    }

    render() {
        const { locationData } = this.props;
        return (
            <div>
                <img className='image' src='./Assets/image10.jpg' alt="not found" />
                <div className='top'>
                    <div className='logo'>e!</div>
                    <div className='heading'>Find the best Restaurants, cafes and bars</div>

                    <div className="search-btn">
                        <div className='searchoptint' style={{ display: "inline-block" }}>
                            <select className='location' onChange={this.handleLocation}>
                                <option value="0">Select</option>
                                {locationData.map((item) => {
                                    return (<option value={item.city} key={item.city}>{`${item.name}, ${item.city}`}</option>)
                                })}
                            </select>
                        </div>

                        <div style={{ display: "inline-block", verticalAlign: "top" }}>
                            <span className="glyphicon glyphicon-search search "></span>
                            <input type='text' placeholder='search for restaurant' className='inputbox' onChange={this.handleSearch} />
                            {this.showSuggestion()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Wallpaper);
