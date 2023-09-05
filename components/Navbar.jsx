import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai'
import Link from 'next/link';
import { useStateContext } from '@/context/StateContext';
import { Cart } from './index';

const Navbar = () => {
  const {qty, totalQuantities, showCart, setShowCart} = useStateContext();

  return (
    <div className="navbar-container">
      <p>
        <Link href='/' className="logo">Headphones</Link>
      </p>
      <button type='button' onClick={()=>setShowCart(true)} className="cart-icon">
        <AiOutlineShopping></AiOutlineShopping>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart&& <Cart></Cart>}
    </div>
  )
}

export default Navbar;
