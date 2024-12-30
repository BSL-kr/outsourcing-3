import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AccidentPreviewPage from './pages/accidentPreview';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/accident-preview' element={<AccidentPreviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
