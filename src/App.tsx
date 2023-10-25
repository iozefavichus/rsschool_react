// import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Catalog from './components/Catalog';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header></Header>
        <Catalog></Catalog>
      </div>
    </>
  );
}
export default App;
