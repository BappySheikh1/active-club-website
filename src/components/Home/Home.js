import React from 'react';
import './Home.css'
import { useEffect, useState } from 'react';

const Home = () => {
    const [exasize, setExasize]=useState([])

    useEffect(()=>{
      fetch('fakeData.json') 
      .then(res => res.json())
      .then(data => console.log(data))
  
  
    },[])
  
    return (
        <div  className='home-container'>
            <div className='home-item1'>
               <h2>Cart body</h2>

            </div>
            <div className='home-item2'>
                <h3>Exersize Summary</h3>
            </div>
            
        </div>
    );
};

export default Home;