// Shop.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/Slices/Products";
import Card from "./Card";
import Skeleton from 'react-loading-skeleton'; // Ensure this is correctly installed
import { ShoppingCart } from "lucide-react"; // Import the shopping cart icon
import { Link } from 'react-router-dom'; // Import Link for navigation

const categories = {
  'Tropical': [0, 1, 2, 3, 4, 5],
  'Succulents': [6, 7, 8, 9, 10, 11],
  'Ferns': [12, 13, 14, 15, 16, 17]
};

const categoryNames = Object.keys(categories);

const generateRandomPrice = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tropical');

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://perenual.com/api/species-list?key=sk-q37166ceadd8a9c3f6645"
        );
        const productsWithCategoryAndPrice = response.data.data.map((product, index) => {
          let category = '';
          let price = 0;
          if (categories['Tropical'].includes(index)) {
            category = 'Tropical';
            price = generateRandomPrice(4000, 6000);
          } else if (categories['Succulents'].includes(index)) {
            category = 'Succulents';
            price = generateRandomPrice(2500, 4000);
          } else if (categories['Ferns'].includes(index)) {
            category = 'Ferns';
            price = generateRandomPrice(3000, 5000);
          }
          return { ...product, category, price };
        });
        dispatch(setProducts(productsWithCategoryAndPrice));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [dispatch]);

  const filteredProducts = products
    ? products.filter(product => product.category === selectedCategory).slice(0, 6)
    : [];

  return (
    <div className="w-screen min-h-screen bg-gray-100 flex flex-col items-center pt-20">
      <div className="flex items-center mb-12 px-4">
        <h1 className="text-6xl font-bold text-green-700 mb-4 flex-1">Explore Our Collection</h1>
        <Link to="/cart">
          <ShoppingCart
            className="text-green-700 cursor-pointer hover:text-green-900"
            size={48} // Adjust size as needed
          />
        </Link>
      </div>

      {/* Category Selection */}
      <div className="mb-12 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Filter by Category</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {categoryNames.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-2xl rounded-lg ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 transition-all duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Skeleton count={6} height={400} width={280} className="m-4" />
        </div>
      ) : (
        <div className="w-full px-8 pb-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Card
                  img={product.default_image?.medium_url}
                  name={product.common_name || "No Name Available"}
                  price={product.price}
                  key={index}
                  id={index}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-xl">No products found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
