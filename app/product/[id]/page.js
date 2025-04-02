"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ShoppingCart,
  Heart,
  TruckIcon,
  ArrowLeft,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

// Mock product data - in a real app, this would come from an API
const product = {
  id: 1,
  name: "Wireless Noise Cancelling Headphones",
  price: 199.99,
  originalPrice: 249.99,
  rating: 4.7,
  reviewCount: 128,
  stock: 15,
  description:
    "Experience premium sound quality with these wireless noise cancelling headphones. Perfect for travel, work, or relaxation, these headphones provide up to 30 hours of battery life and feature comfortable ear cushions for extended wear.",
  features: [
    "Active Noise Cancellation technology",
    "30 hours of battery life",
    "Premium sound quality with deep bass",
    "Comfortable over-ear design",
    "Built-in microphone for calls",
    "Bluetooth 5.0 connectivity",
  ],
  images: [
    "https://placehold.co/600x400/e9ecef/495057?text=Headphones+Main",
    "https://placehold.co/600x400/e9ecef/495057?text=Headphones+Side",
    "https://placehold.co/600x400/e9ecef/495057?text=Headphones+Folded",
    "https://placehold.co/600x400/e9ecef/495057?text=Headphones+Detail",
  ],
  colors: ["Black", "Silver", "Blue"],
  brand: "SoundTech",
  category: "Electronics",
  specifications: {
    Weight: "250g",
    Dimensions: "7.5 x 6.3 x 3.2 inches",
    Connectivity: "Bluetooth 5.0, 3.5mm audio jack",
    Battery: "Lithium-ion, 30 hours",
    Charging: "USB-C, 3 hours for full charge",
    Warranty: "1-year manufacturer warranty",
  },
  relatedProducts: [
    {
      id: 2,
      name: "Wireless Earbuds",
      price: 89.99,
      rating: 4.5,
      image: "https://placehold.co/600x400/e9ecef/495057?text=Earbuds",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      rating: 4.3,
      image: "https://placehold.co/600x400/e9ecef/495057?text=Speaker",
    },
    {
      id: 4,
      name: "Audio Adapter",
      price: 29.99,
      rating: 4.1,
      image: "https://placehold.co/600x400/e9ecef/495057?text=Adapter",
    },
    {
      id: 5,
      name: "Headphone Case",
      price: 19.99,
      rating: 4.6,
      image: "https://placehold.co/600x400/e9ecef/495057?text=Case",
    },
  ],
};

export default function ProductDetailPage({ params }) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeTab, setActiveTab] = useState("description");

  // In a real app, you would fetch the product using the ID from params
  // const { id } = params;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <ol className="flex text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link
              href={`/category/${product.category.toLowerCase()}`}
              className="hover:text-blue-600"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <div className="relative h-96">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                  mainImage === image ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setMainImage(image)}
              >
                <div className="relative h-24">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Link
                href={`/brand/${product.brand.toLowerCase()}`}
                className="text-blue-600 text-sm hover:underline"
              >
                {product.brand}
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-end mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through ml-3 text-xl">
                  ${product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="ml-3 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              )}
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div
                  className={`h-4 w-4 rounded-full ${
                    product.stock > 0 ? "bg-green-500" : "bg-red-500"
                  } mr-2`}
                ></div>
                <span>
                  {product.stock > 0
                    ? `In Stock (${product.stock} available)`
                    : "Out of Stock"}
                </span>
              </div>

              <div className="flex items-center text-green-600">
                <TruckIcon size={18} className="mr-2" />
                <span>Free shipping on orders over $50</span>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedColor === color
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300 hover:border-blue-500"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex w-32">
                <button
                  className="bg-gray-200 px-3 py-2 rounded-l-lg"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-full text-center border-y border-gray-200"
                  min="1"
                  max={product.stock}
                />
                <button
                  className="bg-gray-200 px-3 py-2 rounded-r-lg"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center">
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
              <button className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium flex items-center justify-center">
                <Heart size={20} className="mr-2" />
                Add to Wishlist
              </button>
            </div>

            {/* Product Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center">
                <TruckIcon size={20} className="text-blue-600 mr-2" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center">
                <ShieldCheck size={20} className="text-blue-600 mr-2" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center">
                <RotateCcw size={20} className="text-blue-600 mr-2" />
                <span className="text-sm">30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="border-t pt-8">
            <div className="flex border-b">
              <button
                className={`py-3 px-4 font-medium border-b-2 ${
                  activeTab === "description"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-3 px-4 font-medium border-b-2 ${
                  activeTab === "specifications"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                Specifications
              </button>
              <button
                className={`py-3 px-4 font-medium border-b-2 ${
                  activeTab === "reviews"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent hover:text-blue-600"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>

            <div className="py-6">
              {activeTab === "description" && (
                <div>
                  <p className="mb-4">{product.description}</p>
                  <h3 className="font-medium text-lg mb-3">Key Features</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  <h3 className="font-medium text-lg mb-3">
                    Technical Specifications
                  </h3>
                  <div className="border rounded-lg overflow-hidden">
                    {Object.entries(product.specifications).map(
                      ([key, value], index) => (
                        <div
                          key={key}
                          className={`flex ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <div className="w-1/3 px-4 py-3 font-medium">
                            {key}
                          </div>
                          <div className="w-2/3 px-4 py-3">{value}</div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-medium text-lg">Customer Reviews</h3>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                      Write a Review
                    </button>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-lg">Review Summary</h4>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">
                          {product.rating} out of 5
                        </span>
                      </div>
                    </div>

                    <p className="mb-4">
                      Based on {product.reviewCount} reviews
                    </p>

                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => {
                        // Calculate percentage - this is just for demo
                        const percentage =
                          star === 5
                            ? 70
                            : star === 4
                            ? 20
                            : star === 3
                            ? 5
                            : star === 2
                            ? 3
                            : 2;

                        return (
                          <div key={star} className="flex items-center">
                            <span className="w-10">{star} star</span>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full mx-3">
                              <div
                                className="h-2 bg-yellow-400 rounded-full"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="w-10 text-right">
                              {percentage}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* For the demo, I'll add a couple of sample reviews */}
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Amazing sound quality</h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < 5
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        By John D. on March 15, 2025
                      </p>
                      <p>
                        These headphones are incredible! The noise cancellation
                        is top-notch, and the sound quality is crisp and clear.
                        Battery life is excellent as well, lasting through my
                        entire international flight.
                      </p>
                    </div>

                    <div className="border-b pb-6">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">
                          Comfortable for long wear
                        </h4>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < 4
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        By Sarah M. on March 10, 2025
                      </p>
                      <p>
                        I've been using these headphones daily for my work calls
                        and music listening. They're extremely comfortable even
                        after hours of wear. The ear cushions are soft and don't
                        put pressure on my ears. Sound quality is great too!
                      </p>
                    </div>

                    <div>
                      <Link href="#" className="text-blue-600 hover:underline">
                        Read all {product.reviewCount} reviews
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/product/${relatedProduct.id}`}>
                <div className="relative h-64">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="p-4">
                <Link href={`/product/${relatedProduct.id}`}>
                  <h3 className="font-medium text-lg mb-2 hover:text-blue-600">
                    {relatedProduct.name}
                  </h3>
                </Link>

                <div className="flex items-end mb-3">
                  <span className="text-xl font-bold">
                    ${relatedProduct.price}
                  </span>
                </div>

                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(relatedProduct.rating)
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
                    {relatedProduct.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Products */}
      <div className="mt-12">
        <Link
          href="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to All Products
        </Link>
      </div>
    </div>
  );
}
