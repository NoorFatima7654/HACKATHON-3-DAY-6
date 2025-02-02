
// "use client"
// import React, { useEffect, useState } from "react";
// import  { createClient } from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// const sanity = createClient({
//   projectId: "84pr3ven",
//   dataset: "production",
//   apiVersion: "2023-01-01",
//   useCdn: true,
// });

// interface Product {
//   imageUrl: string;
//   discountPercentage: number;
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
// image: {
//   asset: any;
//   slug: {
//     url:string
//   }
// }
//   slug: {
//     _type:"slug"
//     current: string;
//   }
//   productImage: {
//     asset: {
//     url: string;
//     };
//   };
//   tags: string[];
// }




// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
    

// const query = `
// *[_type == "products"] {
//                 _id,
//                 title,
//                 description,
//                 discountPercentage,
//                  price,
//                   slug,
//                 "imageUrl": productImage.asset->url,
//                 tags
//             }`

      
//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching Products", error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} has been added to your cart!`);
//   };

//   const truncateDescription = (description: string) => {
//     return description.length > 100 ? description.substring(0, 100) + "..." : description;
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-center text-slate-800 mt-4 mb-4">
//         Products from API's Data
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
//           >
//             <Link href={`/products/${product?.slug?.current}`}>
//             <Image
//               src={product.image?.asset?.url || "/placeholder.png"}
//               alt={product.title || "Default Alt Text"}
//               width={300}
//               height={300}
//               className="w-auto h-auto object-cover rounded-md"
//             />
//             </Link>
//             <div className="mt-4">
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="text-slate-800 mt-2 text-sm">
//                 {truncateDescription(product.description)}
//               </p>
//               <div className="flex justify-between items-center mt-4">
//                 <div>
//                   <p className="text-slate-600 font-bold">{product.price}</p>
//                   {product.discountPercentage > 0 && (
//                     <p className="text-sm text-green-600">
//                       {product.discountPercentage}% OFF
//                     </p>
//                   )}
             
//                 </div>
//                  </div>
//               <div className="mt-2 flex flex-wrap gap-2">
//                 {product.tags && Array.isArray(product.tags) && product.tags.length > 0 ? (
//                   product.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="text-sm bg-slate-400 text-black rounded-full px-2 py-1"
//                     >
//                       {tag}
//                     </span>
//                   ))
//                 ) : (
//                   <span>No Tags Available</span>
//                 )}
//               </div>
//               <button
//                 className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//                 onClick={() => addToCart(product)}
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cart summary */}
//       <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
//         {cart.length > 0 ? (
//           <ul className="space-y-4">
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
//               >
//                 <div>
//                   <p className="font-medium text-slate-900">{item.title}</p>
//                   <p className="text-sm text-blue-600">
//                     ${item.price?.toFixed(2)}
//                   </p>
//                 </div>
//                 <Image
//                   src={item.imageUrl || "/placeholder.png"}
//                   alt={item.title || "Default Alt Text"}
//                   width={50}
//                   height={50}
//                   className="rounded-md"
//                 />
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-black text-center">Your Cart is Empty. Please Add Products.</p>
//         )}

//       </div>
//     </div>
//   );
// };

// export default ProductCards;
// "use client"
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import Image from "next/image";
// import Link from "next/link";

// const sanity = createClient({
//   projectId: "84pr3ven",
//   dataset: "production",
//   apiVersion: "2023-01-01",
//   useCdn: true,
// });

// interface Product {
//   image: any;
//   _id: string;
//   title: string;
//   description: string;
//   discountPercentage: number;
//   price: number;
//   slug: {
//     _type: "slug";
//     current: string;
//   };
//   tags: string[];
//   imageUrl: string;
// }

// const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const query = `
//   *[_type == "products"] {
//   _id,
//   name,
//   "slug": slug.current,
//   price,
//   description,
//   "imageUrl": image.asset->url,
//   category,
//   discountPercent,
//   new,
//   colors,
//   sizes
// }

// `;

//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching Products", error);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.title} has been added to your cart!`);
//   };

//   const truncateDescription = (description: string) => {
//     return description.length > 100 ? description.substring(0, 100) + "..." : description;
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//  return (
//   <div className="p-4">
//   <h2 className="text-center text-slate-800 mt-4 mb-4">
//     Products from API's Data
//   </h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//     {products.map((product) => (
//       <div
//         key={product._id}
//         className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
//       >
//          <Link href={/product/${product.slug.current}}>
//         <Image
//          // src={product.image.asset.url || "/placeholder.png"}
//          src={product.imageUrl || "/placeholder.png"}
//           alt={product.title || "Default Alt Text"}
//           width={300}
//           height={300}
//           className="w-auto h-auto object-cover rounded-md"
//         />
//         </Link>
//         <div className="mt-4">
//           <h2 className="text-lg font-semibold">{product.title}</h2>
//           <p className="text-slate-800 mt-2 text-sm">
//             {truncateDescription(product.description)}
//           </p>
//           <div className="flex justify-between items-center mt-4">
//             <div>
//               <p className="text-slate-600 font-bold">{product.price}</p>
//               {product.discountPercentage > 0 && (
//                 <p className="text-sm text-green-600">
//                   {product.discountPercentage}% OFF
//                 </p>
//               )}
         
//             </div>
//              </div>
//           <div className="mt-2 flex flex-wrap gap-2">
//             {product.tags && Array.isArray(product.tags) && product.tags.length > 0 ? (
//               product.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="text-sm bg-slate-400 text-black rounded-full px-2 py-1"
//                 >
//                   {tag}
//                 </span>
//               ))
//             ) : (
//               <span>No Tags Available</span>
//             )}
//           </div>
//           <button
//             className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//             onClick={() => addToCart(product)}
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Cart summary */}
//   <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
//     <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
//     {cart.length > 0 ? (
//       <ul className="space-y-4">
//         {cart.map((item, index) => (
//           <li
//             key={index}
//             className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
//           >
//             <div>
//               <p className="font-medium text-slate-900">{item.title}</p>
//               <p className="text-sm text-blue-600">
//                 ${item.price?.toFixed(2)}
//               </p>
//             </div>
//             <Image
//               src={item.imageUrl || "/placeholder.png"}
//               alt={item.title || "Default Alt Text"}
//               width={50}
//               height={50}
//               className="rounded-md"
//             />
//           </li>
//         ))}
//       </ul>
//     ) : (
//       <p className="text-black text-center">Your Cart is Empty. Please Add Products.</p>
//     )}

//   </div>
// </div>
// );
// };

// export default ProductCards;

"use client"
 import React, { Key, useEffect, useState } from "react";
  import { createClient } from "@sanity/client"; 
  import Image from "next/image"; 
  import Link from "next/link";
import product from "@/sanity/schemaTypes/product";

const sanity = createClient({ projectId: "84pr3ven",
   dataset: "production"
   , apiVersion: "2023-01-01", 
   useCdn: true, });

// export interface Product {
//   _id: Key | null | undefined; 
//    name: string; 
//    description: string; 
//    discountPercentage: number;
//     price: number;
//      slug:
//       { _type: "slug"; 
//       current: string; }; 
//      tags: string[];
//       image?: {
//         asset:{
//           _ref: string;
//           _type: "image"
//         }
//       } }

export interface Product {
  tags: any;
  imageUrl: string;
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  category: string;
  discountPercent: number;
  new?: boolean;
  colors?: string[];
  sizes?: string[];
}


const ProductCards: React.FC = () => 
  { const [products, setProducts] = useState<Product[]>([]); const [cart, setCart] = useState<Product[]>([]);

const fetchProducts = async () => 
  { try { const query = ` *[_type == "products"] 
    { _id,
      name,
       "slug": slug.current, 
       price, 
       description,
        "imageUrl": image.asset->url,
         category,
          discountPercent, 
          new,
           colors, 
           sizes }

`;

const data = await sanity.fetch(query);
  setProducts(data);
} catch (error) {
  console.error("Error fetching Products", error);
}

};

const addToCart = (product: Product) => {
   setCart((prevCart) => [...prevCart, product]); alert(`${product.name} has been added to your cart!`); };

const truncateDescription = (description: string) => { 
  return description.length > 100 ? description.substring(0, 100) + "..." : description; };

useEffect(() => { fetchProducts(); }, []);

return (

  <div className="p-4">
  <h2 className="text-center text-slate-800 mt-4 mb-4">
    Products from API's Data
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <div
        key={product._id}
        className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
      >
        <Link href={`/product/${product?.slug?.current}`}>
        <Image
         // src={product.image.asset.url || "/placeholder.png"}
         src={product.imageUrl || "/placeholder.png"}
          alt={product.name || "Default Alt Text"}
          width={300}
          height={300}
          className="w-auto h-auto object-cover rounded-md"
        />
        </Link>
        
        <div className="mt-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-slate-800 mt-2 text-sm">
            {truncateDescription(product.description)}
          </p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-slate-600 font-bold">{product.price}</p>
              {product.discountPercent > 0 && (
                <p className="text-sm text-green-600">
                  {product.discountPercent}% OFF
                </p>
              )}</div>
         </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {product.tags && Array.isArray(product.tags) && product.tags.length > 0 ? (
          product.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-slate-400 text-black rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))
        ) : (
          <span>No Tags Available</span>
        )}
      </div>
      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  </div>
))}

  </div>{/* Cart summary */}

  <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
    {cart.length > 0 ? (
      <ul className="space-y-4">
        {cart.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
          >
            <div>
              <p className="font-medium text-slate-900">{item.name}</p>
              <p className="text-sm text-blue-600">
                ${item.price?.toFixed(2)}
              </p>
            </div>
            <Image
              src={item.imageUrl || "/placeholder.png"}
              alt={item.name || "Default Alt Text"}
              width={50}
              height={50}
              className="rounded-md"
            />
          </li>
        
        ))}
      </ul>
    ) : (
      <p className="text-black text-center">Your Cart is Empty. Please Add Products.</p>
    )}  </div>
</div>
);
};export default ProductCards;
 