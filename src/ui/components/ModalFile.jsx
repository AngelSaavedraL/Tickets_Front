
export const ModalFile = () => {
  return (
    <div className="flex items-center h-screen justify-center"> 
        <div className="fixed"> 
            <div className="border border-sky-950 border-opacity-25 rounded-lg shadow-2xl"> 
                <div className="mt-7 font-sans">
                    <div className="flex flex-col mb-5">
                        <div className="mb-5 text-xl"> Editar Archivo </div>
                    </div>
                    <div className="flex justify-center mb-5">
                        <svg className="w-24 h-24 text-white dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
                        </svg>
                    </div>
                    <div className="flex justify-center">
                        <form className="flex flex-col px-2 py-4">    
                            <input type="file"  className="max-h-20 py-1 w-80 bg-blue-900 hover:bg-blue-950 text-white rounded-lg" name="comment"></input>
                        </form>
                    </div>
    
                </div>
            </div>
        </div>
        
    </div>
  )
}
