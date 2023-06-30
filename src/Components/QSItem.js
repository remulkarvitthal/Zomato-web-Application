import React from "react";

function QSItem() {
    const qsdata = [    
        {   
            src: "/Assets/i1.jpg",    
            heading: "Breakfast",    
            para: "Start your day with \nour delicious breakfast \noptions"  
        },  
        {   
            src: "/Assets/i2.jpg",    
            heading: "Dinner",    
            para: "Explore our extensive \ndinner menu"  
        },  
        {    
            src: "/Assets/i3.jpg",    
            heading: "Lunch",    
            para: "Delicious and quick \nlunch options"  
        },  
        {    
            src: "/Assets/i-4.jpg",    
            heading: "Snacks",    
            para: "Satisfy your cravings \nwith our snacks"  
        },  
        {    
            src: "/Assets/i5.jpg",    
            heading: "Drinks",    
            para: "Quench your thirst \nwith our refreshing \ndrinks"  
        },  
        {    
            src: "/Assets/i-6.webp",    
            heading: "Nightlife",    
            para: "Experience the nightlife \nwith our exclusive \nofferings"  
        }
        ];
    return (
        <div className="container-fluid row g-4 mt-3">
            {qsdata.map((item, index) => (
                <div className="boxs col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index} >
                    <img src={item.src} alt="not found" className="box-image col-4"></img>
                    <div className="col-8 content">
                        <h4 className="boxheading col-12">{item.heading}</h4>
                        <div className="boxpara col-12">{item.para}</div>
                    </div>
                </div>
            ))}
        </div>
  );
}

export default QSItem;
