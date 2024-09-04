
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Login} from '../auth/components/Login';
import Table from '../modules/tickets/components/Table';
import {Details, Todo, Update } from '../modules/tickets/components';
import { Footer, Navbar,Button } from '../ui/components';
import { ModalFile } from '../ui/components/ModalFile';


function CustomRoutes() {

  return (
    <>

        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow mt-6">
            <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/tickets" element={<Table />} />
            <Route path="/ticketstodo" element={<Todo />} />
            {/* <Route path="/*" element={<TableRoutes />} />  aqui iran todas las rutas de esta archivo salvo, log out y login*/}
            <Route path="/details/:id" element= {<Details />} /> 
            <Route path="/update" element= { <Update/>} />
            <Route path="/file" element= { <ModalFile/>} />
            <Route path="/" element={<Navigate  to="login"/>} />
            </Routes>
          </main>
          <Footer />
        </div>
    </>
  )
}

export default CustomRoutes;