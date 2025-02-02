// import { Client, } from "@/sanity/lib/client"
// import { urlFor } from "@/sanity/lib/image"
// import { Product } from "@/types/product.types"
// import { groq } from "next-sanity"
// import Image from "next/image"

// interface ProductPageProps {
//     params : Promise<{slug: string}>
// }

// async function getProduct(slug : string): Promise<Product> {
//     return Client.fetch(
//         groq`*[_type == "products" && slug.current == $slug][0]{
//         _id,
//         name,
//         _type,
//         image,
//         price,
// }` , {slug}
// )
// }
// export default async function ProductPage({params} : ProductPageProps){
//     const {slug} = await params;
//     const product =await getProduct(slug)

//     return (
//         <div className="max-w-7xl- mx-auto px-4 ">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <div className="aspect-square">
//                     {product.image && (
//                         <Image
//                         src={urlFor(product.image).url()}
//                         alt={product.name}
//                         height={500}
//                         width={500}
//                         className="rounded-lg shadow-md"
//                         />

//                     )}

//                 </div>
//                 <div className="flex flex-col gap-8">
//                     <h1 className="text-4xl font-bold">
//                         {product.name}

//                     </h1>
//                     <p className="text-2xl font-bold">
//                         {product.price}
//                     </p>

//                 </div>

//             </div>

//         </div>
//      )
//     }

// // 


// import { urlFor } from "@/sanity/lib/image";
// import { Product } from "@/types/product.types";
// import Image from "next/image";
// import client from "../../../../sanity.cli";
// import { groq } from "next-sanity";

// interface ProductPageProps {
//   params:Promise<{ slug: string }>;
// }

// // ✅ Fetch Product Data from Sanity based on the slug
// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//    groq `*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       name,
//       _type,
//       image,
//       price,
      
//     }`,
//     { slug }
//   );
// }

// // ✅ Main Product Page Component
// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params; // Get the slug from the dynamic route parameter
//   const product = await getProduct(slug);

 

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Product Image */}
//         <div className="aspect-square">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="rounded-lg shadow-md"
//             />
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="flex flex-col gap-8">
//           <h1 className="text-4xl font-bold">{product.name}</h1>
//           <p className="text-2xl font-bold">{product.price}</p>
//           <p className="text-lg">{product.description}</p>
          
//           {/* Add more details like discount, sizes, colors, etc */}
//         </div>
//       </div>
//     </div>
//   );
// }
import { groq } from "next-sanity";


import Image from "next/image";

import client from "../../../../sanity.cli";
import { useCartStore } from "../../../../cartstore";

export async function fetchProductBySlug(slug: string) {
  const query = groq`*[_type == "products" && slug.current == $slug][0] {
    _id, name, "slug": slug.current, price, description, 
    "imageUrl": image.asset->url, category, discountPercent, new, colors, sizes 
  }`;

  return await client.fetch(query, { slug });
}


export default async function ProductPage({ params }: { params: { slug?: string } }) {
  if (!params?.slug) {
    return <p>Invalid product slug</p>;
  }

  const product = await fetchProductBySlug(params.slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  const { addToCart } = useCartStore(); // Zustand Store

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

