'use client';

import React from 'react';
import Link from 'next/link';
import styles from './layout.module.css'; // Importa el archivo CSS para el Header
//import LoginForm from './Components/LoginForm/index';
//import Footer from './Components/Footer';
export default function RootLayout({children}) {
  return (
    <html lang="es">
    <body>
      <main>
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          MiSitio {/* Logo del sitio */}
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="./page.js">Home</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      {/* Espacio para el usuario logueado */}
      {/*{user ? (
        <div className={styles.userSection}>
          <span className={styles.userName}>
            <i className="fas fa-user-circle"></i> {user.name}
          </span>
          <button className={styles.logoutButton} onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
      ) : (  )}*/}
        <Link href='/LoginForm' className={styles.loginLink}>
          Iniciar sesión
      </Link>

    </header>
    </main>
    {children}
      </body>
    </html>
  );
}
