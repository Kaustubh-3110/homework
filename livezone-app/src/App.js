import './App.css';
import LoginPage from './Pages/Loginpage';
import Signuppage from './Pages/Signuppage';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;