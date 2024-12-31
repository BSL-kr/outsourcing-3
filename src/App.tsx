import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AccidentPreviewPage from './pages/accidentPreview';

import './App.css';
import SignupForm from './components/auth/signup/SignupForm.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/accident-preview' element={<AccidentPreviewPage />} />
        <Route path='/components' Component={SignupForm} />
      </Routes>
    </Router>
  );
}

export default App;
