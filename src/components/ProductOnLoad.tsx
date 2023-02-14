import { useEffect, useState } from 'react'
import { IProduct } from '../models/IProduct'
import { getProduct } from '../services/produtService';

export const ProductOnLoas = () =>{

  const [products,setProducts] = useState<IProduct[]>([]);


  useEffect(() =>{

  const getData = async() =>{
    let productfromAPI = await getProduct();
    setProducts(productfromAPI);

  };
  if(products.length >0) return;

   getData();
  });

  let html = products.map((product) =>{

 return( <div className='product-container' key={product.id}>
    
     <h1>{product.name}</h1>
     <img src={product.imageUrl} alt={product.name}/>
      <p>{product.description}</p>
      <span>{product.price}</span>
 </div>)
  });

  return(<>
   {html}
  </>)
}
