import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const ages = [45, 53, 34];
  const products = [
    {name: 'Photo shop', price: '$40.50'},
    {name:"Illustrator", price: '$25.99'},
    {name: 'Photo shop', price: '$8.00'},
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Count></Count>
      <Users></Users>
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      
      {
        products.map(pd => <Product product={pd}></Product>)
      }

      {
        products.map(product => <li>{product.name}</li>)
      }
      
      </header>
    </div>
  );
}

//first function in react
// function Person(props) {
//   const sectionStyle = {
//     backgroundColor: 'cyan',
//     color: 'darkGrey',
//     padding: '10px',
//     margin: '10px',
//     width: '400px'
//   }
//   return(
//   <div style={sectionStyle}>
//     <h3>Name: {props.name}</h3>
//     <h6>Age: {props.age}</h6>
//     <h6>Profession: {props.job}</h6>
//   </div>
//   )
// }

function Product(props){
  const cardStyle = {
    border: '1px solid darkGrey',
    borderRadius: '10px',
    backgroundColor: 'grey',
    boxShadow: '5px 10px 10px black',
    color: 'black',
    margin: '10px',
    padding: '10px',
    width: '200px',
    height: '200px'
  }
  const {name, price} = props.product;
  return(
    <div style={cardStyle}>
      <h4>{name}</h4>
      <h1>{price}</h1>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>Dynamic users: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
