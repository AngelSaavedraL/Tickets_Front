
export const getStatisitics = async (id) => {
  
    //const url = `http://127.0.0.1:8000/api/statistics/${id}`;
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/statistics/${id}`;
    const token = '53|0YUBZXpiUBZ9ekaGE96eaXoG2yoZwxNwbNiFv3Ptd6cea4e1';

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
        return result;
    } catch (error) {      
        console.log('Request failed successfully');
    } 
}


/// My apis
// http://127.0.0.1:8000/api/create
// http://127.0.0.1:8000/api/tickets
// http://127.0.0.1:8000/api/created/1 (example)
// http://127.0.0.1:8000/api/details/3 (example)
// http://127.0.0.1:8000/api/update/5  (example) 
// http://127.0.0.1:8000/api/delete/7
// http://127.0.0.1:8000/api/statistics/4


