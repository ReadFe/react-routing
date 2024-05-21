
import { Link, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Tugas React Routing</h1>
      
      <nav>
        <Link to='/home' className='m' >Home</Link>
        <Link to='/about' className='m' >About</Link>
        <Link to='/class/MERN' className='m' >MERN</Link>
        <Link to='/class/Laravel' className='m' >Laravel</Link>
      </nav>

      <Outlet/>
    </div>
  );
}

export default App;
