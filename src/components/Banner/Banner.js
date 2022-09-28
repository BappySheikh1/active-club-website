import React from 'react';
import './Banner.css'

const Banner = ({ex}) => {
    console.log(ex)
    const {img,name,Time,}=ex
    return (
        <div className='banner-container'>
          <img className='banner-img' src={img} alt="" />
          <div>
            <h5>{name}</h5>
            <p>Time Requer{Time}m</p>
            <p></p>
          </div>
            
        </div>
    );
};

export default Banner;