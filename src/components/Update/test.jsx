import React, { useState, useEffect } from "react";

const EditUserForm = ({ user }) => {
    // Inicializamos el estado con los valores existentes del usuario
    const [formData, setFormData] = useState({
    name: '',
    email: ''
    });

    // useEffect para prellenar el formulario con los datos existentes
    useEffect(() => {
    if (user) {
        setFormData({
        name: user.name,
        email: user.email,
        });
    }
    }, [user, url]);  // Solo se ejecuta cuando `user` cambia

    // Manejador de cambios
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,  // Actualiza el campo que cambia
    });
    };

    // Manejador de envío del formulario
    const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu API o backend
    console.log('Datos actualizados:', formData);
    // Enviar con fetch o axios
    // fetch('/api/update-user', { method: 'POST', body: JSON.stringify(formData), ... })
    };

    return (
    <form onSubmit={handleSubmit}>
        <div>
        <label>Nombre:</label>
        <input
            type="text"
            name="name"
            value={formData.name}  // Prellenado con el valor existente
            onChange={handleInputChange}
        />
        </div>

        <div>
        <label>Email:</label>
        <input
            type="email"
            name="email"
            value={formData.email}  // Prellenado con el valor existente
            onChange={handleInputChange}
        />
        </div>

        <button type="submit">Guardar cambios</button>
    </form>
    );
};

export default EditUserForm;
