import { useState } from "react";
import CartSidebar from "./components/CartSidebar";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Provider store={store}>
      <Header onToggleCard={toggleCart} />
      <ProductGrid />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </Provider>
  );
}

export default App;
