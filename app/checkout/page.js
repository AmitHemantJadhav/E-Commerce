"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CreditCard,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  const subtotal = 349.97;
  const shipping = 0;
  const tax = 28.0;
  const total = subtotal + shipping + tax;

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep(step - 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Checkout Progress */}
      <div className="mb-10">
        <div className="relative flex items-center justify-between">
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0"></div>

          <div
            className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {step > 1 ? <Check size={18} /> : 1}
          </div>

          <div
            className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {step > 2 ? <Check size={18} /> : 2}
          </div>

          <div
            className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {step > 3 ? <Check size={18} /> : 3}
          </div>

          <div
            className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
              step >= 4 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            4
          </div>
        </div>

        <div className="flex justify-between mt-2 px-1">
          <span
            className={
              step >= 1 ? "text-blue-600 font-medium" : "text-gray-600"
            }
          >
            Shipping
          </span>
          <span
            className={
              step >= 2 ? "text-blue-600 font-medium" : "text-gray-600"
            }
          >
            Payment
          </span>
          <span
            className={
              step >= 3 ? "text-blue-600 font-medium" : "text-gray-600"
            }
          >
            Review
          </span>
          <span
            className={
              step >= 4 ? "text-blue-600 font-medium" : "text-gray-600"
            }
          >
            Confirmation
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {/* Step 1: Shipping */}
          {step === 1 && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold mb-2">
                  Shipping Information
                </h2>
                <p className="text-gray-600">Enter your shipping details</p>
              </div>

              <div className="p-6">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block mb-2 font-medium"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="last-name"
                        className="block mb-2 font-medium"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="address" className="block mb-2 font-medium">
                      Street Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="city" className="block mb-2 font-medium">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="state" className="block mb-2 font-medium">
                        State/Province
                      </label>
                      <input
                        id="state"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="zip" className="block mb-2 font-medium">
                        ZIP/Postal Code
                      </label>
                      <input
                        id="zip"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block mb-2 font-medium"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Shipping Method</h3>
                    <div className="space-y-3">
                      <label className="flex p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="shipping-method"
                          value="standard"
                          className="mr-3"
                          defaultChecked
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">
                              Standard Shipping
                            </span>
                            <span className="font-medium text-green-600">
                              FREE
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Delivery in 5-7 business days
                          </p>
                        </div>
                      </label>

                      <label className="flex p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="shipping-method"
                          value="express"
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">
                              Express Shipping
                            </span>
                            <span className="font-medium">$12.99</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Delivery in 2-3 business days
                          </p>
                        </div>
                      </label>

                      <label className="flex p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="shipping-method"
                          value="overnight"
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">
                              Overnight Shipping
                            </span>
                            <span className="font-medium">$24.99</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Delivery the next business day
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </form>

                <div className="flex justify-between mt-8">
                  <Link
                    href="/cart"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ArrowRight size={16} className="mr-2 rotate-180" />
                    Back to Cart
                  </Link>

                  <button
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                  >
                    Continue to Payment
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold mb-2">
                  Payment Information
                </h2>
                <p className="text-gray-600">Enter your payment details</p>
              </div>

              <div className="p-6">
                <form>
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Payment Method</h3>
                    <div className="space-y-3">
                      <label className="flex p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="payment-method"
                          value="credit-card"
                          className="mr-3"
                          defaultChecked
                        />
                        <div className="flex-1">
                          <span className="font-medium">Credit Card</span>
                        </div>
                      </label>

                      <label className="flex p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500">
                        <input
                          type="radio"
                          name="payment-method"
                          value="paypal"
                          className="mr-3"
                        />
                        <div className="flex-1">
                          <span className="font-medium">PayPal</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">
                      Credit Card Information
                    </h3>

                    <div className="mb-6">
                      <label
                        htmlFor="card-number"
                        className="block mb-2 font-medium"
                      >
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          id="card-number"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-10"
                          required
                        />
                        <CreditCard
                          size={18}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="expiry"
                          className="block mb-2 font-medium"
                        >
                          Expiration Date
                        </label>
                        <input
                          id="expiry"
                          type="text"
                          placeholder="MM/YY"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="cvv" className="block mb-2 font-medium">
                          CVV
                        </label>
                        <input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="card-name"
                        className="block mb-2 font-medium"
                      >
                        Name on Card
                      </label>
                      <input
                        id="card-name"
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                      />
                      <span>
                        Billing address is the same as shipping address
                      </span>
                    </label>
                  </div>
                </form>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium flex items-center"
                  >
                    <ArrowRight size={18} className="mr-2 rotate-180" />
                    Back to Shipping
                  </button>

                  <button
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                  >
                    Review Order
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold mb-2">
                  Review Your Order
                </h2>
                <p className="text-gray-600">
                  Please review your order details before placing your order
                </p>
              </div>

              <div className="p-6">
                <div className="mb-8">
                  <h3 className="font-medium text-lg mb-4">Order Summary</h3>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="divide-y">
                      <div className="p-4 flex justify-between">
                        <div>
                          <p className="font-medium">Wireless Headphones</p>
                          <p className="text-gray-600 text-sm">Color: Black</p>
                          <p className="text-gray-600 text-sm">Quantity: 1</p>
                        </div>
                        <p className="font-medium">$89.99</p>
                      </div>

                      <div className="p-4 flex justify-between">
                        <div>
                          <p className="font-medium">Smart Watch</p>
                          <p className="text-gray-600 text-sm">Color: Silver</p>
                          <p className="text-gray-600 text-sm">Quantity: 1</p>
                        </div>
                        <p className="font-medium">$199.99</p>
                      </div>

                      <div className="p-4 flex justify-between">
                        <div>
                          <p className="font-medium">Bluetooth Speaker</p>
                          <p className="text-gray-600 text-sm">Color: Blue</p>
                          <p className="text-gray-600 text-sm">Quantity: 2</p>
                        </div>
                        <p className="font-medium">$59.99 × 2</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-medium text-lg mb-4">
                      Shipping Information
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p>John Doe</p>
                      <p>123 Main Street</p>
                      <p>New York, NY 10001</p>
                      <p>United States</p>
                      <p className="mt-2">(123) 456-7890</p>
                      <p>john.doe@example.com</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg mb-4">
                      Payment Information
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p>Credit Card</p>
                      <p>**** **** **** 1234</p>
                      <p>Expires: 12/25</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-medium text-lg mb-4">Shipping Method</h3>
                  <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-medium">Standard Shipping</p>
                      <p className="text-gray-600 text-sm">
                        Delivery in 5-7 business days
                      </p>
                    </div>
                    <p className="font-medium text-green-600">FREE</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between font-bold pt-2 border-t mt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2 mt-1"
                    />
                    <span className="text-sm">
                      By placing this order, you agree to our{" "}
                      <Link
                        href="/terms"
                        className="text-blue-600 hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-blue-600 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium flex items-center"
                  >
                    <ArrowRight size={18} className="mr-2 rotate-180" />
                    Back to Payment
                  </button>

                  <button
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center"
                  >
                    Place Order
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b bg-green-50">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Check size={24} className="text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-green-800">
                    Order Placed Successfully!
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-4">
                    Thank you for your order, John!
                  </h3>
                  <p className="mb-2">
                    Your order #12345 has been placed successfully.
                  </p>
                  <p className="mb-4">
                    We've sent a confirmation email to john.doe@example.com with
                    all the details.
                  </p>
                  <p>
                    You can track your order status in the{" "}
                    <Link
                      href="/account/orders"
                      className="text-blue-600 hover:underline"
                    >
                      My Orders
                    </Link>{" "}
                    section of your account.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                  <h3 className="font-medium mb-4">Order Summary</h3>

                  <div className="flex justify-between mb-2">
                    <span>Order Number</span>
                    <span className="font-medium">#12345</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Order Date</span>
                    <span>April 2, 2025</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Payment Method</span>
                    <span>Credit Card (**** 1234)</span>
                  </div>

                  <div className="flex justify-between font-bold pt-2 border-t mt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/account/orders"
                    className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                  >
                    Track Your Order
                  </Link>

                  <Link
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        {step < 4 && (
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Order Summary</h2>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Wireless Headphones</span>
                      <span>$89.99</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Smart Watch</span>
                      <span>$199.99</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Bluetooth Speaker (x2)</span>
                      <span>$119.98</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <ShieldCheck size={20} className="text-green-600 mr-3" />
                    <span>Secure Checkout</span>
                  </div>

                  <div className="flex items-center">
                    <Truck size={20} className="text-green-600 mr-3" />
                    <span>Free Shipping on Orders Over $50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
