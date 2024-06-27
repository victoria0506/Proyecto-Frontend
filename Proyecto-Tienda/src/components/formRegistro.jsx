import {useState } from "react"
import { Link } from "react-router-dom"
import AddPost from "../service/PostUser"


function FormRegistro() {

    const [usuario, setUsuario] = useState("")
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [mensaje, setMensaje] = useState("")

const mostrar = async ()=>{
    
    if (usuario.trim("") === "" && contraseña.trim("") === "" && correo.trim("") === "") {
        setMensaje("Ingrese un texto")
        return
    }else{
        AddPost(usuario, correo, contraseña)
        setMensaje("registro exitoso")
    }
}

  return (
    <div className="login">
        <h5>{mensaje}</h5>
        <label htmlFor="">Usuario : </label>
        <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <br /><br />
        <label htmlFor="">Correo : </label>
        <input type="text" value={correo} onChange={e => setCorreo(e.target.value)}/>
        <br /><br />
        <label htmlFor="">contraseña : </label>
        <input type="text" value={contraseña} onChange={e => setContraseña(e.target.value)}/>
        <br /><br />
        <button onClick={mostrar}>Registar Usuario</button>
        <br /><br />
        <button><Link to='/login'>Ir al login</Link></button>
    </div>
  )
}

export default FormRegistro