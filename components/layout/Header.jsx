// components/layout/Header.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Books",
    "Toys",
    "Sports",
    "Automotive",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">Free shipping on orders over $50</p>
          <div className="flex gap-4 text-sm">
            <Link href="/help" className="hover:underline">
              Help
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-slate-900">
            ShopEase
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 mx-10">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Navigation icons */}
          <div className="flex items-center gap-6">
            <Link
              href="/account"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <User size={20} />
              <span className="hidden md:inline">Account</span>
            </Link>

            <Link
              href="/wishlist"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Heart size={20} />
              <span className="hidden md:inline">Wishlist</span>
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-1 hover:text-blue-600 relative"
            >
              <ShoppingCart size={20} />
              <span className="hidden md:inline">Cart</span>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <nav className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8 py-3 overflow-x-auto">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
