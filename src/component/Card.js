import React from 'react';
import '../component/Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { title, paragraph, color } = props;

  const cardStyle = {
    backgroundColor: color, 
  };

  return (
    <div className='card' style={cardStyle}>
      <ul>
        <li><h2>{title}</h2></li>
        <li><p>{paragraph}</p></li>
       
       <Link to='/SelectJob'> <button>Start a Job</button></Link>
      </ul>
    </div>
  );
};

export default Card;
