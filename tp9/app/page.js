'use client';

import React ,{useState}from 'react';
import Footer from './Components/Footer';
import ListadoEvents from './Home/index'
import {UserContext } from './Components/UserContext/UserContext';
export default function LoginPage() {
  const [user, setUser] = useState(null);
  return (
    <>

    <UserContext.Provider value={{ user,setUser }}/>
    <ListadoEvents/>
    <Footer></Footer>
    </>
  );
}

