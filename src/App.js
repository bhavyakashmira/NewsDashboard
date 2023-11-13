import Main from './pages/Main';
import DetailPage from './pages/Detailpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contexts } from './Context/Contexts';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/topic" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
