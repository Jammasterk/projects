import React, {useState, useEffect} from "react"
import Beer from "./Beer";
import AddBeerForm from "./AddBeerForm";
import axios from "axios";

export default function BeerList(props){
   const [beers, setBeers] = useState([]);

   function getBeers() {
     axios
       .get("/beers")
       .then((res) => setBeers(res.data))
       .catch((err) => console.log(err.response.data.errMsg));
   }

   function addBeer(newBeer) {
     axios
       .post("/beers", newBeer)
       .then((res) => {
         setBeers((prevBeers) => [...prevBeers, res.data]);
       })
       .catch((err) => console.log(err));
   }

   function deleteBeer(beerId) {
     axios
       .delete(`/beers/${beerId}`)
       .then((res) => {
         setBeers((prevBeer) => prevBeer.filter((beer) => beer._id !== beerId));
       })
       .catch((err) => console.log(err));
   }

   function updateBeer(updateBeer, beerId) {
     axios
       .put(`/beers/${beerId}`, updateBeer)
       .then((res) => console.log(res))
       .catch((err) => console.log(err));
   }

   useEffect(() => {
     getBeers();
   }, []);

   return (
     <div>
       <AddBeerForm submit={addBeer} btnText="Add Beer" />
       {beers.map((beer) => (
         <Beer
           {...beer}
           key={beer.brand}
           deleteBeer={deleteBeer}
           updateBeer={updateBeer}
         />
       ))}
     </div>
   );
}