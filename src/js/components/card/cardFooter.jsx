import React from 'react'

const CardFooter = (props) => {
  return (
    <div className="card-footer-sm bg-secondary text-white text-center">
        {props.children}
    </div>
  )
};

export default CardFooter