export const getTableData = async () => { ///
    
    const apiUrl = process.env.REACT_APP_API_URL;
    const url = `${apiUrl}/tickets`;
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
    
};