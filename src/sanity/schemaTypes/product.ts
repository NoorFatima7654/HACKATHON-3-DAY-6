



// import { defineType } from "sanity";

// export const product = defineType({
//   name: 'products',
//   title: 'Products',
//   type: 'document',
//   fields: [
//     {
//       name: 'name',
//       title: 'Name',
//       type: 'string',
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     },
//     {
//       name: "slug",
//       type: "slug",
//       title: "slug",
//       options: {
//         source: "name"
//       }


//     },
//     {
//       name: 'image', // Image field for uploading images
//       title: 'Image',
//       type: 'image', // Corrected type to 'image' for image upload
//       options: {
//         hotspot: true, // Optional: Allows cropping within Sanity Studio
//       },
//     },
//     {
//       name: 'imageUrl', // For storing an external image URL
//       title: 'Image URL',
//       type: 'url', // Corrected to 'url' for storing external image URL
//     },
//     {
//       name: "category",
//       title: "Category",
//       type: 'string',
//       options: {
//         list: [
//           { title: 'T-Shirt', value: 'tshirt' },
//           { title: 'Short', value: 'short' },
//           { title: 'Jeans', value: 'jeans' },
//           { title: 'Hoodie', value: 'hoodie' },
//           { title: 'Shirt', value: 'shirt' },
//         ],
//       },
//     },
//     {
//       name: "discountPercent",
//       title: "Discount Percent",
//       type: 'number',
//     },
//     {
//       name: "new",
//       type: 'boolean',
//       title: "New",
//     },
//     {
//       name: "colors",
//       title: "Colors",
//       type: 'array',
//       of: [{ type: 'string' }],
//     },
//     {
//       name: "sizes",
//       title: "Sizes",
//       type: 'array',
//       of: [{ type: 'string' }],
//     },
//   ],
// });


import { defineType } from "sanity"

export default defineType({
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
        name: 'name',
        title: 'Name',
        type: 'string',
        },
        {
                name: "slug",
                type: "slug",
                title: "slug",
                options: {
                  source: "name"
                }

        },
       {
        name: 'price',
        title: 'Price',
        type: 'number',
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text',
        },
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        },
        {
            name:"category",
            title:"Category",
            type: 'string',
            options:{
                list:[
                   {title: 'T-Shirt', value: 'tshirt'},
                   {title: 'Short', value: 'short'}, 
                   {title: 'Jeans', value: 'jeans'} ,
                   {title: 'Hoddie', value: 'hoodie'} ,
                   {title: 'Shirt', value: 'shirt'} ,
                ]
            }
        },
        {
            name:"discountPercent",
            title:"Discount Percent",
            type: 'number',
        },
        {
            name:"new",
            type: 'boolean',
            title:"New",
        },
        {
            name:"colors",
            title:"Colors",
            type: 'array',
            of:[
                {type: 'string'}
            ]
        },
        {
            name:"sizes",
            title:"Sizes",
            type: 'array',
            of:[
                {type: 'string'}
            ]
        }
    ],
})