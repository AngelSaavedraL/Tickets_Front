import { useState } from "react";
import { useForm } from "react-hook-form"

export const NewUseForm = () => {

    const {data , setData} = useState('');

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        
    });

    const onSubmit = (data) => {
        console.log(data);
    } 

    //Etiqueta, asunto, motivo, usuario Responsable, usuarios corresponsables, archivo

  return (

    <div className="mt-28">
    <div className='text-3xl'> Actualizar Ticket</div>
    
    <div className="form-ticket flex mt-10 mb-40 justify-center ">

        <div className="shadow-2xl justify-center  border rounded-md  w-2/5 ">
                
            <form className=' grid justify-center ' onSubmit={handleSubmit(onSubmit)}>
                
                {/* {!data ? (
                    <div className='text-xl border rounded-full w-auto px-3 mt-3'>
                        {data.ticket_id}
                    </div>
                    ) : null} */}

                <div className="mt-4 grid space-y-1">
                    <label className = "smlabel" > Etiqueta:  </label>
                    <input type="text" {...register('label',{
                        required: true,
                        maxLength: 15
                    })} />
                    {errors.label?.type === 'required' && <p className="">El Campo etiqueta es requerido</p>}
                    {errors.label?.type === 'maxLength' && <p>La etiqueta no debe exceder los 15 caracteres</p>}
                </div>

                <div className="grid mt-4 space-y-1">
                    <label className = "smlabel" >Asunto:</label>
                    <input type="text" {...register('matter', {
                        required: true,
                        maxLength: 60,
                        minLength: 10
                    })} />
                    {errors.matter?.type === 'required' && <p>El campo asunto es requerido</p>}
                    {errors.matter?.type === 'maxLength' && <p>El campo asunto debe tener menos de 60 caracteres</p>}
                    {errors.matter?.type === 'minLength' && <p> El asunto debe tener mas de 10 caracteres </p>}
                </div>
                <div className="grid mt-4 space-y-1">
                    <label className = "smlabel" >Descripcion</label>
                    <textarea type="text" {...register('description', {
                        required: true,
                        maxLength: 60,
                        minLength: 15
                    })} />
                    {errors.description?.type === 'required' && <p>El campo descripcion es requerido</p>}
                    {errors.description?.type === 'maxLength' && <p>El campo descricion debe tener menos de 60 caracteres</p>}
                    {errors.description?.type === 'minLength' && <p> El asunto debe tener mas de 10 caracteres </p>}
                </div>

                <div className="grid mt-4 space-y-1">
                    <label className = "smlabel">Usuario Responsable</label>
                    <input id= 'responsible' type="text" {...register('responsible', {
                        required: true,
                        maxLength: 60,
                        minLength: 15
                    })}
                    disabled={true} 
                    />
                    {errors.responsible?.type === 'required' && <p>El campo asunto es requerido</p>}
                    {errors.responsible?.type === 'maxLength' && <p>El campo descricion debe tener menos de 60 caracteres</p>}
                    {errors.responsible?.type === 'minLength' && <p> El asunto debe tener mas de 10 caracteres </p>}
                </div>

                <div  className="mb-12 mt-1 grid ">
                    <label className = "smlabel" > Select an option:</label>
                    <select id="mySelect" className="border rounded-md" {...register("mySelect", { required: true })}>
                        <option value="">Select...</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    {errors.mySelect && <span>This field is required</span>}
                </div>

                <input type="submit" className="border mb-5 "/>
            </form>
        </div>

    </div>
</div>


  )
}



