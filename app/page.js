import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    rating: 4.5,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    rating: 4.2,
    image: "https://placehold.co/600x400/e9ecef/495057?text=SmartWatch",
    discount: 249.99,
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    rating: 4.8,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Backpack",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 59.99,
    rating: 4.1,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Speaker",
  },
];

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://placehold.co/600x400/e9ecef/495057?text=Electronics",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://placehold.co/600x400/e9ecef/495057?text=Fashion",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    image: "https://placehold.co/600x400/e9ecef/495057?text=Home",
  },
  {
    id: 4,
    name: "Beauty",
    image: "https://placehold.co/600x400/e9ecef/495057?text=Beauty",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Shop the Latest Trends
            </h1>
            <p className="text-xl mb-8">
              Discover amazing products at unbeatable prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
              >
                Shop Now
              </Link>
              <Link
                href="/deals"
                className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition duration-300"
              >
                View Deals
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-3 rounded-lg shadow-lg">
              <Image
                src="https://placehold.co/800x600/e9ecef/495057?text=Featured+Product"
                alt="Featured Product"
                width={800}
                height={600}
                className="rounded"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-bold shadow-lg">
              30% OFF
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-lg">{category.name}</h3>
                    <p className="text-blue-600 mt-2 flex items-center justify-center group-hover:underline">
                      Shop Now
                      <ArrowRight size={16} className="ml-1 inline" />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link
              href="/products"
              className="text-blue-600 hover:underline flex items-center"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
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
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
              <p className="text-xl mb-6">
                Get 15% off your first order when you sign up for our
                newsletter.
              </p>
              <form className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 w-full rounded-l-lg focus:outline-none text-black"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-medium transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="md:w-1/3">
              <div className="bg-blue-800 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">15% OFF</h3>
                <p className="mb-4">On your first order</p>
                <p className="text-sm">Use code: WELCOME15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((brand) => (
              <div
                key={brand}
                className="bg-white p-6 flex items-center justify-center rounded-lg shadow-sm"
              >
                <Image
                  src={`https://placehold.co/200x80/e9ecef/495057?text=Brand+${brand}`}
                  alt={`Brand ${brand}`}
                  width={200}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
