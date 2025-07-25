import { useState } from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";

function Header() {
  const { cart, deleteFromCart, clearCart } = useCart();
  const [showDropdown, setShowDropdown] = useState(false);

  const itemCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="relative">
      <button 
        className="cursor-pointer bg-white shadow-md p-4 flex justify-between items-center gap-2"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <h1 className="text-2xl font-bold text-blue-600">
          Cart
        </h1>
        <FaShoppingCart 
          className="text-2xl text-blue-600"
        />
        { itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
            {itemCount}
          </span>
        )}
      </button>
      {
        showDropdown && (
          <div
            className="absolute top-full right-0 mt-2 w-100 p-4 bg-white border border-gray-500 rounded-lg shadow-lg z-50"
          >
            <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            ) : (
              <>
                <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center py-2"
                    >
                      <div className="select-none">
                        <p className="font-semibold mb-1">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          {item.qty} X ${item.price}
                        </p>
                      </div>
                      <button
                        className="text-red-500 cursor-pointer"
                        onClick={() => deleteFromCart(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 mb-2 font-semibold flex justify-between">
                  <span>Total:</span>
                  <span>${totalPrice}</span>
                </div>
                <button
                  className="w-full py-2 bg-red-500 cursor-pointer text-white rounded transition hover:bg-red-700"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              </>
            )}
          </div>
        )
      }
    </div>
  )
}

export default Header