import React from 'react'
import {ContenedorHeader} from '../styled/styledComponents'











const Header = ({titulo}) => {


    return (
        <ContenedorHeader>
            <h1>{titulo}</h1>
        </ContenedorHeader>
    )
}

export default Header
