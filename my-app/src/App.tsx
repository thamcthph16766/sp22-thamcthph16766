import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import type { ProductType } from './types/product'
import { add, list, remove } from './api/product';
import { Navigate, NavLink, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/Dashboard';
import ProductManager from './pages/ProductManager';
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import PrivateRouter from './components/PrivateRouter'
import TestShowInfo from './components/TestShowInfo'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  
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

  const onHandleRemove = async (id?: number) => {
    remove(id);
    setProducts(products.filter(item => item.id !== id));

  }

  // const onHandleUpdate = async (product: ProductType) =>{
  //   try {
  //     const {data} = await onHandleUpdate(product);
  //     setProducts(products.map(item => item.id === data.id ? product:item))
  //   } catch (error) {
      
  //   }
  // }

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

            
            {/* <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate }/>}/> */}

            <Route path="/product/add" element={<ProductAdd name= "Tham" onAdd={onHandleAdd}/>}/>

            <Route path="admin" element={<PrivateRouter><AdminLayout/></PrivateRouter>}>
                <Route index element={<Navigate to="/admin/dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="product" element={<ProductManager products ={products}  onRemove={onHandleRemove} />}/>
            </Route>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
