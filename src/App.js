import { Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
        <Home></Home>
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
