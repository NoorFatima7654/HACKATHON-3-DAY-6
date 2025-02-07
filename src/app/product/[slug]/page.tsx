// import { groq } from "next-sanity";


// import Image from "next/image";

// import client from "../../../../sanity.cli";
// import { useCartStore } from "../../../../cartstore";

// export async function fetchProductBySlug(slug: string){
//   const query = groq`*[_type == "products" && slug.current == $slug][0] {
//     _id, name, "slug": slug.current, price, description, 
//     "imageUrl": image.asset->url, category, discountPercent, new, colors, sizes 
//   }`;

//   return await client.fetch(query, { slug });
// }


// export default async function ProductPage({ params }: { params: { slug?: string } }) {
//   if (!params?.slug) {
//     return <p>Invalid product slug</p>;
//   }

//   const product = await fetchProductBySlug(params.slug);

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const { addToCart } = useCartStore(); // Zustand Store

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Product Image */}
//         <div className="aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.jpg"}
//             alt={product.name}
//             width={500}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-2xl font-bold">{product.name}</h1>
//           <p>{product.description}</p>
//           <p className="text-xl font-semibold">Price: ${product.price}</p>

//           {/* Add to Cart Button */}
//           <button
//             onClick={() =>
//               addToCart({
//                 id: product._id,
//                 name: product.name,
//                 price: product.price,
//                 imageUrl: product.imageUrl,
//                 quantity: 1,
//               })
//             }
//             className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { groq } from "next-sanity";
// import Image from "next/image";

// import { useCartStore } from "../../../../cartstore";
// import client from "../../../../sanity.cli";

// // Fetch Product by Slug
// export async function fetchProductBySlug(slug: string) {
//   const query = groq`
//     *[_type == "products" && slug.current == $slug][0] {
//       _id, name, "slug": slug.current, price, description, 
//       "imageUrl": image.asset->url, category, discountPercent, new, colors, sizes 
//     }
//   `;

//   return await client.fetch(query, { slug });
// }

// // Product Page Component
// export default async function ProductPage({ params }: { params: { slug?: string | string[] } }) {
//   if (!params?.slug) {
//     return <p>Invalid product slug</p>;
//   }

//   // Ensure slug is a string, not an array
//   const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

//   // Fetch product data
//   const product = await fetchProductBySlug(slug);

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   const { addToCart } = useCartStore(); // Zustand Store

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Product Image */}
//         <div className="aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.jpg"}
//             alt={product.name}
//             width={500}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-2xl font-bold">{product.name}</h1>
//           <p>{product.description}</p>
//           <p className="text-xl font-semibold">Price: ${product.price}</p>

//           {/* Add to Cart Button */}
//           <button
//             onClick={() =>
//               addToCart({
//                 id: product._id,
//                 name: product.name,
//                 price: product.price,
//                 imageUrl: product.imageUrl,
//                 quantity: 1,
//               })
//             }
//             className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client"; // Ensuring Zustand works in a client component

// import { useEffect, useState } from "react";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { useCartStore } from "../../../../cartstore";

// import { useParams } from "next/navigation"; // 🔹 Fix: Using `useParams`
// import client from "../../../../sanity.cli";

// // Define the expected prop type for params
// interface Product {
//   _id: string;
//   name: string;
//   slug: string;
//   price: number;
//   description: string;
//   imageUrl: string;
//   category?: string;
//   discountPercent?: number;
//   new?: boolean;
//   colors?: string[];
//   sizes?: string[];
// }

// // Fetch Product by Slug
// async function fetchProductBySlug(slug: string): Promise<Product | null> {
//   const query = groq`
//     *[_type == "products" && slug.current == $slug][0] {
//       _id, name, "slug": slug.current, price, description, 
//       "imageUrl": image.asset->url, category, discountPercent, new, colors, sizes 
//     }
//   `;

//   return await client.fetch(query, { slug });
// }

// // Product Page Component (Fixed `params` Issue)
// export default function ProductPage() {
//   const params = useParams(); // 🔹 Fix: Fetching params properly
//   const slug = params?.slug as string; // 🔹 Ensure `slug` is a string
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { addToCart } = useCartStore(); // Zustand Store

//   useEffect(() => {
//     if (!slug) return;

//     fetchProductBySlug(slug).then((data) => {
//       setProduct(data);
//       setLoading(false);
//     });
//   }, [slug]);

//   if (loading) return <p>Loading product...</p>;
//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Product Image */}
//         <div className="aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.jpg"}
//             alt={product.name}
//             width={500}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-2xl font-bold">{product.name}</h1>
//           <p>{product.description}</p>
//           <p className="text-xl font-semibold">Price: ${product.price}</p>

//           {/* Add to Cart Button */}
//           <button
//             onClick={() =>
//               addToCart({
//                 id: product._id,
//                 name: product.name,
//                 price: product.price,
//                 imageUrl: product.imageUrl,
//                 quantity: 1,
//               })
//             }
//             className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client"; // Ensuring Zustand works in a client component

import { useEffect, useState } from "react";
import { groq } from "next-sanity";
import Image from "next/image";
import { useCartStore } from "../../../../cartstore";
import { useParams } from "next/navigation";
import client from "../../../../sanity.cli";

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  imageUrl: string;
  category?: string;
  discountPercent?: number;
  new?: boolean;
  colors?: string[];
  sizes?: string[];
}

async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const query = groq`
    *[_type == "products" && slug.current == $slug][0] {
      _id, name, "slug": slug.current, price, description, 
      "imageUrl": image.asset->url, category, discountPercent, new, colors, sizes 
    }
  `;
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined; // Ensure slug is a string or undefined
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartStore();

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    fetchProductBySlug(slug)
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          <Image
            src={product.imageUrl || "/placeholder.jpg"}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p className="text-xl font-semibold">Price: ${product.price}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() =>
              addToCart({
                id: product._id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                quantity: 1,
              })
            }
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { useCartStore } from "../../../../cartstore";
// import { useParams } from "next/navigation";
// import client from "../../../../sanity.cli";

// interface Product {
//   _id: string;
//   name: string;
//   slug: string;
//   price: number;
//   description: string;
//   imageUrl: string;
//   category?: string;
//   discountPercent?: number;
//   new?: boolean;
//   colors?: string[];
//   sizes?: string[];
// }

// async function fetchProductBySlug(slug: string): Promise<Product | null> {
//   const query = groq`
//     *[_type == "products" && slug.current == $slug][0] {
//       _id, name, "slug": slug.current, price, description, 
//       "imageUrl": image.asset->url, category, discountPercent, new, colors, sizes 
//     }
//   `;
//   try {
//     return await client.fetch(query, { slug });
//   } catch (error) {
//     console.error("Failed to fetch product:", error);
//     return null;
//   }
// }

// export default function ProductPage() {
//   const params = useParams();
//   const slug = Array.isArray(params?.slug) ? params.slug.join("/") : params?.slug;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { addToCart } = useCartStore();

//   useEffect(() => {
//     if (!slug) return;

//     setLoading(true);
//     fetchProductBySlug(slug)
//       .then((data) => setProduct(data))
//       .finally(() => setLoading(false));
//   }, [slug]);

//   if (loading) return <p>Loading product...</p>;
//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         <div className="aspect-square">
//           <Image
//             src={product.imageUrl || "/placeholder.jpg"}
//             alt={product.name}
//             width={500}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold">{product.name}</h1>
//           <p>{product.description}</p>
//           <p className="text-xl font-semibold">Price: ${product.price}</p>
//           <button
//             onClick={() =>
//               addToCart({
//                 id: product._id,
//                 name: product.name,
//                 price: product.price,
//                 imageUrl: product.imageUrl,
//                 quantity: 1,
//               })
//             }
//             className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
