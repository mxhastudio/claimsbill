import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page components
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Audit from './pages/Audit';

// Scroll Restoration helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant jump to top
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/audit" element={<Audit />} />
            
            {/* Fallback redirect or simple 404 */}
            <Route 
              path="*" 
              element={
                <div style={{ textAlign: 'center', padding: '10rem 1.5rem' }}>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                    The page you are looking for does not exist or has been moved.
                  </p>
                  <a href="/" className="btn btn-primary">Return Home</a>
                </div>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
