import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';
import NavbarLogin from './Component/All-navbar/NavbarLogin.jsx';
import Navbar from './Component/All-navbar/Navbar.jsx';
import Footer from './Component/Fotter/Footer.jsx';
import { MainPage } from './MainPage/MainPage';
import { SignUp } from './Authorization/signup/SignUp.js';
import { LoginPage } from './Authorization/login/LoginPage.js';
import VerifyEmail from './Authorization/VerifyEmail/VerifyEmail.js';
import AboutUs from './About-us/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import UserAccount from './user-account/UserAccount.js'
import Error from './Component/404-page/Error.jsx';
import Loader from './Component/Utils/Loader.jsx';
import OurServices from './pages/services/OurServices.jsx';
import {useLoader}  from './Component/Utils/UseLoader.jsx';
import { userAuthStore } from './store/auth/auth.js';
import AdminPane from './pages/Admin/admin_Panel/AdminPane.js';
import ForgotPassword from './Authorization/ForgotPassword/ForgotPassword.js';
import ResetPassword from './Authorization/ResetPassword/ResetPassword.jsx';
import Shop from './pages/Shoping/Shop/Shop.jsx';
import ShopMore from './pages/Shoping/Shop/ShopMore.jsx';
import Custom from './pages/Shoping/Custom/Custom.jsx';
import Custom_More from './pages/Shoping/Custom/Custom_More.jsx';
import AdminNav from './Component/All-navbar/AdminNav.jsx';
import Cart from './pages/Shoping/UserCart/Cart.jsx';
function App() {
  const isLoading=useLoader();
  const location = useLocation();
 const { isauth, user,checkAuth} = userAuthStore()
 const [loadingAuth, setLoadingAuth] =useState(true);
  const excludeNavFooter = ['/signup', '/login', '/loader', '*','/contact','/verify-email',];
  const shouldShowNavFooter = !excludeNavFooter.includes(location.pathname);
  useEffect(() => {
    if (!isauth) {
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
  }, [isauth]);

  useEffect(() => {
  const verifyAuth = async () => {
    await checkAuth();
    setLoadingAuth(false);
  };
  verifyAuth();
}, []);
 
  if (isLoading||loadingAuth) {
    return <Loader/>
  }
  return (
    <>
      <div tabIndex={0}>
        {user?.Identity === "Admin" ? <AdminNav /> : shouldShowNavFooter && (isauth ? <NavbarLogin /> : <Navbar />)}

        <Routes>
          
          <Route path='/' element={user?.Identity==="User"?<Shop/>:<MainPage/>}/>
          

          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<OurServices />} />

         <Route path='/signup' element={isauth ? <Navigate to='/' replace /> : <SignUp />} />
         <Route path='/login' element={isauth ? <Navigate to='/' replace /> : <LoginPage/>} />
          <Route path="/verify-email" element={isauth?<Navigate to='/'/>:<VerifyEmail />} />
          <Route path='/forgot-password' element={isauth?<Navigate to='/'/>:<ForgotPassword />} />
          <Route path='/reset-password/:token' element={isauth?<Navigate to='/'/>:<ResetPassword />} />

          <Route path="/account"  element={user?.Identity==="User"?<UserAccount />:<MainPage/>}/>
          <Route path="*" element={<Error />} />
  
          <Route path="/admin/page"  element={user?.Identity==='Admin'?<AdminPane/>:<MainPage/>}/>
                   
<Route path="/shop" element={user?.Identity === 'Admin' ? <Navigate to="/" /> : <Shop />} />
<Route path="/shop-more/:templateId" element={user?.Identity === 'Admin' ? <Navigate to="/" /> : <ShopMore />} />
<Route path="/custom" element={user?.Identity === 'Admin' ? <Navigate to="/" /> : <Custom />} />
<Route path="/custom-more/:freelancerid"  element={user?.Identity === 'Admin' ? <Navigate to="/" /> : <Custom_More />} />
          
<Route path="/cart" element={user?.Identity === 'Admin' ?<Navigate to="/"/>:<Cart/>} />
        </Routes>

          
        {user?.Identity !== "Admin"  && shouldShowNavFooter && <Footer />}
      </div>
    </>
  );
}

export default App;