"use client";  // Debe estar en la primera línea del archivo

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './layout.module.css';

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <html lang="es">
      <body>
        <main>
          <header className={styles.header}>
            <div className={styles.logo}>
              <Link href="/">MiSitio</Link>
            </div>
            <nav className={styles.nav}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Contact">Contacto</Link></li>
              </ul>
            </nav>

            {user ? (
              <div className={styles.userSection}>
                <span className={styles.userName}>
                  <i className="fas fa-user-circle"></i> {user.name}
                </span>
                <button className={styles.logoutButton} onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <Link href='/LoginForm' className={styles.loginLink}>
                Iniciar sesión
              </Link>
            )}
          </header>
        </main>
        {/* Si el children es LoginForm, pasamos la prop onLogin */}
        {React.cloneElement(children, { onLogin: handleLogin })}
      </body>
    </html>
  );
}
