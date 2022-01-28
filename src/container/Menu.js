import React from 'react';
import './style-menu.css'

export const Menu = () => {
  return (
    <div className='container'>
      <h1>Practica tus conocimientos en la categoria que prefieras</h1>
      <div className="categorias">
        <button className="boton-categoria">
          <img src="https://res.cloudinary.com/dkf2jot5c/image/upload/v1643397859/Workshop2/IconoHTML_mabfws.png" className="imagen-boton" alt=''/>
        </button>
        <h3>HTML</h3>

        <button className="boton-categoria">
          <img src="https://res.cloudinary.com/dkf2jot5c/image/upload/v1643397859/Workshop2/IconoCSS_ti6ly0.png" alt="" className="imagen-boton"/>
        </button>
        <h3>CSS</h3>

        <button className="boton-categoria">
          <img src="https://res.cloudinary.com/dkf2jot5c/image/upload/v1643397859/Workshop2/IconoJS_uk7abo.png" className="imagen-boton" alt=""/>
        </button>
        <h3>JS</h3>
      </div>
      <div className='container-footer'>
        <div className='elemento-footer'>
          <a href="/"><img src="https://res.cloudinary.com/dkf2jot5c/image/upload/v1643399625/Workshop2/Footer1_oylgfk.png" alt="" className='imagen-footer'/></a>
          <h5 className='home'>Home</h5>
        </div>
        
        <div className='elemento-footer'>
          <a href="/"><img src="https://res.cloudinary.com/dkf2jot5c/image/upload/v1643399625/Workshop2/Footer3_buamnu.png" alt="" className='imagen-footer'/></a>
          <h5>Estadisticas</h5>
        </div>

        <div className='elemento-footer'>
          <a href="/"><img src="https://res.cloudinary.com/dkf2jot5c/image/upload/v1643399625/Workshop2/Footer2_qwitbj.png" alt="" className='imagen-footer'/></a>
          <h5>Perfil</h5>
        </div>

      </div>
    </div>
  )
};

export default Menu;
