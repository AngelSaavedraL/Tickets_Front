import React, {useData} from 'react'; 
import { replace, useNavigate } from 'react-router-dom';
import render from '../../tickets/components/Table';
// import tickets from '/tickets';



export default function Login() {

    const navigate  = useNavigate();

    const signedIn = () => {
        navigate('/table', {
            replace:true
        });
    } 
    
    function verifyUser(e) {
        e.preventDefault();
        const nro_nomina = document.getElementById('nro_nomina').value;
        const password = document.getElementById('password').value;
    
        const url = 'http://127.0.0.1:8000/api/login';
    
        let userData = {
            nro_nomina: nro_nomina,
            password: password
        };
    
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Se validó el login");
            console.log(data);
            signedIn();
            
        }) 
        .catch(error => console.error('Error: Credenciales Invalidos', error)); // Aquí se maneja el error usando una alerta
    }

    return (
        <div id='login_container' className='border rounded-2xl p-5 shadow-lg shadow-slate-400 center h-96 w-96 space-y-8 bg-gray-800'>
            <h4 className='m-4 text-xl text-center'>Inicio de Sesion:</h4>
            <form className='space-y-3 grid' >
                <label htmlFor="nro_nomina left">ID: </label>
                <input className='border ' id="nro_nomina"  placeholder=' Nro de Nomina' required/>
                <label htmlFor="password">Password: </label>
                <input className='border ' id="password"  type="password" placeholder=' Password'  required />
                <button className='mt-1' onClick={verifyUser}>
					Login
                </button>
            </form>
        </div>
    );
}

