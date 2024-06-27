
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import userGET from "../service/getUser"

function Formlogin() {

    const [usu, setUsu] = useState("")
    const [correo, setCorreo] = useState("")
    const [conta, setConta] = useState("")
    const [mensaje, setMensaje] = useState("")
    const navigate = useNavigate();

    const envioInicio = async () =>{
    
        if (usu.trim("") === "" && conta.trim("") === "") {
            setMensaje("Ingrese un texto")
            return
    
        }else{
         const UserObte = await userGET()
         const vali = UserObte.find((user) => user.usuario === usu && user.correo === correo && user.contrasena === conta)
         //console.log(vali);
         if (vali) {
            setMensaje("Logueo Exitoso")
            //console.log("exito");
            setTimeout(() => {
                navigate("/home")
            }, 1000);
      
         } else {
            setMensaje("Correo o/y Contraseña incorrecto")
            //console.log("no valido");
         }
        }
    }

  return (
    <div className="login">
        <h5>{mensaje}</h5>
        <label htmlFor="">Usuario : </label>
        <input type="text"  value={usu} onChange={e => setUsu(e.target.value)} />
        <br /><br />
        <label htmlFor="">Correo : </label>
        <input type="text" value={correo} onChange={e => setCorreo(e.target.value)}/>
        <br /><br />
        <label htmlFor="">contraseña : </label>
        <input type="text"  value={conta} onChange={e => setConta(e.target.value)} />
        <br /><br />
        <button><Link to='/registro'>Ir a registrarme</Link></button>
        <br /><br />
        <button onClick={envioInicio}>Logiarme</button>
    </div>
  )
}

export default Formlogin