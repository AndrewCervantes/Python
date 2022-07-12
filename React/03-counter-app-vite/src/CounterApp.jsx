/*
    Crear un nuevo componente dentro de la carpeta SRC llamado CounterApp

    El CounterApp debe de ser un Functional Component

    El contenido del CounterApp debe de ser:

        <h1>CounterApp</h1>
        <h2> { value } </h2>

    Donde "value" es una propiedad enviada desde el padre hacia el componente CounterApp (Debe ser númerica validada con PropTypes)

    Reemplazar en el index.js ó main.jsx el componente de <PrimeraApp /> por el componente <CounterApp /> (no se olviden del value que debe de ser un número)

    Asegúrense de no tener errores ni warnings (Cualquier warning no usado, comentar el código)

*/
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
        </>
    )
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired
}