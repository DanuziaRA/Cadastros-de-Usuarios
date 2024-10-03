import './App.css'

import { Outlet } from 'react-router-dom';
import


function App() {
  return (
      <div className='App'>
        <p>Navbar</p>
        <h1>React Router</h1>
        <Outlet />
        <p>Footer</p>
    </div>
  );
}

export default App;
