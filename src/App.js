import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { MainPage } from './MainPage/MainPage';
import { SignUp } from './signup/SignUp';
import { LoginPage } from './login/LoginPage';
import { DesignMain } from './Design/DesignMain';
import {TemplateMain}  from './Template/TemplateMain';
import AboutUs from './About-us/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import TemplatesDiscription from './Template/TemplatesDiscription';
import Account from './user-account/Account';
import Pricing from './pricing/Pricing';
import MainPageAdmin from './MainPage-Login/MainPageAdmin';
import Error from './404-page/Error';
import Loader from './Component/Utils/Loader.jsx';
import Footer from './Component/Fotter/Footer.js';
import NavbarNew from './Component/All-navbar/NavbarNew.jsx';
import Navbar2 from './Component/All-navbar/Navbar2.jsx';
import OurServices from './pages/services/OurServices.jsx';
import { useEffect } from 'react';
import {useLoader}  from './Component/Utils/UseLoader.jsx';
import { userAuthStore } from './auth/auth.js';
function App() {
const Navigate=useNavigate();
  const isLoading=useLoader();
  const data = localStorage.getItem('udata');
  const location = useLocation();
 const { isauth, user } = userAuthStore()
  const excludeNavFooter = ['/signup', '/login', '/loader', '*','/contact'];
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
      <div tabIndex={0}>
        {shouldShowNavFooter && (data ? <NavbarNew /> : <Navbar2 />)}
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/signup' element={(isauth && user?.isVerified) ? (<Navigate to='/'/>):(<SignUp />)} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/design" element={<DesignMain />} />
          <Route path="/template" element={<TemplateMain />} />
          <Route path="/template/:title" element={<TemplatesDiscription />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admin/MainPage" element={<MainPageAdmin />} />
         <Route path="*" element={<Error />} />
          <Route path="/services" element={<OurServices />} />
        </Routes>
        
        {shouldShowNavFooter && <Footer />}
      </div>
    </>
  );
}

export default App;