import React from 'react';
import './Home.css'
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    const [exasize, setExasize]=useState([])

    useEffect(()=>{
      fetch('fakeData.json') 
      .then(res => res.json())
      .then(data => setExasize(data))
  
  
    },[])
  
    return (
        <div  className='home-container'>
            
            <div className='home-item1'>
               
                {
                    exasize.map(ex => <Banner
                    ex={ex}
                    key={ex.id}
                    ></Banner>)
                }
            </div>
            <div className='home-item2'>
                <h3>Exersize Summary</h3>
            </div>
            
        </div>
    );
};

export default Home;