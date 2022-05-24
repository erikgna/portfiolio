import { Navbar } from './components/Navbar/Navbar';
import { Authentication } from './pages/Authentication/Authentication';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <main>
      <section className='flex'>
        <Navbar></Navbar>

        {/* <section> */}
          {/* <Authentication></Authentication> */}
          <Home></Home>
        {/* </section> */}
      </section>
    </main>

)}
export default App;