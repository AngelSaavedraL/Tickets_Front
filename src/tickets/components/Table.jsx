import React, {useData} from 'react'; 
import '../styles/Table.css'
// import tickets from '/tickets';


function Render(){
    return <>
        <div className='flex justify-center'>
        <div className='table-container relative overflow-x-auto rounded-lg overflow-y-auto mt-9 border h-96 w-4/5 p-5'>
        <table className = " ">
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
                <tr className="selectores search">
                    <th><input type="text" id="filterNoTicket" placeholder="  No. Ticket" />  </th>
                    <th><input type="text" id="filterEtiqueta" placeholder="  Etiqueta" />  </th>
                    <th><input type="text" id="filterAsunto" placeholder="  Asunto" />  </th>
                    <th><input type="text" id="filterComentario" placeholder="  Comentario" />  </th>
                    <th><input type="text" id="filterUsuarioResponsable" placeholder="  Usuario Responsable" /> 
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
                <tr>
                    <td data-label="No. Ticket">gg</td>
                    <td data-label="Etiqueta">s</td>
                    <td data-label="Asunto">d</td>
                    <td data-label="Comentario">c</td>
                    <td data-label="Usuario Responsable">c</td>
                    <td id ="22" data-label="Status Ticket">e</td>
                    <td data-label="Progreso"></td>
                    <td data-label="Opciones">
                        <div className="opciones_pequeñas"></div>
                    </td>
                </tr>
                
            </tbody>
        </table>

        </div>
        </div>
        
    </>
}

export default Render;