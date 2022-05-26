import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { About } from './pages/About/About';
import { Authentication } from './pages/Authentication/Authentication';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Router>
      <section className='flex'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </section>
    </Router>

)}
export default App;