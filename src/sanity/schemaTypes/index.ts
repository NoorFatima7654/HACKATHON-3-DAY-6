import { defineType, type SchemaTypeDefinition } from 'sanity'
import product from './product'
// import { product } from './product'
// import ProductCards from '@/app/products/page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
  

}