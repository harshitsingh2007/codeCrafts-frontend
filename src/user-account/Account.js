import styles from './Account.module.css'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Account() {
const Navigate=useNavigate()

const API_URL = 'https://codecrafts-backend.onrender.com';

const logout = async () => {
  try {
    const res = await axios.post(`${API_URL}/api/auth/logout`, {}, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(res.data);
    Navigate('/login');
  } catch (error) {
    console.log(error.message, "logout error");
    toast.error("Logout failed. Please try again.");
  }
}

return (
    <>
      <ToastContainer />
      <div className={`{styles.AccountMain} py-[4.5em] bg-black text-white`}>
        <div className={`${styles.Accountcontainer} container`}>
          <div className={styles.AccountHeader}>
            <div className={styles.AccountHeaderBody}>
              <h1>Sites</h1>
              <p>View and manage all your websites in one place.</p>
            </div>
            <div className={styles.AccountHeaderBody}>
              <button>Create a new folder</button>
              <button>Create a new Website</button>
            </div>
          </div>

          <div className={styles.logOut}>
            <button onClick={logout}>Logout</button>

          </div>
        </div>
      </div>
    </>
  )
}