import React from 'react'

const Card = (props) => {
    return (
        <div className="card border border-0">
            {props.children}
        </div>
    )
};

export default Card
