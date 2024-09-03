
export const ModalEdit = () => {
    return (
      <div className="flex justify-center mt-32 mb-10">
          <div className="border border-sky-950 w-[32rem] h-[35rem] rounded-lg shadow-2xl"> 
              <div className="mt-7 font-sans">
                <div className="flex flex-col mb-5">
                    <div className="mb-5 text-xl "> Actualizacion de Status </div>
                </div>

                <div class="flex justify-center">
                    <form className="flex flex-col">
                        <label className="mb-5  text-lg" htmlFor="status"> Status: </label>
                        <select className="mb-5 w-80 border border-black rounded-md" name="status"> 
                            <option value="1"> Creado </option>
                            <option value="2"> En Proceso </option>
                            <option value="3"> En espera </option>
                            <option value="4"> Terminado </option>
                        </select>
                        
                        <label htmlFor="comment" className="mb-5"> Comentario: </label>
                        <textarea className="max-h-40 h-32 min-h-20 w-80 border border-black rounded-lg" name="comment"></textarea>
                    </form>
                </div>
  
                <div className="mt-28 space-x-8 mb-5 flex justify-center ">
                    <button className="border rounded-md bg-blue-700 hover:bg-blue-800 px-2 py-1 text-white shadow-xl">
                        Actualizar
                    </button>
                    <button className="border-2 border-gray-800 rounded-md bg-gray-100 hover:bg-gray-300 px-2 py-1 shadow-xl" >
                        Cancelar
                    </button>
                </div>
              </div>
          </div>
      </div>
    )
  }