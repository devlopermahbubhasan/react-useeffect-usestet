import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const count =['1','2','3','4','5']
  const name =["pavel", "hasan", "mahbub", "md akof" , "korem"]
  const nayks =[{name: 'pavel',count:'1'},{name: 'hasan',count:'2'},{name: 'mahbub',count:'3'},{name: 'md akof',count:'4'},{name: 'korem',count:'5'}]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hero name ='Mahbub Hasan' count='1'></Hero>
        {
          count.map(number => <Hero count={number}></Hero>)
        }
        {
          name.map(Name => <Hero name={Name}></Hero>)
        }
        {
          nayks.map(nayk => <Hero count={nayk.count} name={nayk.name} ></Hero>)
        }
       <Counter></Counter>
       <Api></Api>

      </header>
    </div>
  );
}
function Hero(props) {
  return(
    <div>
        <h1>Hero Name Count Number : {props.count}</h1>
        <p>Hero Name Is: {props.name} </p>
    </div>
  )
}
function Counter (){
  const [count , setCount]= useState(0);
  function state() {
    const number = count + 1;
    setCount(number);
  }


  return(
    <div>
        <h1>Count Number : {count}</h1>
        <button onClick={state}>Add</button>
        </div>
  )
}
function Api() {
  const [nayk , setNayok] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayok(data))
  },[])
  return(
    <div>
     <ul>
       {nayk.map(datas => <li>{datas.name} </li>)}
     </ul>
    </div>
  )
}
export default App;
