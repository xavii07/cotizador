import React from 'react'
import {Mensaje, ResultadoCotizacion, TextoCotizacion} from '../styled/styledComponents'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const Resultado = ({ cotizacion }) => {


    return (
        
        (cotizacion === 0) ? <Mensaje>Elige el pais de procedencia,  año y tipo de seguro</Mensaje>
             : <ResultadoCotizacion 
             >
                    <TransitionGroup
                        component='p'
                        className='resultado'
                        >
                        <CSSTransition
                            classNames='resultado'
                            key={cotizacion}
                            timeout={ { enter:500, exit:500 } }
                            >
                            <TextoCotizacion>Total a pagar: $ {cotizacion}</TextoCotizacion>
                            
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion> 

    )
}

export default Resultado
