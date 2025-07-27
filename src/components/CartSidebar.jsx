import { CreditCard, ShoppingBag, X } from "lucide-react";
import React from "react";

function CartSidebar() {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300`}
      />

      {/* sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform  transition-transform duration-300 ease-in-out`}
      >
        {/* header */}
        <div className="flex items-center justify-center p-6 border-b border-gray-200">
          <h2 className="text-xl text-gray-900 font-bold flex items-center space-x-2">
            <ShoppingBag className="w-6            h-6" />
            <span>Shopping Cart</span>
          </h2>

          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />

            <p className="text-gray-500 text-lg mb-2">Your Cart is Empty</p>

            <p className="text-gray-400 text-sm">
              Add Some products to get started
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-900">Total</span>

            <span className="text-2xl font-bold text-gray-900">
              Total Price
            </span>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-gray-600 hover:bg-gray-700  text-white py-3 rounded-lg font-medium grid place-items-center space-x-2 hover:scale-105 transition-all duration-200 cursor-pointer">
              <CreditCard className="w-5" />

              <span>Proceed to Checkout</span>
            </button>

            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-medium grid place-items-center space-x-2 hover:scale-105 transition-all duration-200 cursor-pointer">
              <span>Clear Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
