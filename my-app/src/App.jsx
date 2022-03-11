import { useState } from 'react'
import logo from './logo.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("green");
  const [myStatus, setMyStatus] = useState(false);
  const [product, setProduct] = useState([{id: 1, name: "A"}, {id: 2, name: "B"}])

  const removeItem = (id) => {
    const newProducts = product.filter(item => item.id !== id);
    setProduct(newProducts);
  }

  const changeCount = () => {
    setCount(1)
  }
  const changeStatus = () => {
    setMyStatus(true)
  }

  return <div>
    
    String:  <div style={{background: color, with:100, height:100}}>Cpntent</div> <br/>
    Boolean: {myStatus ? "Da ket hon" : "Chua ket hon"} <br/>
    <hr/>

    <h2>Demo event</h2>
    Number: {count} <br/>
    <button onClick={() => setCount(count+1)}> Click </button>
    <button onClick={() => setMyStatus(!myStatus)}> Status </button>

    
    {myStatus && <div>
      Arr: {product.map(item => item.name)} </div>}
      <button onClick={() => removeItem(item.id)}> Delete </button>
    </div>
}

export default App
