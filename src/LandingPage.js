import React, {useEffect, useState} from 'react'

function LandingPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('http://www.teknodc.site/api/products');
              const jsonData = await response.json();
              setProducts(jsonData);
            } catch (error) {
              console.log('Error fetching data:', error);
            }
          };
      
          fetchData();
      }, []);
    console.log(products)
    
  return (
    <div>
    <h1>Product List</h1>
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </div>
  )
}

export default LandingPage