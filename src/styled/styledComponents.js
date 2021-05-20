import styled from 'styled-components'

export const Contenedor = styled.div`
  max-width:600px;
  height:100vh;
  margin:0 auto;
`;

export const ContenedorFormulario = styled.div`
  background-color:#fff;
  padding:3rem;
`;

export const ContenedorHeader = styled.header`
    background-color:#26c6da;
    font-weight:bold;
    padding:0.5rem;
`;

// COMPONENTE FORMULARIO
export const Div = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items:center;
`;

export const Label = styled.label`
    flex:0 0 100px;
    font-weight:700;
`;

export const Select = styled.select`
    -webkit-appearance:none;
    border:1px solid #e1e1e1;
    padding:0.8rem;
    width:100%;
    display:block;
    outline:none;
    border-radius:3px;
`;

export const InputRadio = styled.input`
    margin:0 0.8rem;
`;

export const Boton = styled.button`
    background-color:#00838f;
    width:100%;
    color:#cddadc;
    padding:0.8rem;
    text-transform:uppercase;
    font-weight:bold;
    font-size:1rem;
    border:none;
    outline:none;
    border-radius:5px;
    margin-top:2rem;
    letter-spacing:0.12rem;
    transition: background-color .5s ease;

    &:hover {
        cursor: pointer;
        background-color:#09e1f5;
        color:#fff;
    }  
`;

export const Error = styled.div`
    background-color:#ec1b1b;
    color:#fff;
    padding:0.8rem;
    text-align:center;
    margin-bottom:2rem;
    border-radius:.2rem;
    width:100%;
    letter-spacing:1.5px;
`;

// COMPONENTE RESUMEN
export const ContenedorResumen = styled.div`
    padding:1rem;
    margin-top:1.5rem;
    border-radius:10px 10px 0 0;
    border:1px dotted rgb(127,224,237);
    background-color:#ddd;
    letter-spacing:1.5px;
    font-weight:bold;
`;


// COMPONENTE RESULTADO
export const Mensaje = styled.p`
    background-color:rgb(127, 224, 237,.7);
    padding:0.8rem;
    text-align:center;
    margin-top:2rem;
    border-radius:3px;
    color:#ee0ab5;
    font-size:12px;
    font-weight:bold;
`;

export const ResultadoCotizacion = styled.div`
    background-color:rgb(127, 224, 237);
    padding:.3rem;
    margin-top:.5rem;
    text-align:center;
    position:relative;
    border-radius:0 0 10px 10px;
    border:1px solid #26c6da;
`;

export const TextoCotizacion = styled.span`
    color:#00838f;
    padding:0.5rem; 
    font-weight:bold;
    text-transform:uppercase;
    margin:0;
`;



