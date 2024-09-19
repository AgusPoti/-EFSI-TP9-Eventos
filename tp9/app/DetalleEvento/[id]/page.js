"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from '../DetalleEvento.module.css'; 
import Footer from '../../Components/Footer';
export default function DetalleEvento({ params }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [detailEvent, setDetailEvent] = useState(null);
    const router = useRouter();

    const id = params.id;

    useEffect(() => {
        axios.get(`http://localhost:3000/api/event/${id}`)
            .then(response => {
                setDetailEvent(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const formatStartDate = (startDate) => {
        if (!startDate) return "";
        const date = new Date(startDate);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <>
        <div className={styles.container}>
            <div className={styles.detalleEvento}>
                {detailEvent && (
                    <>
                        <h3 className={styles.h3}>{detailEvent.name}</h3>
                        <ul className={styles.ul}style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li className={styles.li}><strong>Hora de inicio:</strong> {formatStartDate(detailEvent.start_date)}</li>
                            <li className={styles.li}><strong>Duración:</strong> {detailEvent.duration_in_minutes} minutos</li>
                            <li className={styles.li}><strong>Descripción:</strong> {detailEvent.description}</li>
                        </ul>
                    </>
                )}
                <button
                    className={styles.btnBack}
                    onClick={() => router.push('/')}
                >
                    Volver
                </button>
            </div>
        </div>
        <Footer />
        </>
    );
}
