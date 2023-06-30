import React from "react";

import '../Style/filter.css';

class Filter extends React.Component {
    render() {
        return (
            <div>
                
                    <div className="container">
                        <div className="row heading-1">
                            Breakfast place in Mumbai
                        </div>
                        <div className="row">
                            <div className="col-3 col-sm-12 col-md-4 col-lg-3">
                                <div className="filterPanel">
                                    <div className="filterPanelHeading">
                                        Filter
                                    </div>
                                    <div className="filterPanelSubHeading">
                                        select Location
                                    </div>

                                    <select className="locationSelection">
                                        <option disabled selected> Select Location</option>
                                        <option>Delhi</option>
                                        <option>Mumbai</option>
                                        <option>Kolkata</option>
                                        <option>Chennai</option>
                                    </select>
                                    <div className="filterPanelSubHeading">
                                        Cuisine
                                    </div>

                                    <div>
                                        <input type="checkbox" />
                                        <span className="cuisineOption">North Indian</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <span className="cuisineOption">Chinese</span>
                                    </div>
                                    <div>

                                          
                                        <input type="checkbox" />
                                        <span className="cuisineOption">Street Food</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" />
                                        <span className="cuisineOption">Fast Food</span>
                                    </div>

                                    <div class="filterPanelSubHeading"> Cost for two</div>
                                    <div>
                                        <input type="radio" />
                                        <span className="cuisineOption">Less than &#8377; 500</span>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <span className="cuisineOption">&#8377; 500 to &#8377; 1000</span>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <span className="cuisineOption">&#8377; 1000 to &#8377; 1500</span>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <span className="cuisineOption">&#8377; 1500 to &#8377; 2000</span>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <span className="cuisineOption">&#8377; 2000+</span>
                                    </div>
                                    <div className="filterPanelSubHeading">Sort</div>

                                    <div>
                                        <input type="radio" />
                                        <span className="cuisineOption">price low to high</span>
                                    </div>
                                    <div>
                                        <input type="radio" />
                                        <span className="cuisineOption">price low to high</span>
                                    </div>
                                </div>
                            </div>

                            <div className=" bx9 col-9 col-sm-12 col-md-8 col-lg-9">
                                <div className="resultsPanel">
                                    <div className="upperSection ">
                                        <div className="col-2">
                                            <img src="./Assets/filter.jpg" alt="not found" className="resultsImage" />
                                        </div>

                                        <div className="col-10" >
                                            <div className="resultsHeading">The Big chill cake</div>
                                            <div className="resultsSubHeading">Fort</div>
                                            <div className="resultsAddress">Shop , Plot D, Samruddi complex,Chincholi</div>
                                        </div>
                                    </div>
                                    <div className="lowerSection">
                                        <div className="col-2">
                                            <div className="resultsAddress"> Cuisine : Bakery </div>
                                            <div className="resultsAddress"> Cost for two :&#8377;700</div>
                                        </div>
                                    

                                    </div>
                                </div>
                            </div>

                            <div className=" bx9 col-9 col-sm-12 col-md-8 col-lg-9">
                                <div className="resultsPanel">
                                    <div className="upperSection ">
                                        <div className="col-2">
                                            <img src="./Assets/filter.jpg" alt="not found" className="resultsImage" />
                                        </div>

                                        <div className="col-10" >
                                            <div className="resultsHeading">The Big chill cake</div>
                                            <div className="resultsSubHeading">Fort</div>
                                            <div className="resultsAddress">Shop , Plot D, Samruddi complex,Chincholi</div>
                                        </div>
                                    </div>
                                    <div className="lowerSection">
                                        <div className="col-2">
                                            <div className="resultsAddress"> Cuisine : Bakery </div>
                                            <div className="resultsAddress"> Cost for two :&#8377;800</div>
                                        </div>
                                    

                                    </div>
                                </div>
                            </div>

                           
                            <div class="pegination">
                                <div class="peginationButton">&lt;</div>
                                <div class="peginationButton">1</div>
                                <div class="peginationButton">2</div>
                                <div class="peginationButton">3</div>
                                <div class="peginationButton">4</div>
                                <div class="peginationButton">5</div>
                                <div class="peginationButton">&gt;</div>              
                            </div>
                        </div>
                    </div>
               
            </div>
        )
    }
}

export default Filter;