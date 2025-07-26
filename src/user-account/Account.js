import { useEffect, useState } from 'react'
import styles from './Account.module.css'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
export default function Account() {
const Navigate=useNavigate()

function logout(){
  localStorage.removeItem("udata");
  toast.success("Logout Successfully")
  Navigate('/')
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