import { Minus, Plus, Trash } from "lucide-react";

function CartItem() {
  return (
    <div className="flex items-center space-x-4 bg-gray-50 rounded-xl">
      <img />

      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 truncate">Item Name</h4>

        <p className="">Item Price</p>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
          <Minus className="w-4 h-4" />
        </button>

        <span className="w-8 text-center font-medium">Qty</span>

        <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="font-bold text-gray-50">Total Price</span>

        <button className="p-1 text-red-500 rounded-full hover:bg-red-50 transition-colors duration-200 cursor-pointer">
          <Trash className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
