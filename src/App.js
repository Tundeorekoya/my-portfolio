import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Qualification from './components/Qualification/Qualification';
import Skill from './components/Skills/Skill';
import Header from './components/header/Header';

function App() {
  return (
    <>
    <Header/>
    <main className='name'>
    <Home/>
    <About/>
    <Skill/>
    <Qualification/>
    <Project/>
    
    </main>
  
    </>
  );
}

export default App;
