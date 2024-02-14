import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/header/Header';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />}/>
    <Route path='/Work' element={<Work />}/>
    <Route path='/Contact' element={<Contact />}/>
  </Routes>
  </>
  )
};

export default App;