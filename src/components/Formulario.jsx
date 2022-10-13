import React, { useState } from 'react'
import FormCurp from './FormCurp'
import FormNip from './FormNip'
import Header from './Header'

import "./Formulario.css"

const Formulario = () => {
    const [radio, setRadio] = useState(false)
    const [radio2, setRadio2] = useState(false)
  return (
    <div className='container'>
      <Header/>
    <div className='Formulario'>
      <div className='containerForm'>
        <div className='headerFomContainer'>
            <h1>OPERAM</h1>
            <h3>Formulario de registro de solicitudes</h3>
        </div>
        <div className='DatosUsuarioContainer'>
            <h2>datos del Usuario</h2>
        </div>
        <div className='advertenciaContainer'>
            <h4>Si ya realizó anteriormente un registro, puede usar la opción de "Buscar Usuario", por NIP o por CURP</h4>
        </div>
        <div className='obligatoriosContainer'>
            <h4>Los campos marcados con (*) son obligatorios</h4>
        </div>
        <div className='FormulariosJuntos'>

      <FormNip radio={radio} setRadio={setRadio} radio2={radio2} setRadio2={setRadio2}/>   
      <FormCurp radio={radio} setRadio={setRadio} radio2={radio2} setRadio2={setRadio2}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Formulario
