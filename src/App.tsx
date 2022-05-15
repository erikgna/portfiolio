import { Navbar } from './components/Navbar/Navbar';
import { Authentication } from './pages/Authentication/Authentication';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Authentication></Authentication>
        <Home></Home>
      </section>
    </main>
  );
}

export default App;
