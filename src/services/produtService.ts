import axios from 'axios';

import { IProduct } from '../models/IProduct';

const Url  = "https://medieinstitutet-wie-products.azurewebsites.net/api/products";




 export const getProduct = async (): Promise<IProduct[]> =>{
  
  let response = await axios.get(Url);
  return response.data;

  
}
