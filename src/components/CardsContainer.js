import React, { useState, useEffect } from "react";
import ReportForCard from "./ReportForCard";
import Cards from "./Cards";

const CardsContainer = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log("the data is:", data);
  return (
    <div id="main-container">
      <ReportForCard />
      <Cards data={data} />
    </div>
  );
};
export default CardsContainer;
