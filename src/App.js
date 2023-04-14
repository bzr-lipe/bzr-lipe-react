
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Resumo from './pages/resumo';
import Contact from './pages/contact';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route exact path='/' Component={Home}>
      </Route>
      <Route exact path='/resumo' Component={Resumo}>
      </Route>
      <Route exact path='/contact' Component={Contact}>
      </Route>
      </Routes>
      
      
    </div>
      
  );
}

export default App;
