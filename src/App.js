import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar'
import Footer from './components/Footer';
import Home from './pages/home'
import Works from './pages/works'
import Contact from './components/Contact';
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
      <Router>
      < Navbar/>
      <Routes>
        <Route exact path='/' element={< Home />}/>
        <Route exact path='/works' element={<Works />}/>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/resume' element={<Resume />}/>
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
