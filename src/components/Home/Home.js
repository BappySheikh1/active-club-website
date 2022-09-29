import React from 'react';
import './Home.css'
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Cart from '../Cart/Cart';

const Home = () => {
    const [activities, setActivities]=useState([]);
    const[timeAdd,setTimeAdd]=useState([0]);
    const [addBreak,setAddBreak]=useState([0]);

    useEffect(()=>{
      fetch('fakeData.json') 
      .then(res => res?.json())
      .then(data => setActivities(data))
    },[])

    const handleAddToList=(activity)=>{
        const time =timeAdd + activity.Time
        const parseString=parseFloat(time)
      setTimeAdd(parseString)
      }


    return (

        <div  className='home-container'>
            <div className='home-item1'>
                {
                    activities.map(activity => <Banner
                    activity={activity}
                    key={activity?.id}
                    handleAddToList={handleAddToList}
                    ></Banner>)
                }
            </div>
            <div className='home-item2'>
                <Cart 
                  timeAdd={timeAdd}
                  addBreak={addBreak}
                  setAddBreak={setAddBreak}
                  ></Cart>
            </div>
        </div>
        
    );
};

export default Home;