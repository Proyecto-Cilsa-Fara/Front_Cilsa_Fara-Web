import {useState} from "react";
import "./ContactComponent.css"

const Contact = () => {
    
    const [formData, setFormData] =useState({
        name:"",
        email:"",
        message:"",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        alert("Mensaje enviado con éxito!");
    };


    return (
        <div className="flex flex-col items-center justify-end min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">Contacto</h2>

            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md bacColor p-6 rounded-lg shadow-md">
                <label className="mb-2 text-sm font-semibold text-white">Nombre</label>
                <input 
                    className="mb-4 p-2 border rounded-md"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label className="mb-2 text-sm font-semibold text-white">Email</label>
                <input 
                    className="mb-4 p-2 border rounded-md bg-pink"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label className="mb-2 text-sm font-semibold text-white">Mensaje</label>
                <textarea 
                    className="mb-4 p-2 border rounded-md h-32"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>


                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" >Enviar</button>
            </form>
        </div>
    );
};



export default Contact;