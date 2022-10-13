import React, { useState } from 'react'

const FormCurp = ({radio, setRadio, radio2, setRadio2}) => {

    const [curp, setCurp] = useState("")
    const [apellido, setApellido] = useState("")
    const [genero, setGenero] = useState("")
    const [telefono, setTelefono] = useState("")
    const [clave, setClave] = useState("")
    const [curpError, setCurpError] = useState(false)
    const [apellidoError, setApellidoError] = useState(false)
    const [telefonoError, setTelefonoError] = useState(false)
    const [claveError, setClaveError] = useState(false)
    const [data, setData] = useState({
        CURP: "",
        ApellidoPaterno: "",
        Genero: "",
        Telefono: "",
        Clave: "",
    })

    function handleSubmit(e){
        e.preventDefault()
        if(
            curpError === false &&
            apellidoError === false&&
            claveError === false&&
            telefonoError === false &&
            genero
        ){

    console.log("data", data)

            // aqui podriamos lanzar con un dispatch la info al backend
            alert("Exito")
            setData({
                CURP: "",
                ApellidoPaterno: "",
                Genero: "",
                Telefono: "",
                ClaveElector: "",
            })
        }
        else{
            alert("Completa correctamente el formulario")
        }
        
    }

    


    const validCurp = new RegExp(
        /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
    )
    
    const validarTelefono=new RegExp(
        /^(\(\+?\d{2,3}\)[\*|\s|\-|\.]?(([\d][\*|\s|\-|\.]?){6})(([\d][\s|\-|\.]?){2})?|(\+?[\d][\s|\-|\.]?){8}(([\d][\s|\-|\.]?){2}(([\d][\s|\-|\.]?){2})?)?)$/
    )
    const validarClave= new RegExp(
        /[A-Z]{6}[0-9]{8}[A-Z]{1}[0-9]{3}/
    )
    const validarApellido= new RegExp(
        /^[a-zA-Z]+$/
    )


  

    const validar=(e)=>{

        if(!validCurp.test(curp) === true){
            alert("No esta bien")
            return setCurpError(true)
        }
        if(!validarTelefono.test(telefono) === true){
            alert("No esta bien")
            return setTelefonoError(true)
        }
        if(!validarClave.test(clave) === true){
            alert("No esta bien")
            return setClaveError(true)
        }
        if(!validarApellido.test(apellido) === true){
            alert("No esta bien")
            return setApellidoError(true)
        }
         
    }

    const cambioRadio = ()=> {
        setRadio2(!radio2)
        setRadio(false)
    }

    const handleChange=()=>{

    }

    console.log("data", data)
  return (
    <div className='FormCurpContainer'>
        <div className='inputRadio'>
        <input type="radio" name="" onClick={(e)=> cambioRadio()} checked={radio2} id="" />Busqueda por CURP
        </div>
         
        <form action="" className='form'>
        <label htmlFor="" className='labelForm'>
            CURP
            <input className={setCurpError === false ? 'inputValidado' : 'inputInvalido'} 
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setCurp(e.target.value)
            )}  
            value={curp} placeholder='CURP' type="text" name="CURP" />
            {curpError && <p>Tu curp es incorrecta</p>}
        
        </label>
        {/* <label htmlFor="">
            NIP
            <input type="text" name="Nombre" />
        </label> */}
        <label htmlFor="" className='labelForm'>
            Apellido Paterno
            <input className={setApellidoError === false ? 'inputValidado' : 'inputInvalido'}  
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setApellido(e.target.value)
            )}  
            value={apellido} placeholder='Apellido Paterno' type="text" name="ApellidoPaterno" />
            
        </label>

        {/* convertirlo select */}
        <label htmlFor="" className='labelForm'>
        Genero
        <select name="Genero" id="" onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setGenero(e.target.value)
            )}  >
            <option value="" selected>Seleccione una Opción </option>
            <option value="hombre">HOMBRE</option>
            <option value="mujer">MUJER</option>
            <option value="No Identificado">NO IDENTIFICADO</option>
        </select>
        </label>
        <label htmlFor="" className='labelForm'>
            Telefono
            <input className={setTelefonoError === false ? 'inputValidado' : 'inputInvalido'} 
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setTelefono(e.target.value)
            )}  
            value={telefono} placeholder='Telefono' type="text" name="Telefono" />
        </label>
        <label htmlFor="" className='labelForm'>
            Clave de Elector
            <input className={setClaveError === false ? 'inputValidado' : 'inputInvalido'} 
            onChange={(e)=> handleChange(
                setData({
                    ...data,
                    [e.target.name]: e.target.value
                }),
                setClave(e.target.value)
            )}  
            value={clave} placeholder='Clave de Elector' type="text" name="Clave" />
        </label>
        {/* <input type="submit" /> */}
      </form>
      <div className={radio2 === true ? "visible" : "invisible"} onClick={(e)=>{handleSubmit(e)}}>
      <button onClick={(e)=> validar()}>Enviar</button>
      </div>
    </div>
  )
}

export default FormCurp
