import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout=()=> {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-between">
     <div>
     <Navbar /> 
      <Outlet />
     </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </div>
  );
}
export default MainLayout