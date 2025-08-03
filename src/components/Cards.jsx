import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({card}) => {
    return (
      <Link to="/destination" className="card image-full shadow-xl">
        <img src={card.image_url} alt="" />
        <div className="flex justify-start mt-96">
          <span className="font-medium text-3xl text-white">{card.name}</span>
        </div>
      </Link>
    );
};

export default Cards;