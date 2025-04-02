"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Filter, ChevronDown, ChevronUp, X } from "lucide-react";

// Mock data for products
const allProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    rating: 4.5,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Headphones",
    category: "Electronics",
    brand: "SoundTech",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    rating: 4.2,
    image: "https://placehold.co/600x400/e9ecef/495057?text=SmartWatch",
    discount: 249.99,
    category: "Electronics",
    brand: "TimeWear",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    rating: 4.8,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Backpack",
    category: "Fashion",
    brand: "TravelGear",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 59.99,
    rating: 4.1,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Speaker",
    category: "Electronics",
    brand: "SoundTech",
  },
  {
    id: 5,
    name: "Yoga Mat",
    price: 29.99,
    rating: 4.7,
    image: "https://placehold.co/600x400/e9ecef/495057?text=YogaMat",
    category: "Sports",
    brand: "FitLife",
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 79.99,
    rating: 4.3,
    image: "https://placehold.co/600x400/e9ecef/495057?text=CoffeeMaker",
    category: "Home & Kitchen",
    brand: "HomeStyle",
  },
  {
    id: 7,
    name: "Sneakers",
    price: 69.99,
    rating: 4.4,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Sneakers",
    discount: 89.99,
    category: "Fashion",
    brand: "StepWell",
  },
  {
    id: 8,
    name: "Smart LED Bulb",
    price: 19.99,
    rating: 4.0,
    image: "https://placehold.co/600x400/e9ecef/495057?text=LEDBulb",
    category: "Electronics",
    brand: "SmartHome",
  },
  {
    id: 9,
    name: "Water Bottle",
    price: 24.99,
    rating: 4.6,
    image: "https://placehold.co/600x400/e9ecef/495057?text=WaterBottle",
    category: "Sports",
    brand: "HydroLife",
  },
  {
    id: 10,
    name: "Camera Lens",
    price: 299.99,
    rating: 4.9,
    image: "https://placehold.co/600x400/e9ecef/495057?text=CameraLens",
    category: "Electronics",
    brand: "OptiView",
  },
  {
    id: 11,
    name: "Desk Lamp",
    price: 39.99,
    rating: 4.2,
    image: "https://placehold.co/600x400/e9ecef/495057?text=DeskLamp",
    category: "Home & Kitchen",
    brand: "LightPro",
  },
  {
    id: 12,
    name: "Sunglasses",
    price: 89.99,
    rating: 4.3,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Sunglasses",
    discount: 119.99,
    category: "Fashion",
    brand: "VisionStyle",
  },
];

// Extract unique categories and brands for filters
const categories = [...new Set(allProducts.map((p) => p.category))];
const brands = [...new Set(allProducts.map((p) => p.brand))];

export default function ProductsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [products, setProducts] = useState(allProducts);
  const [sortOption, setSortOption] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [expandedFilters, setExpandedFilters] = useState({
    categories: true,
    brands: true,
    price: true,
  });

  // Toggle filter on mobile
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Toggle filter sections
  const toggleFilterSection = (section) => {
    setExpandedFilters({
      ...expandedFilters,
      [section]: !expandedFilters[section],
    });
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Handle brand selection
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Handle price range change
  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = Number(e.target.value);
    setPriceRange(newPriceRange);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);

    let sortedProducts = [...allProducts];

    switch (e.target.value) {
      case "price-low-to-high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // For demo, we'll just use the id as a proxy for "newest"
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - use default order
        break;
    }

    setProducts(sortedProducts);
  };

  // Apply filters
  const applyFilters = () => {
    let filteredProducts = [...allProducts];

    // Filter by category
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by brand
    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    // Filter by price range
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortOption) {
      case "price-low-to-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - use default order
        break;
    }

    setProducts(filteredProducts);

    // Close mobile filter if open
    if (isFilterOpen) {
      setIsFilterOpen(false);
    }
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 500]);
    setSortOption("featured");
    setProducts(allProducts);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="text-gray-600 mt-2">Showing {products.length} products</p>
      </div>

      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={toggleFilter}
          className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm"
        >
          <Filter size={18} />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Mobile */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="bg-white h-full w-4/5 max-w-sm py-6 px-6 overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={toggleFilter}>
                  <X size={24} />
                </button>
              </div>

              {/* Filter Content */}
              <div className="space-y-6">
                {/* Categories */}
                <div className="border-b pb-4">
                  <button
                    className="flex items-center justify-between w-full py-2 font-medium"
                    onClick={() => toggleFilterSection("categories")}
                  >
                    <span>Categories</span>
                    {expandedFilters.categories ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  {expandedFilters.categories && (
                    <div className="mt-2 space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2">{category}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Brands */}
                <div className="border-b pb-4">
                  <button
                    className="flex items-center justify-between w-full py-2 font-medium"
                    onClick={() => toggleFilterSection("brands")}
                  >
                    <span>Brands</span>
                    {expandedFilters.brands ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  {expandedFilters.brands && (
                    <div className="mt-2 space-y-2">
                      {brands.map((brand) => (
                        <label key={brand} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="ml-2">{brand}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Range */}
                <div className="border-b pb-4">
                  <button
                    className="flex items-center justify-between w-full py-2 font-medium"
                    onClick={() => toggleFilterSection("price")}
                  >
                    <span>Price Range</span>
                    {expandedFilters.price ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  {expandedFilters.price && (
                    <div className="mt-4">
                      <div className="flex justify-between mb-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                      <div className="flex gap-4">
                        <input
                          type="range"
                          min="0"
                          max="500"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceChange(e, 0)}
                          className="w-full"
                        />
                        <input
                          type="range"
                          min="0"
                          max="500"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceChange(e, 1)}
                          className="w-full"
                        />
                      </div>
                      <div className="flex mt-4 gap-4">
                        <input
                          type="number"
                          min="0"
                          max={priceRange[1]}
                          value={priceRange[0]}
                          onChange={(e) => handlePriceChange(e, 0)}
                          className="w-full border border-gray-300 rounded px-2 py-1"
                        />
                        <span className="self-center">to</span>
                        <input
                          type="number"
                          min={priceRange[0]}
                          max="500"
                          value={priceRange[1]}
                          onChange={(e) => handlePriceChange(e, 1)}
                          className="w-full border border-gray-300 rounded px-2 py-1"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-4">
                <button
                  onClick={applyFilters}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
                >
                  Apply Filters
                </button>
                <button
                  onClick={resetFilters}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition duration-300"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filters - Desktop */}
        <div className="hidden md:block w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">Filters</h2>

            <div className="space-y-6">
              {/* Categories */}
              <div className="border-b pb-4">
                <button
                  className="flex items-center justify-between w-full py-2 font-medium"
                  onClick={() => toggleFilterSection("categories")}
                >
                  <span>Categories</span>
                  {expandedFilters.categories ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {expandedFilters.categories && (
                  <div className="mt-2 space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">{category}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Brands */}
              <div className="border-b pb-4">
                <button
                  className="flex items-center justify-between w-full py-2 font-medium"
                  onClick={() => toggleFilterSection("brands")}
                >
                  <span>Brands</span>
                  {expandedFilters.brands ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {expandedFilters.brands && (
                  <div className="mt-2 space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => handleBrandChange(brand)}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2">{brand}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range */}
              <div className="border-b pb-4">
                <button
                  className="flex items-center justify-between w-full py-2 font-medium"
                  onClick={() => toggleFilterSection("price")}
                >
                  <span>Price Range</span>
                  {expandedFilters.price ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {expandedFilters.price && (
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full"
                      />
                      <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full"
                      />
                    </div>
                    <div className="flex mt-4 gap-4">
                      <input
                        type="number"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                      <span className="self-center">to</span>
                      <input
                        type="number"
                        min={priceRange[0]}
                        max="500"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              <button
                onClick={applyFilters}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
              >
                Apply Filters
              </button>
              <button
                onClick={resetFilters}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="w-full md:w-3/4">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{products.length} products found</p>
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative h-64">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                        SALE
                      </div>
                    )}
                  </div>
                </Link>

                <div className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-medium text-lg mb-2 hover:text-blue-600">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-end mb-3">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.discount && (
                      <span className="text-gray-500 line-through ml-2 text-sm">
                        ${product.discount}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-current"
                              : "text-gray-300"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      {product.rating}
                    </span>
                  </div>

                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">
                No products found matching your criteria.
              </p>
              <button
                onClick={resetFilters}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
