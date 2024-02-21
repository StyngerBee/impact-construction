import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/header/Header';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/impact-construction' element={<Home />} />
    {/* <Route path='/About' element={<About />}/> */}
    <Route path='/impact-construction/Work' element={<Work />}/>
    <Route path='/impact-construction/Contact' element={<Contact />}/>
    <Route path='/impact-construction/Testimonials' element={<Testimonials />}/>
  </Routes>
  </>
  )
};

export default App;