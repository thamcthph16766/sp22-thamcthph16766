import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { Product } from './types/product'
import { Navigate, NavLink, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';

function App() {
  const [count, setCount] = useState<number>(0);
  const [info, setInfo] = useState<Product>({
  name: 'Tham',
  age: 20
})


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
