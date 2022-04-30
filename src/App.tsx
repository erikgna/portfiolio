import { Navbar } from './components/Navbar/navbar';
import { Home } from './pages/Home/home';

function App() {
  return (
    <main>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Home></Home>
      </section>
    </main>
  );
}

export default App;
