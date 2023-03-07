import React, {Component} from 'react';

class MiComponente extends Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon'],
            caloria : 400
        }
        return (
            <div className='mi-componente'>
                <h2>{'Recetea: ' + receta.nombre}</h2>
                <h2>{'Calorias: ' + receta.caloria}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return(
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr/>
            </div>
        );
    }
}

export default MiComponente;