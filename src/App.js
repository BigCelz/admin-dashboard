
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import { useState } from 'react';



function App() {
  const [toggle, setToggle] = useState(true)

  const Toggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className="container-fluid min-vh-100 bg-secondary">
      <div className='row'>
        {
          toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
            <Sidebar/>
          </div>
        }

        {toggle && <div className='col-4 col-md-2'></div>}

        <div className='col'>
          <Home Toggle={Toggle}/>
        </div>
      </div>
    </div>
  );
}

export default App;
