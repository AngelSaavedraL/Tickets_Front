
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Table from '../Table/Table';
import {Todo, Update } from '../../components';
import { Footer, Navbar,Button } from '../../ui';
import { Formulario } from '../Update/UpdateHook';
import { NewUseForm } from '../Update/NewUseForm';

export const TableRoutes = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow mt-6">
      <Routes>
      <Route path="/tickets" element={<Table />} />
      <Route path="/ticketstodo" element={<Todo />} />
      {/* <Route path="/*" element={<TableRoutes />} />  aqui iran todas las rutas de esta archivo salvo, log out y login*/} 
      <Route path="/update" element= { <Update/>} />
      <Route path="/update/:id" element= { <Update/>} />
      <Route path="/updatehook" element= { <Formulario/>} />
      <Route path='/newhookform' element= {<NewUseForm/>} />
      <Route path="/" element={<Navigate  to="login"/>} />
      </Routes>
    </main>
    <Footer />
  </div>
  )
}
