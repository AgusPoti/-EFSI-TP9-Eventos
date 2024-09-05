'use client';

import React from 'react';
import Header from './Components/Header';


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
