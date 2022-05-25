import { Navbar } from './components/Navbar/Navbar';
import { About } from './pages/About/About';
import { Authentication } from './pages/Authentication/Authentication';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <main>
      <section className='flex'>
        <Navbar></Navbar>

        {/* <section> */}
          {/* <Authentication></Authentication> */}
          <About></About>
        {/* </section> */}
      </section>
    </main>

)}
export default App;