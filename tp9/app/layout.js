// app/layout.js
"use client";

import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './layout.module.css';
import UserContext  from './Components/UserContext/UserContext';
export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);  // Estado de carga
  const [user, setUser] = useState(null);  // Estado del usuario
  const router = useRouter();

  useEffect(() => {
    // Recuperar el usuario almacenado en localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && parsedUser.name) {
          setUser(parsedUser);  // Establecer el usuario si existe en localStorage
        }
      } catch (error) {
        console.error("Error al parsear el usuario almacenado:", error);
      }
    }
    setLoading(false);  // Terminar el estado de carga
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');  // Eliminar el usuario de localStorage
    setUser(null);  // Resetear el estado de usuario
    router.push('/');  // Redirigir al inicio
  };

  if (loading) {
    return <div>Cargando...</div>;  // Mostrar un indicador de carga hasta que se termine de cargar el usuario
  }

  return (
    <UserContext.Provider value={{ user, setUser }}> {/* Proveer el contexto del usuario */}
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
    </UserContext.Provider>
  );
  
}