import React from 'react';
import './Banner.css'

const Banner = ({ex}) => {
 
    const {img,name,Time,}=ex
    return (
        <div className='banner-container'>
          <img className='banner-img' src={img} alt="" />
          <div className='banner-info'>
            <h5>{name}</h5>
            <p>Time Requer: {Time}m</p>
            <p></p>
          </div>
            <button className='btn-addToList'>
                Add To List
            </button>
        </div>
    );
};

export default Banner;