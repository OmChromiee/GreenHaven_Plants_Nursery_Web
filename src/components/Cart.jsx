// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, deleteProduct } from '../redux/Slices/Cart'; // Import necessary actions

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);

  // Calculate the total cost of all products in the cart
  const calculateTotal = () => {
    return cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  // Calculate the total number of plants in the cart
  const calculateTotalItems = () => {
    return cartProducts.reduce((total, product) => total + product.quantity, 0);
  };

  // Handle the checkout button click
  const handleCheckout = () => {
    alert('Checkout Coming Soon!');
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100 pt-20">
      <div className="flex items-center mb-12 px-4">
        <h1 className="text-6xl font-bold text-green-700 mb-4 flex-1">Your Shopping Cart</h1>
        <ShoppingCart className="text-green-700" size={48} />
      </div>
      <div className="w-full px-8 pb-10">
        {cartProducts.length > 0 ? (
          <div>
            {cartProducts.map((product, index) => (
              <div key={index} className="flex justify-between items-center p-4 border-b">
                <img src={product.img} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
                <p className="text-2xl font-semibold">{product.name}</p>
                <p className="text-2xl font-black text-slate-600">₹{product.price}</p>
                
                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <p className="text-2xl font-black text-slate-600">Quantity: {product.quantity}</p>
                  <button
                    onClick={() => dispatch(increaseQuantity(product.id))}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    +
                  </button>
                </div>
                
                {/* Delete Button */}
                <button
                  onClick={() => dispatch(deleteProduct(product.id))}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
            <div className="mt-4 text-right text-2xl font-bold">
              <div className="mb-2 text-3xl text-blue-600 border-b-2 border-blue-600 pb-2">
                Total Plants: {calculateTotalItems()}
              </div>
              <div className="text-3xl text-green-700 border-t-2 border-green-700 pt-2">
                Total Cost: ₹{calculateTotal()}
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-12 flex justify-between items-center">
              <Link to="/shop">
                <button className="text-2xl px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300">
                  Continue Shopping
                </button>
              </Link>
              <button 
                onClick={handleCheckout} 
                className="text-2xl px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-2xl">Your cart is empty</div>
        )}
      </div>

      {/* Back to Shop Button */}
      <div className="mt-12 flex justify-center">
        <Link to="/shop">
          <button className="text-3xl px-8 py-4 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300">
            Back to Shop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
