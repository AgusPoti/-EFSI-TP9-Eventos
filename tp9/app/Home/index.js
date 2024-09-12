"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
// import styles from './Home.module.css';

function ListadoEvents() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [events, setEvents] = useState([]);  
    const router = useRouter();

    const fetchEvents = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/api/event");
            setEvents(response.data.events);  
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h3>Eventos</h3>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h1>{event.name} - {event.description} - {event.category_name}</h1>
                        <button onClick={() => router.push(`/DetalleEvento/${event.id}`)}>
                            Ver Detalles
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
    
}

export default ListadoEvents;
