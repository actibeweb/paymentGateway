import logo from './logo.svg';
import './App.css';
import Gallery from './components/gallery';
import Gal from './components/AboutUs';
import Service from './components/services';
import ServiceDetials from './components/serviceDetials';
import Com from './components/Coming';
import Category from './components/category'
import Contact from './components/contact';
import Sec from './components/categorySecond';
import Three from './components/categoryThree';
import Scanner from './components/pages/Home';
import Qgenerate from './components/pages/QRgenerator';
import QScanner from './components/pages/QRscanner';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Gallery/>} />
      <Route path="/about.html" element={<Gal />} />
      <Route path="/service-one.html" element={<Service />} />
      <Route path="/service-details.html" element={<ServiceDetials />} />
      <Route path="/project.html" element={<Com />} />
      
      <Route path="/project-details.html" element={<Com />} />
      <Route path="/team.html" element={<Com />} />
      <Route path="/open-account.html" element={<Com />} />
      <Route path="/apply-loan.html" element={<Com />} />
      <Route path="/pricing.html" element={<Com />} />
      <Route path="/faq.html" element={<Com />} />
      <Route path="/testimonials.html" element={<Com />} />
      <Route path="/my-account.html" element={<Com />} />
      <Route path="/login.html" element={<Com />} />
      <Route path="/register.html" element={<Com />} />
      <Route path="/recover-password.html" element={<Com />} />
      <Route path="/terms-of-service.html" element={<Com />} />
      <Route path="/privacy-policy.html" element={<Com />} />
      <Route path="/service-category.html" element={<Category />} />
    
      <Route path="/blog-no-sidebar.html" element={<Com />} />
      <Route path="/blog-left-sidebar.html" element={<Com />} />
      <Route path="/blog-right-sidebar.html" element={<Com />} />
      <Route path="/blog-details-no-sidebar.html" element={<Com />} />
      <Route path="/blog-details-left-sidebar.html" element={<Com />} />
      <Route path="/blog-details-right-sidebar.html" element={<Com />} />
      <Route path="/contact.html" element={<Contact />} />
      <Route path="/register.html" element={<Com />} />
      <Route path="/service-category-second.html" element={<Sec />} />
      <Route path="/service-category-three.html" element={<Three />} />
      <Route path="/error.html" element={<Com />} />
      {/* <Route path="/scanner.html" element={<Scanner />} />
      <Route path="/qr_generator" element={<Qgenerate />} />
      <Route path="/qr_scanner" element={<QScanner />} /> */}
      

      
    </Routes>
  </BrowserRouter>
      
      
    </div>
  );
}

export default App;
