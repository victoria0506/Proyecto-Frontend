
import { useState } from "react"
import postProductos from "../service/postProductos"


const FormProductos = () => {
    const [producto, setProducto] = useState("")
    const [precio, setPrecio] = useState("")
    const [material, setMaterial] = useState("")
    const [mensaje, setMensaje] = useState("")

    const produc = async () => {
      if (producto.trim("") === "" && precio.trim("") === "" && material.trim("") === "") {
        setMensaje("Ingrese un texto")
        return
    }else{
      postProductos(producto, precio, material)
      setMensaje("Se añadio correctamente")
    }
    }

  return (
    <div>
      <label htmlFor="">Nombre del Producto : </label>
      <input type="text"  placeholder="Producto" value={producto} onChange={(e) => setProducto(e.target.value)}/>
      <br /><br />
      <label htmlFor="">Precio del producto : </label>
      <input type="text" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
      <br /><br />
      <label htmlFor="">Material Del producto : </label>
      <input type="text" placeholder="Material" value={material} onChange={(e) => setMaterial(e.target.value)}/>
      <br /><br />
      <button onClick={produc}>Añadir Producto</button>
      <br /><br />
      <h5>{mensaje}</h5>


      </div>
  )
}


export default FormProductos

