import '../styles/FormTickets.css';

// necesito la info del ticket para que rellene los inputs, ademas de tener info con la cual comparar la entrada y asi determinar si ingresaron algo distinto

export const Update = () => {
  
    return (
        <div>
            <div className='mt-20 text-3xl'> Actualizar Ticket</div>
            <div className="form-ticket flex mt-10 mb-40 justify-center">

                <div className="shadow-2xl w-96 justify-center border rounded-md">
                        
                    <form className='space-y-2 grid justify-center  border rounded-md'>
                        
                        <label htmlFor="label">Etiqueta: </label>
                        <input  id="label"  placeholder='Etiqueta' required/>

                        <label htmlFor="matter">Asunto: </label>
                        <input  id="matter"  type="text" placeholder='Asunto'  required />

                        <label htmlFor="description">Motivo: </label>
                        <textarea  id="description" required> </textarea>

                        <label htmlFor="user_responsible"> Usuario Responsable: </label>
                        <input  id="user_responsible"  type="text" placeholder='Responsable'  disabled />

                        <label htmlFor="user_responsible"> Usuarios Corresponsables: </label>

                        <select className='corresponsible_list'> 
                            <option value='1'> Corresponsable 1 </option>
                            <option value='2'> Corresponsable 2 </option>
                            <option value='3'> Corresponsable 3 </option>    
                        </select>

                        <input className="border" id="file_request" type="file"></input>

                        <div className='justify-center'>
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
