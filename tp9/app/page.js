'use client';

import React from 'react';
import LoginForm from './Components/LoginForm';
import Layout from './layout';
import Footer from './Components/Footer';

export default function LoginPage() {
  return (
    <>
    <Layout> {/* Pasa el contenido como children */}
      <LoginForm />
    </Layout>
    <Footer></Footer>
    </>
  );
}
