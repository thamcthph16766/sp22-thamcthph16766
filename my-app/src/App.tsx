import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { Product } from './types/product'
import { add, list } from './api/product';
import { Navigate, NavLink, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import ProductAdd from './pages/ProductAdd';

function App() {
  const [products, setProducts] = useState<{_id: number, name: string}[]>([])
  useEffect(() => {
    const getProducts = async() =>{
      const {data} = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  const onHandleAdd = async (product: any) => {
    console.log('app.js', product);
    // api
    const {data} = await add(product);
    // reRender
    setProducts([...products, data]);
  }

  return (
    <div className="App">
      <header>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
        <Route path="/" element={<WebsiteLayout />}>
                <Route index element={<HomePage />} />
                <Route path="product" element={<ProductPage />} /> 
            </Route>

        <Route path="/productadd" element={<ProductAdd name= "Tham" onAdd={onHandleAdd}/>}></Route>

            <Route path="admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="product" element={<ProductManager />} />
            </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
