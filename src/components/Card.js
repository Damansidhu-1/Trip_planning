import { useState } from "react";

// kyuki card ch data pass hoea c tah ohnu appa awe vi likh  skde aa
// ethe props likh vi km chla skde aa
function Card({id, image,info,price,name, removeTour})  {
    const[readmore,setReadmore] = useState(false);
    
    // info.substring(0,200) --> this code is used for code off 200 words from info
    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    


    return (
        
        <div className="card">

            <img src={image} className="image" alt="" ></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div>
            </div>

            {/* why arrow function */}
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;