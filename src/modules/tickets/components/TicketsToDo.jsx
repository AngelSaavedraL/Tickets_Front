import React, {useData, useEffect, useState} from 'react'; 
import '../styles/Table.css'
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/components';

export const Todo = () => {

    const url = 'http://127.0.0.1:8000/api/created';

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = '53|0YUBZXpiUBZ9ekaGE96eaXoG2yoZwxNwbNiFv3Ptd6cea4e1'; 



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
          } catch (error) {
            setError(error.message); // Actualizar el estado con el error
          } finally {
            setLoading(false); // Finalizar la carga
          }
        };
    
        fetchData(); // Llamar a la función para hacer la solicitud
        
    }, []);

    

    //------------------------------------------------------
    // const data =        
    
    if (!data) {
      return <div>Loading</div>; // Muestra un mensaje si no hay datos
    }

  return (
    <div className='flex justify-center'>
    <div className='table-container container'>
    <table className='table'>
        <thead> 
            <tr id="filterRow" className='headers' >
                <th >No. Ticket</th>
                <th>Etiqueta</th>
                <th>Asunto</th>
                <th>Comentario</th>
                <th>Usuario Responsable</th>
                <th>Status Ticket</th>
                <th>Progreso</th>
                <th>Opciones</th>
                <th>Detalles</th>

            </tr>
            <tr className="search">
                <th><input type="text" id="filterNoTicket" placeholder="  No. Ticket" />  </th>
                <th><input type="text" id="filterEtiqueta" placeholder="  Etiqueta" />  </th>
                <th><input type="text" id="filterAsunto" placeholder="  Asunto" />  </th>
                <th><input type="text" id="filterComentario" placeholder="  Comentario" />  </th>
                <th><input type="text" id="filterUsuarioResponsable" placeholder=" Responsable" /> 
                </th>
            <th>
                <select id="filterStatusTicket">
                <option value="Select"></option>
                <option value="Creado">Creado</option>
                <option value="En Proceso">En Proceso</option>
                <option value="Validado">Validado</option>
                <option value="Terminado">Terminado</option>
                <option value="En espera por falta de recurso">En espera por falta de recurso</option>
                <option value="No procede">No procede</option>
                <option value="Eliminado">Eliminado</option>
                </select>
            </th>
            <th></th>
            <th></th>
            <th></th>
            </tr>
        </thead>
        <tbody id="ticketsContainer">
            {
              data.map( ticket => (
                <tr className='ejemplo odd:bg-white even:bg-gray-300' key = {ticket.ticket_id}  >
                <td data-label="No. Ticket"> {ticket.ticket_id} </td>
                <td data-label="Etiqueta"> {ticket.label} </td>
                <td data-label="Asunto"> {ticket.matter} </td>
                <td data-label="Comentario"> 
                    <div className ='celda' > {ticket.description} </div>
                </td>
                <td data-label="Usuario Responsable"> {ticket.responsible_id} </td>
                <td data-label="Status Ticket"> {ticket.status_name} </td>
                <td data-label="Progreso"> {ticket.progress}</td>
                <td data-label="Opciones">
                  <div className="action_buttons grid grid-cols-2 ml-2 gap-x-10 gap-y-2">
                      
                      <Button to="/edit"       path="m11.998 2.001c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-4.496 6.028-.002-.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.048c0 .414.336.75.75.75h3.022c.414 0 .75-.336.75-.75s-.336-.756-.75-.756h-1.512c.808-1.205 2.182-1.998 3.74-1.998 2.483 0 4.5 2.016 4.5 4.5 0 2.483-2.017 4.5-4.5 4.5-1.956 0-3.623-1.251-4.242-2.997-.106-.299-.389-.499-.707-.499-.518 0-.88.513-.707 1.001.825 2.327 3.048 3.995 5.656 3.995 3.312 0 6-2.689 6-6 0-3.312-2.688-6-6-6-1.79 0-3.399.786-4.498 2.031z"/>
                      <Button to="/ticketstodo" path="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"/>
                      <Button to="/delete"       path="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z"/>
                  </div>
                </td> 
                <td>
                    <Link to = {`/details/${ticket.ticket_id}`} >
                        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '> Details </button>
                    </Link>
                </td>
              </tr> 
                ))
            }
            
        </tbody>
    </table>

    </div>
    </div>
  )
}




