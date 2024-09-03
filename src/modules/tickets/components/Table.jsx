import React, {useData, useEffect, useState} from 'react'; 
import '../styles/Table.css'
import { Link } from 'react-router-dom';
import { Button } from '../../../ui/components';

function Render(){

    const url = 'http://127.0.0.1:8000/api/tickets';

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
     
    
    if (!data) {
        return <div>Loading</div>; // Muestra un mensaje si no hay datos
    }
    

    return <>
        <div className='flex justify-center'>
        <div className='table-container container'>
        <table className='table'>
            <thead> 
                <tr id="filterRow" className='headers ' >
                    <th className='rounded-tl-lg' >No. Ticket</th>
                    <th>Etiqueta</th>
                    <th>Asunto</th>
                    <th>Comentario</th>
                    <th>Usuario Responsable</th>
                    <th>Status Ticket</th>
                    <th>Progreso</th>
                    <th>Opciones</th>
                    <th className='rounded-tr-lg'>Detalles</th>

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
                        <tr key = {ticket.ticket_id} className= "odd:bg-white even:bg-gray-300" >
                        <td data-label="No. Ticket"> 
                            <div className='celda'> {ticket.ticket_id} </div> 
                        </td>
                        <td data-label="Etiqueta"> 
                            <div className='celda'> {ticket.label} </div>     
                        </td>
                        <td data-label="Asunto">  
                            <div className='celda'> {ticket.matter} </div>
                        </td>
                        <td data-label="Comentario"> 
                            <div className ='celda' > {ticket.description} </div>
                        </td>
                        <td data-label="Usuario Responsable">  
                            <div className='celda'> {ticket.responsible_id} </div>
                        </td>
                        <td data-label="Status Ticket"> {ticket.status_name} </td>
                        <td data-label="Progreso"> {ticket.progress}</td>
                        <td data-label="Opciones">
                            <div className="action_buttons grid grid-cols-2 ml-2 gap-x-10 gap-y-2 ">
                               <Button to="/edit"        path="M5 8a4 4 0 1 1 7.796 1.263l-2.533 2.534A4 4 0 0 1 5 8Zm4.06 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h2.172a2.999 2.999 0 0 1-.114-1.588l.674-3.372a3 3 0 0 1 .82-1.533L9.06 13Zm9.032-5a2.907 2.907 0 0 0-2.056.852L9.967 14.92a1 1 0 0 0-.273.51l-.675 3.373a1 1 0 0 0 1.177 1.177l3.372-.675a1 1 0 0 0 .511-.273l6.07-6.07a2.91 2.91 0 0 0-.944-4.742A2.907 2.907 0 0 0 18.092 8Z"/>
                               <Button to="/ticketstodo" path="M12 3a1 1 0 0 1 .78.375l4 5a1 1 0 1 1-1.56 1.25L13 6.85V14a1 1 0 1 1-2 0V6.85L8.78 9.626a1 1 0 1 1-1.56-1.25l4-5A1 1 0 0 1 12 3ZM9 14v-1H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4v1a3 3 0 1 1-6 0Zm8 2a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"/>
                            </div>
                        </td>
                        <td >
                            <Link to = {`/details/${ticket.ticket_id}`} >
                                <button className=' text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '> Details </button>
                            </Link>
                        </td>
                    </tr> 
                     ))
                }
                
            </tbody>
        </table>

        </div>
        </div>
        
    </>
}

export default Render;

