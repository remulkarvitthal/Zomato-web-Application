import React from "react";

import QSItem from "./QSItem";

class QuickSearch extends React.Component{
   


    render(){
        return(
            <div className=' container'>

                    <h1 className='bot-heading mt-3'>Quick search</h1>
                    <h2 className='bot-subheading'>Discover restaurant by type of meal</h2>

                    

                        <QSItem />
                       
                    

                </div>
        )
    }
}

export default QuickSearch;