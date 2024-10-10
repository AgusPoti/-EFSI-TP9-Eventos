"use client";

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css';
import { UserContext } from '../Components/UserContext/UserContext';
import Footer from '../Components/Footer/index'
export default function LoginForm() {
  const [activeTab, setActiveTab] = useState('login');
  const { setUser } = useContext(UserContext);  
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/user/login", {
        username, pasword
      });

      if (response.status === 200) {
        const { user, token } = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        router.push(`/`);
      } else {
        setError(response.data.message || "Error en el login");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error al iniciar sesión");
    }
  };

  return (
    <>
    <div className={styles.body}>
    <div className={styles.container}>
      <ul className={styles.navPills} role="tablist">
        <li className={styles.navItem} role="presentation">
          <a
            className={`${styles.navLink} ${activeTab === 'login' ? styles.navLinkActive : ''}`}
            href='#'
            role="tab"
            aria-selected={activeTab === 'login'}
            onClick={() => handleTabChange('login')}
          >
            Login
          </a>
        </li>
        <li className={styles.navItem} role="presentation">
          <a
            className={`${styles.navLink} ${activeTab === 'register' ? styles.navLinkActive : ''}`}
            href='#'
            role="tab"
            aria-selected={activeTab === 'register'}
            onClick={() => handleTabChange('register')}
          >
            Register
          </a>
        </li>
      </ul>

      <div className={styles.tabContent}>
        {activeTab === 'login' && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="loginEmail">Username</label>
              <input type="username" id="loginEmail" className={styles.formControl} required />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="loginPassword">Password</label>
              <input type="password" id="loginPassword" className={styles.formControl} required />
            </div>
            <button type="submit" className={styles.btnPrimary}>Sign in</button>
          </form>
        )}

        {activeTab === 'register' && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerName">Name</label>
              <input type="text" id="registerName" className={styles.formControl} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerUsername">Username</label>
              <input type="text" id="registerUsername" className={styles.formControl} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerEmail">Email</label>
              <input type="email" id="registerEmail" className={styles.formControl} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerPassword">Password</label>
              <input type="password" id="registerPassword" className={styles.formControl} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="registerRepeatPassword">Repeat password</label>
              <input type="password" id="registerRepeatPassword" className={styles.formControl} />
            </div>
            <div className={styles.checkboxGroup}>
              <input className={styles.checkbox} type="checkbox" id="registerCheck" defaultChecked />
              <label className={styles.checkboxLabel} htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>
            <button type="submit" className={styles.btnPrimary}>Sign up</button>
          </form>
        )}
      </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}
