import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

function Header({ onToggleCard }) {
  /* if use { } => then must use return
  const selectTotalItems = (state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0); */

  const selectTotalItems = (state) => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
  };

  const totalItems = useSelector(selectTotalItems);

  return (
    <div className="bg-white/80 backdrop-blur-md shadow-lg sticky border-b border-gray-200/50 top-0 z-40 py-2">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-1">
            <img
              src="/public/me1.png"
              alt="logo"
              className="md:h-16 h-10 cursor-pointer"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Search Product"
              className="bg-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 lg:w-2xl w-40 sm:w-xs md:w-110"
            />
          </div>

          <button
            className="relative p-2 bg-gray-300 text-gray-700 rounded-full hover:shadow-lg hover:scale-105 transform transition-all duration-300 cursor-pointer"
            onClick={onToggleCard}
          >
            <ShoppingCart className="w-6 h-6" />

            {totalItems > 0 && (
              <span className="absolute -top-4 right-2 bg-violet-500 text-white text-xs font-semibold rounded-full w-6 h-6 grid place-items-center ">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
