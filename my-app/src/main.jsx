import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// const person = {
//   name: "Dat",
//   age: 20,
//   status: true,
//   children: [
//     { id: "1", name: "Tung"},
//     { id: "2", name: "Kien"},
//   ]
// }
// const showAge = (age) => <p>Tuoi cua ban la: {age}</p>


// const ShowAge = props => <p>Tuoi cua ban la: {props.age}</p>

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
/* <div>
  <p>Ten: {person.name} </p>
  <p>Tuoi: {person.age} </p>
  <p>{person.status ? "Da ket hon" : "Chua ket hon"}</p>
  <ul>
    {person.children.map(child => <li>
      {child.name}
    </li>)}
  </ul>
  <div>function: { showAge(person.age) }</div>
  <div>Component: <ShowAge age={person.age} name="Dat" /></div>
</div>,  */
document.querySelector('#root'));
