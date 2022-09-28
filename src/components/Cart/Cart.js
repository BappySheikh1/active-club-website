import React from 'react';
import './Cart.css'
import img from "../../image/120348870_211758073664374_7834001204268795183_n.jpg"

const Cart = () => {
    return (
        <div className='cart-container'>
             {/* location */}
            <div className='cart-item1'>
                <img className='cart-images' src={img} alt="" />
                <div className='cart-info'>
                    <h5>Bappy Sheikh <br />
                    <span className='location'>Narail,Bangladesh</span>
                    </h5>
                </div>
            </div>
            {/* Detail */}
            <div className='Details-container'>
                   <div className=''>
                     <h3>76<span className='item-kg'>kg</span>
                     <p className='weight'>Weight</p>
                     </h3>
                   </div>
                   <div>
                     <h3>5.10
                     <p className='height'>Height</p>
                     </h3>
                   </div>
                   <div>
                     <h3>20<span className='item-yr'>yr</span>
                     <p className='age'>Age</p>
                     </h3>
                   </div>

            </div>
        </div>
    );
};

export default Cart;