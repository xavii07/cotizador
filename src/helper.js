
//obtiene la diferencia de años
export const obtenerDiferenciaYear = year => {
    return new Date().getFullYear() - year
}

//calcula el total a pagar segun el continente de procedencia
export const calcularMarca = marca => {

    let incremento

    switch (marca) {
        case 'europeo':
            incremento = 1.3
            break;
        case 'americano':
            incremento = 1.15
            break;
        case 'asiatico':
            incremento = 1.05
            break;
    
        default:
            break;
    }

    return incremento
}

//calcula el tipo de seguro
export const obtenerPlan = plan => {
    return plan === 'basico' ? 1.2 : 1.5
}

//convertir primera letra en mayuscula
export const primerMayuscula = texto => {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}