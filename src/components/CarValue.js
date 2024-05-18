import { useSelector } from "react-redux";

function CarValue(){
const totalCost = useSelector(({cars : {data , searchTerm} })=>
data
.filter((car)=>
   car.name.toLowerCase().includes(searchTerm.toLowerCase()) 
)
.reduce((acc,car) => acc + car.cost , 0)  //"reduce" function is used !! toprint the totalcost value as per the search items

);

 return (
      <div className="car-value">
        TotalCost: $ {totalCost}
      </div>
    );
    
}
    
    export default CarValue;
    