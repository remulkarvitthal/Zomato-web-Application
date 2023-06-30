import React from "react";
import queryString from 'query-string';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import '../Style/detail.css';
import axios from "axios";

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            restaurant: null
        }
    }

    componentDidMount() {
        const qs = queryString.parse(this.props.location.search);
        const { restaurant } = qs;

        axios({
            method: 'GET',
            url: `http://localhost:8500/getrestaurantsByLocations/${restaurant}`,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
                this.setState({ restaurant: response.data.restaurant })
            })
            .catch(err => console.log(err));
    }

    render() {
        const { restaurant } = this.state;

        // Check if 'restaurant' object exists
        if (!restaurant) {
            return <div>Loading...</div>; // Or show a loading indicator
        }

        return (
            <div>
                <Carousel showThumbs={false}>
                    <div>
                        <img className="img-2" src="./Assets/DIY9.jpg" alt="not found" />
                    </div>
                    <div>
                        <img className="img-2" src="./Assets/i3.jpg" alt="not found" />
                    </div>
                    <div>
                        <img className="img-2" src="./Assets/i5.jpg" alt="not found" />
                    </div>
                </Carousel>
                <h2>{restaurant.name}</h2>
                <div className="btnbox">
                    <button className="btn-3">Place online order</button>
                </div>

                <div className="tab-wrapper">
                    <Tabs selectedTabClassName="tab">
                        <TabList>
                            <Tab><b>Overview</b></Tab>
                            <Tab><b>Contact</b></Tab>
                        </TabList>

                        <TabPanel className="container">
                            <h3>About this place</h3>
                            <h4>Cuisine</h4>
                            <p>Bakery, Fast Food</p>
                            <h4>Average Cost</h4>
                            <p>&#8377;{restaurant.min_price} for two people (approx)</p>
                        </TabPanel>

                        <TabPanel className="container">
                            <h4>Phone Number</h4>
                            <p className="parag12">{restaurant.contact_number}</p>

                            <h4>{restaurant.name}</h4>
                            <p>Shop1, plot D, Bhusar Mohalla panvel <br /> Navi Mumbai, 410206</p>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Detail;
