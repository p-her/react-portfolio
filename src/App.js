
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() {
  return (
        <div className="App">
    

        <Router>

            <Header />
            <Routes>
               
                
                <Route path='/about' element={<About />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/resume' element={<Resume />}/>
               
            </Routes>
            <Footer />
        </Router>
        
        </div>

   


   
  
  );
}

export default App;
