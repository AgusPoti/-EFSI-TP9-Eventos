'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css'; // Importa el archivo CSS para el Header

export default function Header({ user, onLogout }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          MiSitio {/* Logo del sitio */}
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      {/* Espacio para el usuario logueado */}
      {user ? (
        <div className={styles.userSection}>
          <span className={styles.userName}>
            <i className="fas fa-user-circle"></i> {user.name}
          </span>
          <button className={styles.logoutButton} onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <Link href="/login" className={styles.loginLink}>
          Iniciar sesión
        </Link>
      )}
    </header>
  );
}
