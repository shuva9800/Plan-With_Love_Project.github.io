   import Card from "./Card";
   import { FaRegBookmark } from "react-icons/fa";
//    import image35 from "../../../assets/shuva.jpeg";


// const imgPath= '.../assets/shuva.jpeg';
  function ToplevelCard({toures,removecity,showcity}){
   
    return(
        <div className="wrapper">
            {/* <img src={imgPath} alt="hello jee"/> */}
            <h2 className="title">Plane With Love</h2>
            <div className="bookmark">
                <FaRegBookmark />
            </div>

            <div className="card">
                {toures.map((toure)=>{return <Card key={toure.id} {...toure} removecityname={removecity} showcity={showcity}></Card>})}
            </div>
        </div>
    );
  } 






  export default ToplevelCard;