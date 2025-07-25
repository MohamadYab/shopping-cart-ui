import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Product Catalog</h1>
        <Header />
      </div>
      <ProductList/>
    </div>
  )
}

export default App