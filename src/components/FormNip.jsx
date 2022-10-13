import React, { useState } from 'react'

const FormNip = ({radio, setRadio, radio2, setRadio2}) => {

    // validaciones con expresiones regulares
    const [nip, setNip] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [celular, setCelular] = useState("")
    const [correo, setCorreo] = useState("")
    const [rfc, setRfc] = useState("")
    const [nipError, setNipError] = useState(false)
    const [apellidoError, setApellidoError] = useState(false)
    const [nombreError, setNombreError] = useState(false)
    const [celularError, setCelularError] = useState(false)
    const [correoError, setCorreoError] = useState(false)
    const [rfcError, setRfcError] = useState(false)
    const [data, setData] = useState({
        Nip: "",
        Nombre: "",
        ApellidoMaterno: "",
        Celular: "",
        Correo: "",
        RFC: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        if(
            nipError === false &&
            apellidoError === false&&
            celularError === false&&
            correoError === false &&
            nombreError === false &&
            rfcError === false
        ){
            // aqui podriamos lanzar con un dispatch la info al backend
            alert("Exito")
            setData({
                Nip: "",
                Nombre: "",
                ApellidoMaterno: "",
                Celular: "",
                Correo: "",
                RFC: ""
            })
        }
        else{
            alert("Completa correctamente el formulario")
        }
        
    }

    // validar curp



    const validarNip = new RegExp(
        /^[0-9]+$/
    )
    
    const validarApellido= new RegExp(
        /^[a-zA-Z]+$/
    )
    const validarNombre= new RegExp(
        /^[a-zA-Z]+$/
    )
    const validarCelular=new RegExp(
        /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/
    )
    const validarCorreo= new RegExp(
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    )
    const validarRfc= new RegExp(
        /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/
    )


  

    const validar=(e)=>{

        if(!validarNip.test(nip) === true){
            alert("No esta bien")
            return setNipError(true)
        }
        if(!validarCelular.test(celular) === true){
            alert("No esta bien")
            console.log("no esta bien")
            return setCelularError(true)
        }
        if(!validarCorreo.test(correo) === true){
            alert("No esta bien")
            return setCorreoError(true)
        }
        if(!validarApellido.test(apellido) === true){
            alert("No esta bien")
            return setApellidoError(true)
        } 
        if(!validarNombre.test(nombre) === true){
            alert("No esta bien")
            return setNombreError(true)
        } 
        if(!validarRfc.test(rfc) === true){
            alert("No esta bien")
            return setRfcError(true)
        }
        // else{
        //     alert("todo bien")
        // }
      
        
    }
  
    const cambioRadio = ()=> {
        setRadio(!radio)
        setRadio2(false)
    }

    const handleChange=()=>{

    }

  return (
    <div className='FormNipContainer'>
        <div className='inputRadio'>
        <input  type="radio" name="" onClick={(e)=> cambioRadio()} checked={radio} value="Nip" id="" />Busqueda por NIP
        </div>
        <form action="" className='form'>
        <label htmlFor="" className='labelForm'>
            NIP
            <input placeholder='NIP' 
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setNip(e.target.value)
            )}   
            value={nip} className={setNipError === false ? 'inputValidado' : 'inputInvalido'} type="text" name="Nip" />
        </label >
        <label htmlFor="" className='labelForm'>
            Nombre
            <input 
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setNombre(e.target.value)
            )}  
            value={nombre}  className={setNombreError === false ? 'inputValidado' : 'inputInvalido'} placeholder='Nombre' type="text" name="Nombre" />
        </label>
        <label htmlFor="" className='labelForm'>
            Apellido Materno
            <input 
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setApellido(e.target.value)
            )}   
            value={apellido}  className={setApellidoError === false ? 'inputValidado' : 'inputInvalido'} placeholder='Apellido Materno' type="text" name="ApellidoMaterno" />
        </label>
        <label htmlFor="" className='labelForm'>
            Celular
            <input  
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setCelular(e.target.value)
            )}  
            value={celular} className={setCelularError === false ? 'inputValidado' : 'inputInvalido'} placeholder='Celular' type="text" name="Celular" />
        </label>
        <label htmlFor="" className='labelForm'>
            Correo Electronico
            <input  
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setCorreo(e.target.value)
            )}  
            value={correo} className={setCelularError === false ? 'inputValidado' : 'inputInvalido'} placeholder='Correo Electronico' type="text" name="Correo" />
        </label>
        <label htmlFor="" className='labelForm'>
            RFC
            <input  
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setRfc(e.target.value)
            )}  
            value={rfc} className={setRfcError === false ? 'inputValidado' : 'inputInvalido'} placeholder='RFC' type="text" name="Rfc" />
        </label>
        <br />
        {/* <input type="submit" /> */}
      </form>
      <div className={radio === true ? "visible" : "invisible"}>
      <button onClick={(e)=> validar()}>Enviar</button>
      </div>

    </div>
  )
}

export default FormNip
