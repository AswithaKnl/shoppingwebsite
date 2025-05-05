import React, { useState, useEffect } from 'react';
import heart from '../assets/heart.png'; // Empty heart image
import heartfill from '../assets/heart 2.png'; // Filled heart image

const fetchProducts = async () => {
  try {
    const response = await fetch('/Products.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

function Main() {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [gridColumns, setGridColumns] = useState(3); // Default grid to 3 columns
  const [isFilterVisible, setIsFilterVisible] = useState(true); // Toggle for filter visibility

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    loadProducts();
  }, []);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev); // Toggle visibility of filter
    setGridColumns(isFilterVisible ? 4 : 3); // Change grid layout based on filter visibility
  };

  return (
    <div className="px-4 py-6 w-full">
      <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-${gridColumns} lg:grid-cols-${gridColumns} gap-6`}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="mb-3 w-full lg:h-[400px] object-cover"

              />
              {/* Title aligned to start */}
              <h3 className="text-[12px] sm:text-base md:text-lg lg:text-xl font-bold text-[#252020] mb-1 uppercase text-left">{product.title}</h3>

              {/* Description and Heart Icon side by side with left alignment */}
              <div className="flex items-center justify-between text-left text-xs sm:text-[5px] md:text-base text-[#888792]">
                <p className="mr-2">{product.description}</p>

                <div
                  className="cursor-pointer"
                  onClick={() => toggleLike(product.id)}
                >
                  <img
                    src={likedItems.includes(product.id) ? heartfill : heart}
                    alt="Heart Icon"
                    className="w-4 h-4 sm:w-6 sm:h-6 bottom-3"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default Main;
