import React from "react";
import "./Country.css";

const Country = (props) => {
   const { name, capital, flags, population } = props.country;
   // console.log(props);
   return (
      <div className="country-card">
         <div className="country-flag">
            <img src={flags.png} alt="" />
         </div>
         <div className="card-body">
            <h2>{name.common}</h2>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
         </div>
      </div>
   );
};

export default Country;
