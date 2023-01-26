import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([
    { name: 'abd', price: 456 },
    { name: 'def', price: 566 },
    { name: 'defasd', price: 4 }
  ]);

  function addProduct() {
    setProducts(preState => [...preState, { name: 'asdasd' + preState.length, price: (preState.length * 1) + 100 }]);

  }

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response =>  response.json())
    .then(data =>  setProducts(data) );
  },[])

  //  useEffect(() => {
  //   alert('se');
  // },[])

 
  return (
   
    <>

      <h1>
        MyApp
      </h1>

      <ul>
        {
          products.map((product, index) => {
            return <li key={index}>{product.name} - {product.price}</li>
          })
        }

      </ul>
      <button onClick={addProduct} >Add Products </button>
    </>
  );
}

export default App;
