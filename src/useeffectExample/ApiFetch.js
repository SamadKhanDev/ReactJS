import React, { useEffect, useState } from 'react'

function ApiFetch() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    
    <div>
        {<h1>Api Fetch Using Hook UseEffect-Console</h1>}
      {products.map(({id, title,}) => (
        
        <h1 key={id}>
          {/* {title} */}
        </h1>
      ))}
    </div>
  )
}

export default ApiFetch