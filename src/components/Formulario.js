import React, { useState } from 'react'
import { calcularMarca, obtenerDiferenciaYear, obtenerPlan } from '../helper'
import {Div, Label, Select, InputRadio, Boton, Error} from '../styled/styledComponents'












const Formulario = ({ setResumen, setCargando }) => {


    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState(false)

    //extraer los valores del state
    const {marca, year, plan} = datos


    //Funcion que se ejecuta cunado el usuario elige las opciones del input
    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Funcion que se ejecuta cuando presiona el boton cotizar
    const handleSubmit = e => {
        e.preventDefault()

        //validar
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true)
            return
        }

        //si pasa la validacion
        setError(false)


        //base de 2000 
        const base = 2000 

        //Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year)
        
        //por cada año hacia atras hay que restar el 3% y sumar si es mas nuevo
        let resultado = base - (base * (diferencia * 3)) / 100
    
        
        //europeo 30%
        //americano 15%
        //asiatico 5%
        resultado = calcularMarca(marca) * resultado
        
        //Plan basico aumenta 20%
        //Plan completo aumenta 50%
        resultado = parseFloat(obtenerPlan(plan) * resultado).toFixed(2)
        
        //pasar al estado principal de App.js espinner pasa a verdadero
        setCargando(true)

        setTimeout(() => {
            
            //esconde el spinner
            setCargando(false)

            setResumen({
                cotizacion: resultado,
                datos
            })
        }, 2000)
    }






    return (
        <form
            onSubmit={handleSubmit}
        >
            {error && <Error>Todos los campos son obligatorios</Error>}

            <Div>
                <Label>País de F:</Label>
                <Select
                    name='marca'
                    value={marca}
                    onChange={handleChange}
                >
                    <option value=''>-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Div>
            
            <Div>
                <Label>Año:</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                </Select>
            </Div>

            <Div>
                <Label>Plan:</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basico'
                    checked={plan === 'basico'}
                    onChange={handleChange}
                />Básico

                <InputRadio
                    type='radio'
                    name='plan'
                    value='completo'
                    checked={plan === 'completo'}
                    onChange={handleChange}
                />Completo
            </Div>

            <Boton
                type='submit'
            >Cotizar</Boton>
        </form>
    )
}

export default Formulario
