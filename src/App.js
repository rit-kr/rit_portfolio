import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {
  return (
    <>
      <div className='text-gray-200'>
        <Home/>
      </div>
    </>
  );
}

export default App;
