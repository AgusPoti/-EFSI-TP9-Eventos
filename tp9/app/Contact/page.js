import React from 'react';
import styles from './Contact.module.css';
import Footer from '../Components/Footer';
const Contact = () => {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.title}>Contactanos</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h2 className={styles.name}>Agustina Potasman</h2>
          <p className={styles.email}>agus@poti</p>
          <p className={styles.phone}>+123 456 7890</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.name}>Ariana Castro</h2>
          <p className={styles.email}>ari@castro</p>
          <p className={styles.phone}>+098 765 4321</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
