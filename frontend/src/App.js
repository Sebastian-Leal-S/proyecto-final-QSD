import {Route, Routes} from 'react-router-dom';
import {HomePage, NotFoundPage, PetPage} from './pages/index';
import {PetProvider} from './context/petContext';

function App() {
  return (
    <div className="container-fluid">
      <PetProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PetProvider>
    </div>
  );
}

export default App;