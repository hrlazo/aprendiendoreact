import React, {Component} from "react";

class SeccionPruebas extends Component{

    contador = 0

    /* Opcione 1
    constructor(props){
        super(props)

        this.state = {
            contador: 0
        }
    }
    */

    /* Opcione 2 */ 
    state = {
        contador: 0
    };

    /* Opcion 1 */
    // sumar(){
    //     this.setState({
    //         contador: (this.state.contador + 1)
    //     });
    // }

    // restar(){
    //     this.setState({
    //         contador: (this.state.contador - 1)
    //     });
    // }

    /* Con esta forma evitamos el .bind(this) */
    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render(){
        return(
            <div id="articles">
                <h2 className="subheader">Últimos artículos</h2>
                <article className="article-item" id="article-template">
                    <div className="image-wrap">
                        <img src="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" alt="Paisaje" />
                    </div>
                <h2>Articulo de prueba</h2>
                    <span className="date">
                       Hace 5 minutos
                    </span>
                <a href="#">Leer más</a>

                <div className="clearfix"></div>
            </article>
            <hr/>
            <h2 className='subheader'>Estado</h2>
            <p> Contado: {this.state.contador}</p>
            <p>
                {/* <input type='button' value='Sumar' onClick={this.sumar.bind(this)} />
                <input type='button' value='Restar' onClick={this.restar.bind(this)} /> */}
                <input type='button' value='Sumar' onClick={this.sumar} />
                <input type='button' value='Restar' onClick={this.restar} />

            </p>
        </div>
        );
    }
}

export default SeccionPruebas;