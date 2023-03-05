import React from "react";

const CarouselInner = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Metro_Bellas_Artes_-murales_-fRF3.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://vitrinalab.com/wp-content/uploads/2021/01/img4.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="https://i.pinimg.com/originals/29/fa/8e/29fa8e4cad431a97f182136c35b1b9a8.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
  );
};

export default CarouselInner