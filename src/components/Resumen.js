import React from 'react'
import { primerMayuscula } from '../helper'
import {ContenedorResumen} from '../styled/styledComponents'

const Resumen = ({ datos }) => {


    //extraer los datos
    const { marca, year, plan} = datos

    if(marca === '' || year === '' || plan === '') return null



    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                
                <li>País de F.: { primerMayuscula(marca) }</li>
                <li>Año: { year }</li>
                <li>Plan: { primerMayuscula(plan) }</li>
            </ul>
        </ContenedorResumen>
    )
}

export default Resumen
