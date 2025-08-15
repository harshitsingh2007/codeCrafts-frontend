import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import NavbarLogin from './Component/All-navbar/NavbarLogin.jsx';
import Navbar from './Component/All-navbar/Navbar.jsx';
import Footer from './Component/Fotter/Footer.js';
import { MainPage } from './MainPage/MainPage';
import { SignUp } from './Authorization/signup/SignUp.js';
import { LoginPage } from './Authorization/login/LoginPage.js';
import VerifyEmail from './Authorization/VerifyEmail/VerifyEmail.js';
import Explore from './Explore/Explore.js';
import AboutUs from './About-us/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import UserAccount from './user-account/UserAccount.js'
import MainPageAdmin from './pages/Admin/Admin-login/MainPageAdmin.js';
import Error from './Component/404-page/Error.jsx';
import Loader from './Component/Utils/Loader.jsx';
import OurServices from './pages/services/OurServices.jsx';
import {useLoader}  from './Component/Utils/UseLoader.jsx';
import { userAuthStore } from './store/auth/auth.js';
import AdminPane from './pages/Admin/admin_Panel/AdminPane.js';
function App() {
const Navigate=useNavigate();
  const isLoading=useLoader();
  const data = localStorage.getItem('udata');
  const location = useLocation();
 const { isauth, user } = userAuthStore()
  const excludeNavFooter = ['/signup', '/login', '/loader', '*','/contact','/verify-email'];
  const shouldShowNavFooter = !excludeNavFooter.includes(location.pathname);

  useEffect(() => {
    if (!data) {
      const handleKeyDown = (e) => {
        const active = document.activeElement;
        const isTyping =
          active &&
          (
            active.tagName === 'INPUT' ||
            active.tagName === 'TEXTAREA' ||
            active.isContentEditable
          );

        if (!isTyping && e.key === 's' && !e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          window.location.href = '/signup';
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [data]);

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
      <div tabIndex={0} >
        {shouldShowNavFooter && (isauth ? <NavbarLogin /> : <Navbar />)}
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<OurServices />} />

          <Route path='/signup' element={(isauth && user?.isVerified) ? (<Navigate to='/'/>):(<SignUp />)} />
          <Route path='/login' element={(isauth && user?.isVerified) ? (<Navigate to='/'/>):(<LoginPage />)} />
    
          <Route path="/explore" element={<Explore/>} />
          <Route path="/account" element={<UserAccount />} />
          <Route path="*" element={<Error />} />
          <Route path="/verify-email" element={<VerifyEmail />} />

          <Route path="/admin" element={<MainPageAdmin />} />
          <Route path="/admin/page" element={<AdminPane/>}/>
        </Routes>
        
        {shouldShowNavFooter && <Footer />}
      </div>
    </>
  );
}

export default App;