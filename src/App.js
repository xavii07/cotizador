import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Resultado from './components/Resultado';
import Resumen from './components/Resumen';
import Spinner from './components/Spinner';
import { Contenedor, ContenedorFormulario } from './styled/styledComponents';




function App() {
  

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  })

  //estado del spinner
  const [cargando, setCargando] = useState(false)


  //extraer los datos
  const { cotizacion, datos } = resumen

  return (
   
    <Contenedor>
      <Header titulo='Cotizador de Seguros'/>

      <ContenedorFormulario>
        <Formulario 
          setResumen={setResumen}
          setCargando={setCargando}
        />

        {cargando && <Spinner/>}

        

        {!cargando &&
        <> 
              <Resumen datos={datos}/> 
              <Resultado cotizacion={cotizacion}/>
        </>}
      
        
      </ContenedorFormulario>
    </Contenedor> 

  );
}

export default App;
