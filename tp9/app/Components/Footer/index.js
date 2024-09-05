'use client';

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <div className={styles.footerMenu}>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">Works</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className={styles.footerCopyright}>
                                <p>© 2021 Sai. All Rights Reserved.</p>
                            </div>
                            <div className={styles.footerProfile}>
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
