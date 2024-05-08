import React from "react";
import {useState} from "react"
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";



function Card({id,name,info,image,price,removecityname,showcity}){
    const description=` ${info.substring(0,120)}...`;
    
    const[readMore, setreadMore]=useState(false);
    const [addfavourite, setAddfavourite]= useState(true);
    
    function readmoreHandeler(){

        setreadMore(!readMore);
    }
    const array=[];
    function favouriteCity(id){
        setAddfavourite(!addfavourite)
// TO BE CHECKED
        array.push(id);
        // console.log(array);

        // if(array.find(id)===undefined)
        // {
        //     array.push(id);
        //     console.log(array);
        // }
        // else{
        //     array.pop(id);
        //     console.log(array);
        // }

    }
    console.log(array);
  
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
             
                <button onClick={()=> favouriteCity(id)}>
                    {
                        addfavourite?(<GrFavorite />):(<MdOutlineFavorite />)
                    }
                </button>
              
            </div>
    );
}



export default Card