import React,{useState} from "react";

import data from "./data";
import ToplevelCard from "./Components/ToplevelCard";

const App = () => {
  const[value,setData]=useState(data);
  // City remove
  function removeToure(id){
    const newTours =value.filter(tour => tour.id !== id);
    setData(newTours);

  }
  function showcity(id){
    const favouriteCity=value.filter(tour=>tour.id===id);
    setData(favouriteCity);

  }
  // function favourite(id){

  // }
  // () => setData(data)
//  if all city are removed

  if(value.length===0){
    return(
      <div className="refresh">
        <h2 className="refresh-hedding">No Toure Left</h2>
        <button onClick={ () => setData(data)} className="refresh-btn">Refresh</button>
      </div>
    )
  }

  return (
    <div>
       <ToplevelCard toures={value} removecity={removeToure} showcity={showcity}></ToplevelCard>
    </div>
  );
};

export default App;
