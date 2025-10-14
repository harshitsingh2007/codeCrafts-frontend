import React, { useEffect, useMemo } from "react";
import useCartStore from "../../../store/Cart/Cart";

export default function Cart() {
  const { getCartItems, cartItems, removeitems, checkoutCart } = useCartStore();

  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  const totalPrice = useMemo(() => {
    if (!cartItems || cartItems.length === 0) return 0;
    return cartItems.reduce(
      (total, cart) =>
        total + cart.productId.reduce((sum, p) => sum + (p.Price || 0), 0),
      0
    );
  }, [cartItems]);

  const handleRemoveItem = async (id) => {
    const res = await removeitems(id);
    if (res.success) {
      alert("Item removed successfully");
      getCartItems();
    } else {
      alert(res.message);
    }
  };

 const handleCheckout = async () => {
  const res = await checkoutCart();
  if (res.success) {
    alert(`Checkout successful! Total: $${res.totalAmount}`);
  } else {
    alert(res.message);
  }
};


  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold mb-4 text-white">Your Cart</h1>
          <p className="text-gray-400 text-lg">No items in your cart</p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 mt-14">
          <h1 className="text-4xl font-bold text-white mb-2">
            🛍️ Your Shopping Cart
          </h1>
          <p className="text-gray-400">Review your items before checkout</p>
        </div>

        {/* Cart Items */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 mb-6">
          {cartItems.map((cart) => (
            <div key={cart._id} className="mb-6 last:mb-0">
              {cart.productId.map((product) => (
                <div
                  key={product._id}
                  className="flex flex-col lg:flex-row items-center gap-6 p-6 bg-gray-750 rounded-xl hover:bg-gray-700 transition-all duration-300 mb-4 border border-gray-600 group"
                >
                  <img
                    src={product.image || "/api/placeholder/300/300"}
                    alt={product.title}
                    className="w-28 h-28 lg:w-32 lg:h-32 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-xl font-semibold text-white mb-3">
                      {product.title}
                    </h2>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-2xl font-bold text-blue-400">
                        ${product.Price}
                      </p>
                      <button
                        className="text-gray-400 hover:text-red-400 transition-colors duration-200 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
                        onClick={() => handleRemoveItem(product._id)}
                      >
                        🗑️ Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Summary + Checkout */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-white text-xl font-bold">
              Total: ${(totalPrice * 1.08).toFixed(2)}
            </div>
            <button
              onClick={handleCheckout}
              className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
