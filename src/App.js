import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name:'Dr. Mahfuz',
    job: 'singer'
  }
  var textColor = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit has done <code>src/App.js</code> and save to reload.
        </p>
        <h3>my first calculation = {2+5*(5-2)*3}</h3>
        <h4 style={{backgroundColor: 'cyan', color: 'darkgray'}}>name: {person.name}</h4>
        <h5 style={textColor}>job: {person.job}</h5>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <p>My first react project</p>
      </header>
    </div>
  );
}

//first function in react
function Person(){
  const personStyle = {
    border: '2px solid red',
    margin: '10px',
    padding: '10px'
  }
  return (
  <div style={personStyle}>
    <h1>Name: Sakib</h1>
    <h4>age: 43</h4>
  </div>
  )
}

export default App;
