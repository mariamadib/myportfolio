import './App.css';
import Home from './Screens/Home'
import Header from './Screens/Header';
import About from './Screens/About';
import Skills from './Screens/Skills'
import MyWorks from './Screens/MyWorks';
import ContactMe from './Screens/ContactMe';
import Footer from './Screens/Footer';
import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <MyWorks />
      <ContactMe />
      <Footer />

    </div>
  );
}

export default App;
