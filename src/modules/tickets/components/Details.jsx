import React, {useData, useEffect, useState} from 'react'; 
import '../styles/Details.css'
import { useParams } from 'react-router-dom';

export const Details = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = '53|0YUBZXpiUBZ9ekaGE96eaXoG2yoZwxNwbNiFv3Ptd6cea4e1'; 
  
  const { id } = useParams();
  
  let userData = {
    id: id
  };

  
  const url = `http://127.0.0.1:8000/api/details/${id}`;

  useEffect(() => {

      const fetchData = async () => { ///
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
          setData(result); // Actualizar el estado con los datos recibidos
          console.log(result);
        } catch (error) {
          setError(error.message); // Actualizar el estado con el error
        } finally {
          setLoading(false); // Finalizar la carga
        }
      };
  
      fetchData(); // Llamar a la función para hacer la solicitud
      
  }, [url]);

  
  if (!data) {
      return <div className='mt-36'>Loading</div>; // Muestra un mensaje si no hay datos
  }

  if (error) {
    return <div className='mt-36'>Error: {error}</div>; // Muestra un mensaje si hay un error
  }
  
  return (
    <div className>
    <div className='flex mt-20 text-6xl justify-center'> Detalles del Ticket</div>
    <div className='flex justify-center mt-20 mb-10 text-white '>
      <div className='h-140 w-96 max-w-96 max-h-140 overflow-y-scroll  rounded-lg shadow-2xl shadow-black bg-white space-x-10 space-y-10'>
        
          <div className='max-fit bg-slate-700 rounded-lg text-lg px-4 py-1'> <b>ID</b> : {data[0].ticket_id}  </div>
        
          <div className='detailsContainer'> <b> Creador </b>  : {data[0].creador}  </div>
        
          <div className='detailsContainer'> <b> Label </b>  : {data[0].label}  </div>
        
          <div className='detailsContainer'>  <b> Asunto </b> : {data[0].matter}  </div>
        
          <div className='detailsContainer'><b> Archivo </b> : {data[0].file_request ? data[0].file_request : 'Sin archivo'} </div>
        
          <div className='detailsContainer'><b> Estatus </b> : {data[0].status_name} </div>
                    
          <div className='detailsContainer'><b> Progreso </b> : {data[0].progress} </div>
        
      </div>
    </div>

  </div> 
  )
}

