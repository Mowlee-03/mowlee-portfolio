import { useEffect } from 'react';
import './App.css';
import Layout from './Layout/Layout';

import AOS from 'aos';
import "aos/dist/aos.css"
function App() {
  useEffect(()=>{
      AOS.init()
  },[])
  
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
