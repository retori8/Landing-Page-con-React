import React from "react";

const Jumbotron = (props) => {
  {return (
      <div id="Jumbotron" class="card container mt-8">
        <div class="mt-6 p-5 text-white rounded">
          <h1 class="fst-italic fw-bold">{props.title}</h1>
          <p class="fs-4">{props.text}</p>
          <button id="buttonJumbotron" type="button" class="btn btn-light btn-lg fw-bolder text-warning mt-4">{props.button}</button>
        </div>
      </div>
)}};

export default Jumbotron