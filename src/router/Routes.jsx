
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../auth/components/Login';
import Table from '../tickets/components/Table';

function CustomRoutes() {

  return (
    <>
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/table" element={<Table />} />
          {/* <Route path="/*" element={<TableRoutes />} /> */}
        </Routes>
    </>
  )
}

export default CustomRoutes;