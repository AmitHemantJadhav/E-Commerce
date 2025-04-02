import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-gray-300 hover:text-white"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/best-sellers"
                  className="text-gray-300 hover:text-white"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-gray-300 hover:text-white">
                  Deals & Promotions
                </Link>
              </li>
              <li>
                <Link
                  href="/clearance"
                  className="text-gray-300 hover:text-white"
                >
                  Clearance
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-300 hover:text-white"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-300 hover:text-white"
                >
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-white"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-gray-300 hover:text-white"
                >
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-black"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-300 hover:text-white text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
