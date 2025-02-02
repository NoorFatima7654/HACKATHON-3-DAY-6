import { Product } from "@/types/product.types";

export const  addtoCart = (product : Product) => {
    const cart : Product[]  = JSON.parse(localStorage.getItem('cart') || "[]")

    const existingProductIndex = cart.findIndex(item => item._id === product._id)
   if(existingProductIndex > -1) {
    cart [existingProductIndex].
   }
}