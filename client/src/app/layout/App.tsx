import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/product";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  function addProduct() {
    setProducts(preState => [...preState,
    {
      id: preState.length + 101,
      name: 'asdasd' + preState.length,
      price: (preState.length * 1) + 100,
      brand: 'some brand',
      description: 'some descip',
      pictureUrl: 'https://picsum.photos/200'
    }]);

  }

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  //  useEffect(() => {
  //   alert('se');
  // },[])


  return (

    <>

      <h1>
        MyApp
      </h1>
      <Catalog products={products} addProduct={addProduct} />


    </>
  );
}

export default App;
