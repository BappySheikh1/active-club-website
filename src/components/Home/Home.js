import React from 'react';
import './Home.css'
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';

const Home = () => {
    const [exasize, setExasize]=useState([])

    useEffect(()=>{
      fetch('fakeData.json') 
      .then(res => res.json())
      .then(data => setExasize(data))
  
  
    },[])
  
    return (
        <div>
           {/* <Header></Header> */}
            {/* <h3 className='today-work'>Select today's Work</h3> */}
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
                <Cart>

                </Cart>
            </div>
        </div>
        </div>
    );
};

export default Home;