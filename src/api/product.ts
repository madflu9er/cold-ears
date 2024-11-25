import { api } from '.'
import { urls } from './urls'

export type Product = {
  id: number
  name: string
  price: number
  description: string
  material: string
  care: string
  shipment: string
  available: boolean
  isSale: boolean
  discount: number
  size: string
  pictures: { data: Array<string> }
  season: { data: Array<string> }
}

export const getProduct = async (id: string): Promise<Product | any> => {
  try {
    return (await api.get(urls.product.getProductById(id))).data
  } catch (err) {
    console.log('error: ', err)
  }
}
