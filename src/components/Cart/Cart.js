import React from 'react';
import './Cart.css'
import img from "../../image/120348870_211758073664374_7834001204268795183_n.jpg"
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'



const Cart = ({timeAdd,addBreak,setAddBreak}) => {
  // Activity toast start
const handleAddToast=()=>{
  toast("Congratulations you are done with your activity!");
}
  // Activity toast end


  const handleAddToList =(breakTime)=>{
    const add = breakTime;
   const display= localStorage.getItem('Bookmark') ? localStorage.getItem('Bookmark') : breakTime
    
   setAddBreak(add,display)
    localStorage.setItem('Bookmark',breakTime)
  }
   
  
    return (
        <div className='cart-container'>
             {/* location */}
            <div className='cart-item1'>
                <img className='cart-images' src={img} alt="" />
                <div className='cart-info'>
                    <h5>Bappy Sheikh <br />
                    <span className='location'><FontAwesomeIcon icon={faLocationDot} /> Narail,Bangladesh</span>
                    </h5>
                </div>
            </div>
            {/* Detail */}
            <div className='Details-container'>
                   <div className=''>
                     <h3>76<span className='item'>kg</span>
                     <p className='items'>Weight</p>
                     </h3>
                   </div>
                   <div>
                     <h3>5.10
                     <p className='items'>Height</p>
                     </h3>
                   </div>
                   <div>
                     <h3>20<span className='item'>yrs</span>
                     <p className='items'>Age</p>
                     </h3>
                   </div>

            </div>

            <h3>Add A Break</h3>
            <div className='Break-container'>
                <h3 onClick={()=>handleAddToList(10)} className='break-item'>10s</h3>
                <h3 onClick={()=>handleAddToList(20)} className='break-item'>20s</h3>
                <h3 onClick={()=>handleAddToList(30)} className='break-item'>30s</h3>
                <h3 onClick={()=>handleAddToList(40)} className='break-item'>40s</h3>
            </div>
            {/* Exercise detail start */}
            <h3>Exercise Details</h3>
            <div className='Exercise-details'>
                <div className='exercise-info'>
                   <h4>Exercise time</h4>
                   <p className='exercise-item'>{timeAdd} minutes</p>
                </div>
                <div className='exercise-info2'>
                  <h4>Break time</h4>
                   <p className='exercise-item'>{addBreak} minutes</p>
                </div>

            </div>
            {/* Exercise detail end */}
            {/* Button start */}
            <div className='activity-content'>
              <button onClick={handleAddToast} className='activity-btn'>Activity Completed</button>
              <ToastContainer />
            </div>
            {/* Button end */}
        </div>
    );
};

export default Cart;