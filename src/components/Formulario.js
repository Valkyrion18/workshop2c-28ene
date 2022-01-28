import React, { useState } from "react";
import styled from "styled-components";


const Registro = () => {

  const Container = styled.div`
    align-items: center;
    background-color: white;
    text-align: center;
    margin-top: 150px;
`
  const [inputNombre, cambiarInputNombre] = useState("");
  const [inputCorreo, cambiarInputCorreo] = useState("");
  const [inputContrasena, cambiarInputContrasena] = useState("");
  const [inputRepetirContrasena, cambiarInputRepetirContrasena] = useState("");

  const [cuentaCreada, cambiarCuentaCreada] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();


    console.log("Registro Éxitoso");
  }





  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(inputNombre))
  }, [inputNombre]);

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(inputCorreo))
  }, [inputCorreo]);

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(inputContrasena))
  }, [inputContrasena]);

  React.useEffect(() => {
    localStorage.setItem("form", JSON.stringify(inputRepetirContrasena))
  }, [inputRepetirContrasena]);


  const handleInputNombre = (e) => {
    cambiarInputNombre(e.target.value);
  }

  const handlecuentaCreada = (e) => {
    cambiarCuentaCreada(e.target.value);
  }

  const handleInputCorreo = (e) => {
    cambiarInputCorreo(e.target.value);
  }

  const handleInputContrasena = (e) => {
    cambiarInputContrasena(e.target.value)
  }

  const handleInputRepetirContrasena = (e) => {
    cambiarInputRepetirContrasena(e.target.value)
  }

  return (
    <Container>
      <form action="" onSubmit={handleSubmit} className="registro">
        <div>
          <label htmlFor='nombre'>Nombre Completo</label>
          <input
            type="text"
            id='nombre'
            name='nombre'
            placeholder=''
            value={inputNombre}
            onChange={handleInputNombre}

          />

        </div>

        <div>
          <label htmlFor='correo'>Correo Electrónico</label>
          <input
            type="email"
            id='correo'
            name='correo'
            placeholder='Ej: MariaPerez@gmail.com'
            value={inputCorreo}
            onChange={handleInputCorreo}

          />

        </div>

        <div>
          <label htmlFor='contrasena'>Escriba su Contraseña</label>
          <input
            type="password"
            id='contrasena'
            name='contrasena'
            placeholder=''
            value={inputContrasena}
            onChange={handleInputContrasena}

          />
        </div>

        <div>
          <label htmlFor='contrasena'>Repita su Contraseña</label>
          <input
            type="password"
            id='contrasena2'
            name='repetirContrasena'
            placeholder=''
            value={inputRepetirContrasena}
            onChange={handleInputRepetirContrasena}

          />
        </div>
        <button type='submit'>Crear Cuenta</button>
        {cuentaCreada && <p className="exito" onChange={handlecuentaCreada}>Cuenta Creada con Éxito!</p>}
      </form>

    </Container>
  )
}


export default Registro;