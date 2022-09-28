import React from 'react';
import './Banner.css'

const Banner = ({ex,handleAddToList}) => {
  
    const {img,name,Time,age}=ex
   
    return (    
        <div className='banner-container'>
          <img className='banner-img' src={img} alt="" />
          <div className='banner-info'>
            <h5>{name}</h5>
            <p>For Age : {age}</p>
            <p>Time required: {Time}m</p>
            
          </div>
            <button onClick={()=>handleAddToList([ex])} className='btn-addToList'>
                Add To List
            </button>
        </div>
       
    );
};

export default Banner;