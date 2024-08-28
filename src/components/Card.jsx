// Card.jsx
import React, { useState } from "react";
import { Button } from "./ui/button";
import DialogComponent from "./DialogComponent";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/Slices/Cart";

const Card = ({ img, name, price, id }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  const addToCart = () => {
    if (quantity <= 0) {
      alert("Quantity must be greater than 0 to add to cart.");
      return;
    }
    dispatch(addProduct({ img, name, price, quantity, id }));
    setIsAdded(true);
    setIsViewed(true); // Disable the view button as well
  };

  return (
    <div className="w-[280px] h-auto grid grid-cols-1 place-items-center p-4 gap-6 border rounded-lg shadow-lg bg-white">
      <div className="w-full px-2 mb-4">
        <img
          src={img || ""}
          alt="product image"
          className="w-full h-64 object-cover rounded-md shadow-md"
        />
      </div>
      <div className="w-full px-4 mb-2">
        <p className="text-xl font-semibold">{name}</p>
      </div>
      <div className="w-full px-4 mb-2">
        <p className="font-black text-slate-600">₹{price}</p>
      </div>
      <div className="w-full pt-2">
        <DialogComponent
          trigger={<Button className={`bg-blue-500 text-white hover:bg-blue-600 ${isViewed ? "bg-gray-400 cursor-not-allowed" : ""}`} disabled={isViewed}>View</Button>}
          title={name}
          content={
            <div className="w-full px-4 py-4">
              <Label className="text-start">Select Quantity</Label>
              <Input
                type="number"
                className="w-full my-3"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
              />
              <Button
                className={`w-full my-1 ${isAdded ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                onClick={addToCart}
                disabled={isAdded}
              >
                {isAdded ? "Added to Cart" : "Add to Cart"} <ShoppingCart className="mx-1" size={16} />
              </Button>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Card;
