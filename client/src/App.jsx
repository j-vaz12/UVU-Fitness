import { useState } from 'react'
import Home from "./pages/Home"; 
import Waves from "./components/Waves/Waves";
// import Footer from "./pages/Hero "
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// import Waves from "./comp %"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Waves />
      <Home />;
      
      {/* <Hero />
      <Footer /> */}
    </>
  );
};

export default App
