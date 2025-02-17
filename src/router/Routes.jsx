
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Login} from '../auth/Login/Login';
import { TableRoutes } from '../components/Routes/Routes';


function CustomRoutes() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow mt-6">
          <Routes>
            <Route path="/" element={<Navigate  to="login"/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<TableRoutes />} />
            
          </Routes>
        </main>
      </div>
    </>
  )
}

export default CustomRoutes;
