import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Contexts } from './Context/Contexts';
function App() {
  return (
    <>
      <Contexts>
      <NavBar />
      <Home />
      </Contexts>
    </>
  );
}

export default App;
