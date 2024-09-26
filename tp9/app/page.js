'use client';

import React ,{useState}from 'react';
import Footer from './Components/Footer';
import ListadoEvents from './Home/index'
import styles from "./page.module.css";
import {UserContext } from './Components/UserContext/UserContext';
export default function LoginPage() {
  const [user, setUser] = useState(null);
  return (
    <>

    <UserContext.Provider value={{ user,setUser }}/>
    <main className={styles.mainContent}>
          <ListadoEvents />
    </main>
    <Footer></Footer>
    </>
  );
}

