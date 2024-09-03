
export const ModalDelete = () => {
  return (
    <div className="flex justify-center mt-32" >
        <div className="border border-sky-950 w-[26rem] bg-white h-[15rem] rounded-lg"> 
            <div className="mt-7 font-sans " >
                <div className="flex justify-center mb-5">
                    <svg className="w-20 h-20 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </div>
                Realmente deseas  <b> Eliminar </b> este ticket?

                <div className="mt-10 space-x-8 mb-5 flex justify-center ">
                    <button className="border rounded-md bg-red-600 hover:bg-red-700 px-2 py-1 text-white shadow-xl">
                        Eliminar
                    </button>
                    <button className="border-2 rounded-md bg-gray-100 hover:bg-gray-300 px-2 py-1 shadow-xl" >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
