import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Work' element={<Work />}/>
    <Route path='/Contact' element={<Contact />}/>
    <Route path='/Testimonials' element={<Testimonials />}/>
  </Routes>
  </>
  )
};

export default App;