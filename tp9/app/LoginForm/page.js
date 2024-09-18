"use client";

import React, { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css';
import UserContext  from '../Components/UserContext/UserContext';

export default function LoginForm() {
  const [activeTab, setActiveTab] = useState('login');
  const { setUser } = useContext(UserContext);  // Usa el contexto para actualizar el usuario
  const router = useRouter();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: "Nombre de Usuario",
      email: "user@example.com",
    };
    localStorage.setItem('user', JSON.stringify(user));  // Guardar en localStorage
    setUser(user);  // Actualizar el estado del usuario en el contexto
    router.push('/');  // Redirigir a la página principal
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
            {/* Formulario de registro */}
          </form>
        )}
      </div>
    </>
  );
}