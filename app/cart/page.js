"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X, ShoppingBag } from "lucide-react";

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Headphones",
    quantity: 1,
    color: "Black",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "https://placehold.co/600x400/e9ecef/495057?text=SmartWatch",
    quantity: 1,
    color: "Silver",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://placehold.co/600x400/e9ecef/495057?text=Speaker",
    quantity: 2,
    color: "Blue",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculate cart summary
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 10;
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount for demo
  const tax = (subtotal - discount) * 0.08; // 8% tax for demo
  const total = subtotal + shipping + tax - discount;

  // Update item quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Apply promo code
  const applyPromoCode = () => {
    // For demo, any code works
    if (promoCode) {
      setPromoApplied(true);
    }
  };

  // Handle checkout - in a real app, this would navigate to checkout flow
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingBag size={64} className="text-gray-300 mb-4" />
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold mb-2">
                  Items in Your Cart ({cartItems.length})
                </h2>
                <p className="text-gray-600">
                  Review your items and proceed to checkout
                </p>
              </div>

              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                    <div className="sm:w-1/4 mb-4 sm:mb-0">
                      <div className="relative h-40 w-40 mx-auto">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    <div className="sm:w-3/4 sm:pl-6 flex flex-col">
                      <div className="flex justify-between mb-4">
                        <div>
                          <Link
                            href={`/product/${item.id}`}
                            className="text-lg font-medium hover:text-blue-600"
                          >
                            {item.name}
                          </Link>
                          <p className="text-gray-600 mt-1">
                            Color: {item.color}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between mt-auto">
                        <div className="flex items-center mb-4 sm:mb-0">
                          <label
                            htmlFor={`quantity-${item.id}`}
                            className="mr-2"
                          >
                            Qty:
                          </label>
                          <div className="flex w-28">
                            <button
                              className="bg-gray-200 px-3 py-1 rounded-l-md"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <input
                              id={`quantity-${item.id}`}
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="w-full text-center border-y border-gray-200"
                              min="1"
                            />
                            <button
                              className="bg-gray-200 px-3 py-1 rounded-r-md"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-lg font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-gray-600 text-sm">
                            ${item.price.toFixed(2)} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t">
                <Link
                  href="/products"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    <span>${shipping.toFixed(2)}</span>
                  )}
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mt-6">
                  <label
                    htmlFor="promo-code"
                    className="block mb-2 font-medium"
                  >
                    Promo Code
                  </label>
                  <div className="flex">
                    <input
                      id="promo-code"
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter promo code"
                      disabled={promoApplied}
                    />
                    <button
                      onClick={applyPromoCode}
                      disabled={promoApplied || !promoCode}
                      className={`px-4 py-2 rounded-r-lg font-medium ${
                        promoApplied
                          ? "bg-green-600 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      {promoApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-green-600 text-sm mt-1">
                      Promo code applied successfully!
                    </p>
                  )}
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mt-6 flex items-center justify-center"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} className="ml-2" />
                </button>

                {/* Security Notice */}
                <div className="mt-4 text-center text-gray-600 text-sm">
                  <p className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Secure Checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
