import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Posts } from './pages/Posts/Posts';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import { CreatePost } from './pages/CreatePost/CreatePost';
import { Auth } from './pages/Auth/Auth';
import { NotFound } from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <section className='flex'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </section>
    </Router>

)}
export default App;