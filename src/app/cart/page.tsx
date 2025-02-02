
// 'use client'
// import { useState } from 'react';

// export default function Cart() {
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Product 1', price: 20, quantity: 1, image: 'https://via.placeholder.com/150' },
//     { id: 2, name: 'Product 2', price: 35, quantity: 2, image: 'https://via.placeholder.com/150' },
//     { id: 3, name: 'Product 3', price: 50, quantity: 1, image: 'https://via.placeholder.com/150' },
//   ]);

//   const handleQuantityChange = (id: number, operation: string) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? { ...item, quantity: operation === 'increase' ? item.quantity + 1 : item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen p-10">
//       <div className="container mx-auto bg-white p-5 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-semibold text-center mb-6">Shopping Cart</h1>

//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty</p>
//         ) : (
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
//                 <div className="flex items-center">
//                   <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
//                   <div>
//                     <h2 className="font-semibold">{item.name}</h2>
//                     <p className="text-gray-600">${item.price}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                   <button
//                     className="px-4 py-2 bg-red-500 text-white rounded-lg"
//                     onClick={() => handleQuantityChange(item.id, 'decrease')}
//                     disabled={item.quantity === 1}
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button
//                     className="px-4 py-2 bg-green-500 text-white rounded-lg"
//                     onClick={() => handleQuantityChange(item.id, 'increase')}
//                   >
//                     +
//                   </button>
//                 </div>

//                 <div className="text-xl font-semibold">${item.price * item.quantity}</div>
//               </div>
//             ))}

//             <div className="flex justify-between items-center mt-6 text-xl font-semibold">
//               <span>Total:</span>
//               <span>${calculateTotal()}</span>
//             </div>

//             <div className="flex justify-end mt-6 space-x-4">
//               <button className="px-6 py-2 bg-gray-300 rounded-lg">Continue Shopping</button>
//               <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Proceed to Checkout</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

'use client'
import Image from "next/image";
import { useCartStore } from "../../../cartstore";

export default function CartPage() {
  const { cart, removeFromCart } = useCartStore();

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  } else

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center space-x-4 border p-4 rounded-lg">
            <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="rounded-md" />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price} x {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-auto bg-red-500 text-white px-4 py-1 rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
