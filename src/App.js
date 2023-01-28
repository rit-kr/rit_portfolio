import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';

function App() {
  return (
    <>
      <div className='text-blue-600/75'>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/header" element= {<Header/>}/>
          {/* <Route path="/about" element= {<About/>}/> */}

        </Routes>
      </div>
    </>
  );
}

export default App;
