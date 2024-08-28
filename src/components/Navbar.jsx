// Navbar.jsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom'; // Ensure to import Link for navigation
import { useSelector } from 'react-redux'; // Import useSelector to access the Redux store

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.products.length); // Get the number of items in the cart

  return (
    <div className="fixed flex justify-between items-center py-4 w-screen shadow-md border-b border-slate-300 px-10 bg-green-500 z-10">
      <div className="text-2xl font-bold text-white">GreenHaven</div>
      <Link to="/cart" className="relative">
        <ShoppingCart className="text-2xl cursor-pointer" />
        {cartItems > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {cartItems}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Navbar;
