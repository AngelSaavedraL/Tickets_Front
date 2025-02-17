


export const Footer = () => {
  
  const year = new Date().getFullYear();

  return (
    <div className="flex bg-gray-800 text-white flex-col">
       
        <div className="mt-auto">
        <div>© {year} Task Manager</div>
        <div>
            <a href="#" className="mr-4">Política de privacidad</a>
            <a href="#" className="mr-4">Términos de servicio</a>
        </div>
        <div>Redes Sociales</div>
        </div>
    </div>
  )
}
