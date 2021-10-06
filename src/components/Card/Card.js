import React from 'react';
import Rating from 'react-rating';
import './card.css';

const Card = (props) => {

  const { courseTitle, description, thumbnail, price, rating, review } = props.course;


  return (

    <div className="col">
      <div className="card h-100 ">
        <img src={thumbnail} className="card-img-top img-fluid" alt="course banner" />
        <div className="card-body">
          <h5 className="card-title">{courseTitle}</h5>

          <div className="my-3">
            <Rating className="border-end border-secondary pe-3"
              emptySymbol="fa fa-star-o star-color"
              fullSymbol="fa fa-star star-color"
              initialRating={rating}
              readonly />

            <small className="ps-3">{review} Reviews</small>

          </div>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <h4 className="text-muted">${price}</h4>
        </div>
      </div>
    </div>

  );

};

export default Card;

