import { useState } from "react";
    
export const getTicketById = async (id) => { ///
            
        const apiUrl = import.meta.env.VITE_url_base;
        const url = `${apiUrl}details/${id}`;
        //const url = `http://127.0.0.1:8000/api/details/${id}`;
        const token = '53|0YUBZXpiUBZ9ekaGE96eaXoG2yoZwxNwbNiFv3Ptd6cea4e1';
        console.log(url);
        console.log('arriba esta la url');

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                },
            });
            if (!response.ok) {
            throw new Error('Error en la solicitud'); // Manejo de errores HTTP
            }
            const result = await response.json();
            console.log('actualizar los datos recibidos');
            console.log(result);
            return result[0];
        } catch (error) {
            console.log('Oops, something went wrong');
        } 
        
};

