import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Update/FormTickets.css';
import { Form, useParams } from 'react-router-dom';
import { getTicketById } from '../../services/getTicketTicketById';

// necesito la info del ticket para que rellene los inputs, ademas de tener info con la cual comparar la entrada y asi determinar si ingresaron algo distinto

export const Update = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = '53|0YUBZXpiUBZ9ekaGE96eaXoG2yoZwxNwbNiFv3Ptd6cea4e1'; 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
          data,
          [name]: value,  // Actualiza el campo que cambia
        });

        console.log(data);
        console.log('Arriba debe de ir el valor de data');
    };


    const [formData, setFormData] = useState({ //label, matter, description, file , corresponsibles
        label:'',
        matter:'',
        description:'',
    });

    const { id } = useParams();

    console.log('abajo debe de estar');

    if (id){

        useEffect(() => {

            const help = async() => {
                try{
                    const he = await getTicketById(id);
                    setData(he);
                }catch (error) {
                    setError(error.message); // Actualizar el estado con el error
                } finally {
                    setLoading(false); // Finalizar la carga
                }
            };

            help(); // Llamar a la función para hacer la solicitud

        }, [id]);


        if (!data) {
            return <div className='mt-36'>Loading</div>; // Muestra un mensaje si no hay datos
        }

        if (error) {
        return <div className='mt-36'>Error: {error}</div>; // Muestra un mensaje si hay un error
        }
    } 

    

    return (
        <div>
            <div className='mt-20 text-3xl'> Actualizar Ticket</div>
            
            <div className="form-ticket flex mt-10 mb-40 justify-center">

                <div className="shadow-2xl w-96 justify-center border rounded-md">
                        
                    <form className=' grid justify-center  border rounded-md'>
                        
                    {data ? (
                        <div className='text-xl border rounded-full w-auto px-3 mt-3'>
                            {data.ticket_id}
                        </div>
                        ) : null}

                        <label className = "smlabel" htmlFor="label">Etiqueta: </label>
                        <input 
                            id="label"  
                            placeholder='Etiqueta' 
                            defaultValue={data ? data.label : ""}  
                            onChange={handleInputChange}
                            required/>



                        <label className = "smlabel" htmlFor="matter">Asunto: </label>
                        <input  
                            id="matter"  
                            type="text" 
                            placeholder='Asunto' 
                            defaultValue={data ? data.matter : ""} 
                            onChange={handleInputChange}
                            required />

                        <label className = "smlabel" htmlFor="description">Motivo: </label>
                        <textarea 
                            id="description" 
                            defaultValue={data ? data.description : ""} 
                            onChange={handleInputChange}
                            required />

                        <label className = "smlabel" htmlFor="user_responsible"> Usuario Responsable: </label>
                        <input 
                            id="user_responsible"  type="text" placeholder='Responsable' defaultValue={data ? data.responsible_id : ""} disabled />

                        <label className = "smlabel" htmlFor="user_responsible"> Usuarios Corresponsables: </label>

                        <select className='corresponsible_list smlabel'> 
                            <option value='1'> Corresponsable 1 </option>
                            <option value='2'> Corresponsable 2 </option>
                            <option value='3'> Corresponsable 3 </option>    
                        </select>

                        <label htmlFor='file_request' className = "smlabel"> Elije un nuevo archivo:</label>
                        <input className="border" id="file_request" type="file" name = "prueba" />
                         
                        <div className='justify-center'>
                            <a className='flex justify-center down' href='/' download>
                                <button className='border border-black px-2 rounded-lg'> Descargar Archivo </button>
                            </a>
                            
                            <button className='btn_submit' >
                                Actualizar
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
        
        
    )
}
