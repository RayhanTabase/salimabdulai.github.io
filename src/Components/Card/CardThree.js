import React from 'react';
import './css/card.css'

const CardThree = ({image, title, text, skills, repo="", live=""}) => {
  return (
    <div className='card-three card'>
      <div className='image'>
        <img src={image} alt={`${title}`} />
      </div>
      <h3 className='title color-secondary'>
        {title}
      </h3>
      <p className='text color-secondary'>
        {text}
      </p>
      <div className='skills color-secondary'>
        {skills.map((skill) => (
          <div className="item"> 
            <p>{skill}</p>
          </div>
        ))}
      </div>
      <div className='buttons'>
        <a className='btn-style-1'>
          Github
        </a>
        <a className='btn-style-2'>
          View Site
        </a>
      </div>
    </div>
  );
}

export default CardThree;
