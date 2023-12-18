import React from "react";
import {useState} from "react"



function Card({id,name,info,image,price,removecityname}){
    const description=` ${info.substring(0,120)}...`;
    
    const[readMore, setreadMore]=useState(false);
    
    function readmoreHandeler(){
       if(readMore===false)
       {
         setreadMore(true);
       }
       else{
        setreadMore(false)
       }
    }
  
    return(
            <div className="card-item">
                <img src={image} className="card-img" ></img>
                <div className="card-desc">
                    <div className="tour-details">
                        <h4 className="tour-price">₹{price}</h4>
                        <h4 className="place">{name}</h4>
                    </div>
                    <div className="tour-desc">
                        {readMore?info:description}
                        <span className="read-more" onClick={readmoreHandeler}>{readMore?`Show Less`:`Read More`}</span>

                    </div>
                </div>

                <div>
                    <button onClick={()=>removecityname(id) } className="btn-remove">Not Interested</button>
                </div>
              
            </div>
    );
}



export default Card