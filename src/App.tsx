import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AccidentPreviewPage from './pages/accidentPreview';

import './App.css';
import DetailPage from './pages/detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/accident-preview' element={<AccidentPreviewPage />} />
        <Route path='/detail' element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
