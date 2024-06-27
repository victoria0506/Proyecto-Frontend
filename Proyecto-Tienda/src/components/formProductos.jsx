

const formProductos = () => {
  return (
    <div>
      <label htmlFor="">Nombre del Producto : </label>
      <input type="text"  placeholder="Producto"/>
      <br /><br />
      <label htmlFor="">Precio del producto : </label>
      <input type="text" placeholder="Precio" />
      <br /><br />
      <label htmlFor="">Material Del producto</label>
      <input type="text" placeholder="Material" />
    </div>
  )
}

export default formProductos
