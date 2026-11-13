import Nav from './components/UI/navigation/Nav.jsx';
import Footer from './components/UI/navigation/Footer.jsx';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Knowledge from './pages/Knowledge.jsx'; 
import Contact from './pages/Contact.jsx';
import ArticleDetail from "./pages/ArticleDetail"; // <--- No curly braces here

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Nav />
    
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        
        {/* Knowledge Hub Routes */}
        <Route path="/knowledge-hub" element={<Knowledge />} />
        <Route path="/knowledge-hub/:slug" element={<ArticleDetail />} />
        
        <Route path="/contact" element={<Contact />} />

        {/* Redirects */}
        <Route path="/Knowledge" element={<Navigate to="/knowledge-hub" replace />} />
        <Route path="/Services" element={<Navigate to="/services" replace />} />
        <Route path="/About" element={<Navigate to="/about" replace />} />
        <Route path="/Contact" element={<Navigate to="/contact" replace />} />
        
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>

    <Footer />
  </div>
);

export default App;