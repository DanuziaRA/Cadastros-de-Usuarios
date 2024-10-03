import './App.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
      <div className='App'>
        <Navbar />
        <h1></h1>
        <ul>
          <li>Home</li>
        </ul>
        <Outlet />
        <p>Footer</p>
    </div>
  );
}

export default App;
