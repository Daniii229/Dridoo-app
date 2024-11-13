import React from 'react';
import '../component/Card.css';
import { Link } from 'react-router-dom';


const Card = (props) => {
  const { title, paragraph, color, color1, color2 } = props;

  const cardStyle = {
    backgroundColor: color, 
    background: `linear-gradient(180.18deg, ${color1} -76.99%, ${color2} 99.85%)`,
   
  };

  return (
    <div className='card' style={cardStyle}>
      <ul>
        <li><h2>{title}</h2></li>
        <li><p>{paragraph}</p></li>
        <Link to="/dashboard/SelectJob"> <button>Start a Job</button></Link>

      </ul>
    </div>
  );
};

export default Card;
