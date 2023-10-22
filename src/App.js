import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Qualification from './components/Qualification/Qualification';
import Skill from './components/Skills/Skill';
import Cursors from './components/cursor/Cursors';
import Header from './components/header/Header';


function App() {
  return (
    <>
    <Cursors/>
    <Header/>
    <main className='name'>
    <Home/>
    <About/>
    <Skill/>
    <Qualification/>
    <Project/>
    <Contact/>
    <Footer/>
    
    </main>
  
    </>
  );
}

export default App;
