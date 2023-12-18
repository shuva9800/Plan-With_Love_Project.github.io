   import Card from "./Card";


  function ToplevelCard({toures,removecity}){
    return(
        <div className="wrapper">
            <h2 className="title">Plane With Love</h2>
            <div className="card">
                {toures.map((toure)=>{return <Card key={toure.id} {...toure} removecityname={removecity}></Card>})}
            </div>
        </div>
    );
  } 






  export default ToplevelCard;