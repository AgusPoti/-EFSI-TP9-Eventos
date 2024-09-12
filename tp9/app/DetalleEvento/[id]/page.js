"use client";
import { useState, useEffect } from "react";
import axios from "axios";
// import styles from './DetalleEvento.module.css';
export default function DetalleEvento({params}){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [detailEvent, setDetailEvent] = useState([]);
    const id = params.id;
    const fetchEvent = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3000/api/event/${id}`);
            setDetailEvent(response.data);  
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchEvent();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return(
        <>
         <div>
            <h3>Detalle del evento {detailEvent.name}: </h3>
            <ul>
                    <div key={detailEvent.id} >
                            <h4>Nombre del evento: {detailEvent.name} </h4>
                            <h4>Hora de inicio: {detailEvent.start_date}</h4>
                            <h4>Duración: {detailEvent.duration_in_minutes}</h4>
                            <h4>Descripción: {detailEvent.description}</h4>
                            <h4>Categoría: {detailEvent.category_name}</h4>
                            <h4>Cpacidad máxima: {detailEvent.max_capacity}</h4>
                            <h4>Ubicación: {detailEvent.location_name}</h4>
                    </div>
            </ul>
        </div>
        </>
    )
}