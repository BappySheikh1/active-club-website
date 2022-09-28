import React from 'react';
import './Home.css'
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';

const Home = () => {
    const [exasize, setExasize]=useState([]);
    const[timeAdd,setTimeAdd]=useState([]);

    useEffect(()=>{
      fetch('fakeData.json') 
      .then(res => res.json())
      .then(data => setExasize(data))
    },[])

    const handleAddToList=([ex])=>{
         
        console.log('clicked',ex)
        
      }
  
    return (

        <div  className='home-container'>
            <div className='home-item1'>
                {
                    exasize.map(ex => <Banner
                    ex={ex}
                    key={ex.id}
                    handleAddToList={handleAddToList}
                    ></Banner>)
                }
            </div>
            <div className='home-item2'>
                <Cart 
                  timeAdd={timeAdd}
                  >

                </Cart>
            </div>
        </div>
        
    );
};

export default Home;