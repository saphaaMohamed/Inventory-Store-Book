// src/components/Shop.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

const products = [
  {
    id: 1,
    name: 'jones',
    price: '$20.00',
    imageSrc: '/src/assets/product/acc.jpg',
    imageAlt: 'Product 1',
  },
  {
    id: 2,
    name: 'Ace',
    price: '$30.00',
    imageSrc: '/src/assets/product/co.jpg',
    imageAlt: 'Product 2',
  },
  {
    id: 3,
    name: 'Sanji',
    price: '$30.00',
    imageSrc: '/src/assets/product/for.png',
    imageAlt: 'Product 2',
  },
  {
    id: 4,
    name: 'Gohan',
    price: '$30.00',
    imageSrc: '/src/assets/product/bloom-front-angled.jpg',
    imageAlt: 'Product 2',
  },
  {
    id: 5,
    name: 'Vagetta',
    price: '$30.00',
    imageSrc: '/src/assets/product/en.jpg',
    imageAlt: 'Product 2',
  },
  {
    id: 6,
    name: 'Nami',
    price: '$30.00',
    imageSrc: '/src/assets/product/en.png',
    imageAlt: 'Product 2',
  },
  {
    id: 7,
    name: 'Zoro',
    price: '$30.00',
    imageSrc: '/src/assets/product/fore.png',
    imageAlt: 'Product 2',
  },
  {
    id: 8,
    name: 'luffy',
    price: '$30.00',
    imageSrc: '/src/assets/product/man.png',
    imageAlt: 'Product 2',
  },
  {
    id: 9,
    name: 'goku',
    price: '$30.00',
    imageSrc: '/src/assets/product/hol.jpg',
    imageAlt: 'Product 2',
  },
  {
    id: 10,
    name: 'wies',
    price: '$30.00',
    imageSrc: '/src/assets/product/why.jpg',
    imageAlt: 'Product 2',
  },
  
];

const Shop = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">All Books Are Here</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full h-49 object-cover rounded-t-lg"
            />
            <div className="mt-4 flex justify-between">
                <div>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
                </div>
              <button className="mt-2  bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
