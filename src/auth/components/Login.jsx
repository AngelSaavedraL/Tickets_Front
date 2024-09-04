import React, {useData} from 'react'; 
import { replace, useNavigate } from 'react-router-dom';
import '../styles/Login.css';



export  function Login() {

    const navigate  = useNavigate();

    const signedIn = () => {
        navigate('/tickets', {
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
        <div>

            <div className='flex justify-center mt-48 mb-14'>
                <div id='login_container' className='login_container '>
                    <h4 className='m-4 text-xl text-center text-white font-medium'>Inicio de Sesion</h4>
                    <form className=' form_login' >
                        <div className='flex flex-col '>
                            <label htmlFor="nro_nomina left">ID: </label>
                            <input className='border ' id="nro_nomina"  placeholder=' Nro de Nomina' required/>
                            <label htmlFor="password">Password: </label>
                            <input className='border ' id="password"  type="password" placeholder=' Password'  required />

                            
                        </div>

                        <div className='justify-center '>
                            <button className='btnLogin' onClick={verifyUser}>
                                <div className='flex justify-center'> Log In </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        
    );
}

