import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/header/Header';

function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />}/>
    <Route path='/NotFound' element={<NotFound />}/>
  </Routes>
  </>
  )
};

export default App;