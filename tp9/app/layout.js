"use client";  // Debe estar en la primera línea del archivo

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './layout.module.css';

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Verificar el estado del usuario al cargar el componente
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
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

            <div className={styles.userSection}>
              {user ? (
                <>
                  <span className={styles.userName}>
                    <i className="fas fa-user-circle"></i> {user.name}
                  </span>
                  <button className={styles.logoutButton} onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <Link href='/LoginForm' className={styles.loginLink}>
                  Iniciar sesión
                </Link>
              )}
            </div>
          </header>
        </main>
        {children}
      </body>
    </html>
  );
}
