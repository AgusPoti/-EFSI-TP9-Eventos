"use client";

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css';
import {UserContext}  from '../Components/UserContext/UserContext';

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState('login');
  const { setUser } = useContext(UserContext);  
  const router = useRouter();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: "carla",
      email: "carla@gmail.com",
    };
    localStorage.setItem('user', JSON.stringify(user));  
    setUser(user);  
    router.push('/');  
  };

  return (
    <>
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
          <form onSubmit={handleSubmit}>
            <div className={styles.formOutline}>
              <input type="email" id="loginName" className={styles.formControl} required />
              <label className={styles.formLabel} htmlFor="loginName">Email or username</label>
            </div>
            <div className={styles.formOutline}>
              <input type="password" id="loginPassword" className={styles.formControl} required />
              <label className={styles.formLabel} htmlFor="loginPassword">Password</label>
            </div>
            <button type="submit" className={styles.btnPrimary}>Sign in</button>
          </form>
        )}

        {activeTab === 'register' && (
          <form onSubmit={handleSubmit}>
            <div className={styles.textCenter}>
              <p>Sign up with:</p>
              <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                <i className="fab fa-github"></i>
              </button>
            </div>
            <p className={styles.textCenter}>or:</p>
            <div className={styles.formOutline}>
              <input type="text" id="registerName" className={styles.formControl} />
              <label className={styles.formLabel} htmlFor="registerName">Name</label>
            </div>
            <div className={styles.formOutline}>
              <input type="text" id="registerUsername" className={styles.formControl} />
              <label className={styles.formLabel} htmlFor="registerUsername">Username</label>
            </div>
            <div className={styles.formOutline}>
              <input type="email" id="registerEmail" className={styles.formControl} />
              <label className={styles.formLabel} htmlFor="registerEmail">Email</label>
            </div>
            <div className={styles.formOutline}>
              <input type="password" id="registerPassword" className={styles.formControl} />
              <label className={styles.formLabel} htmlFor="registerPassword">Password</label>
            </div>
            <div className={styles.formOutline}>
              <input type="password" id="registerRepeatPassword" className={styles.formControl} />
              <label className={styles.formLabel} htmlFor="registerRepeatPassword">Repeat password</label>
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" defaultChecked />
              <label className="form-check-label" htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>
            <button type="submit" className={styles.btnPrimary}>Sign up</button>
          </form>
        )}
      </div>
    </>
  );
}