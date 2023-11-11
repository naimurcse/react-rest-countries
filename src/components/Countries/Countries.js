import React, { useEffect, useState } from "react";

const Countries = () => {
   const [countries, setCountries] = useState([]);
   // useEffect(()=>{},[])
   useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
         .then((res) => res.json())
         .then((data) => setCountries(data));
   }, []);

   return (
      <div>
         <h1>Mehnaz doesn't like cat.</h1>
         {countries.map((country) => console.log(country))}
      </div>
   );
};

export default Countries;
