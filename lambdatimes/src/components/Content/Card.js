import React from 'react';
import PropTypes from 'prop-types';
// import { cardData } from '../../data';

const Card = props => {
  // console.log(props);
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} alt={props.author}/>
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
}  


export default Card;
