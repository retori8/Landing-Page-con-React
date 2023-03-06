import React from "react";
import CarouselIndicator from "./carouselIndicator";
import CarouselInner from "./carouselInner";
import CarouselNavigator from "./carouselNavigator";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <CarouselIndicator /> 
      <CarouselInner />
      <CarouselNavigator />
    </div>
  );
};

export default Carousel