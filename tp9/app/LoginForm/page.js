// index.js
'use client';  

import React, { useState } from 'react';
import styles from './LoginForm.module.css';

export default function LoginForm() {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <ul className={styles.navPills} role="tablist">
                <li className={styles.navItem} role="presentation">
                    <a
                        className={`${styles.navLink} ${activeTab === 'login' ? styles.navLinkActive : ''}`}
                        id="tab-login"
                        href='/page.js'
                        role="tab"
                        aria-controls="pills-login"
                        aria-selected={activeTab === 'login'}
                        onClick={() => handleTabChange('login')}
                    >
                        Login
                    </a>
                </li>
                <li className={styles.navItem} role="presentation">
                    <a
                        className={`${styles.navLink} ${activeTab === 'register' ? styles.navLinkActive : ''}`}
                        id="tab-register"
                        href="#pills-register"
                        role="tab"
                        aria-controls="pills-register"
                        aria-selected={activeTab === 'register'}
                        onClick={() => handleTabChange('register')}
                    >
                        Register
                    </a>
                </li>
            </ul>

            <div className={styles.tabContent}>
                {activeTab === 'login' && (
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form>
                            <div className={styles.textCenter}>
                                <p>Sign in with:</p>
                                <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                                    <i className="fab fa-google"></i>
                                </button>
                                <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                            <p className={styles.textCenter}>or:</p>
                            <div className={styles.formOutline}>
                                <input type="email" id="loginName" className={styles.formControl} />
                                <label className={styles.formLabel} htmlFor="loginName">Email or username</label>
                            </div>
                            <div className={styles.formOutline}>
                                <input type="password" id="loginPassword" className={styles.formControl} />
                                <label className={styles.formLabel} htmlFor="loginPassword">Password</label>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    <div className="form-check mb-3 mb-md-0">
                                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                                        <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center">
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>
                            <button type="submit" className={styles.btnPrimary} onClick="/page.js">Sign in</button>
                            <div className={styles.textCenter}>
                                <p>Not a member? <a href="#!">Register</a></p>
                            </div>
                        </form>
                    </div>
                )}
                {activeTab === 'register' && (
                    <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <form>
                            <div className={styles.textCenter}>
                                <p>Sign up with:</p>
                                <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                                    <i className="fab fa-google"></i>
                                </button>
                                <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button type="button" className={`${styles.btnLink} ${styles.btnFloating}`}>
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                            <p className={styles.textCenter}>or:</p>
                            <div className={styles.formOutline}>
                                <input type="text" id="registerName" className={styles.formControl} />
                                <label className={styles.formLabel} htmlFor="registerName">Name</label>
                            </div>
                            <div className={styles.formOutline}>
                                <input type="text" id="registerUsername" className={styles.formControl} />
                                <label className={styles.formLabel} htmlFor="registerUsername">Username</label>
                            </div>
                            <div className={styles.formOutline}>
                                <input type="email" id="registerEmail" className={styles.formControl} />
                                <label className={styles.formLabel} htmlFor="registerEmail">Email</label>
                            </div>
                            <div className={styles.formOutline}>
                                <input type="password" id="registerPassword" className={styles.formControl} />
                                <label className={styles.formLabel} htmlFor="registerPassword">Password</label>
                            </div>
                            <div className={styles.formOutline}>
                                <input type="password" id="registerRepeatPassword" className={styles.formControl} />
                                <label className={styles.formLabel} htmlFor="registerRepeatPassword">Repeat password</label>
                            </div>
                            <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" defaultChecked />
                                <label className="form-check-label" htmlFor="registerCheck">
                                    I have read and agree to the terms
                                </label>
                            </div>
                            <button type="submit" className={styles.btnPrimary}>Sign up</button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}
