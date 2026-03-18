
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import PostLanding from './pages/PostLanding';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import CustomCursor from './components/CustomCursor';
import './App.css';

// Componente que maneja el layout condicional
function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === '/contacto';

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post-landing" element={<PostLanding />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      {!hideLayout && <Footer />}
      {!hideLayout && <CookieConsent />}
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
