import { useEffect } from 'react';
import './App.css';
import Layout from './Layout/Layout';

import AOS from 'aos';
import "aos/dist/aos.css"
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App" style={{ height: 'auto' }}>
      <div>
        <Layout />
      </div>
    </div>
  );
}


export default App;
