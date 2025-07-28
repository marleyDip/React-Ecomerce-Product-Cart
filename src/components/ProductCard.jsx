import { Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    //console.log("product added to cart:", product);
  };

  const readerStart = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* image & product category */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="absolute top-0 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>
      {/* image & product category */}

      {/* info */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex items-center">{readerStart(product.rating)}</div>

          <span className="font-medium ml-1">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 ">
            $ {product.price}
          </span>

          <button
            className="group/btn flex items-center space-x-2 cursor-pointer bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={handleAddToCart}
          >
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
      {/* info */}
    </div>
  );
}

export default ProductCard;
