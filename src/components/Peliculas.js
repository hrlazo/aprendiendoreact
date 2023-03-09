import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Peliculas extends Component {
  state = {
    peliculas: [
      {
        titulo: "Batman vs Superman",
        image:
          "https://i.blogs.es/7bf2a1/batman-v-superman-dawn-of-justice-poster-nuevo-blogdecine-imagen-2016/1024_2000.jpg",
      },
      {
        titulo: "Gato con Botas",
        image:
          "https://cdn.mallmarina.cl/mallmarina/uploads/2022/11/be9591db81c3821a8efffe596a1af484.jpg",
      },
      {
        titulo: "Wall-E",
        image:
          "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/863074ACE43DE1D0ACAFBA01DDF81D014D1F45BDFA08A3828C0267B00422F977/scale?width=1440&aspectRatio=1.78&format=jpeg",
      },
    ],
    nombre: "Heriberto Lazo",
    favorita: {},
  };

  cambiarTitulo = () => {
    var { peliculas } = this.state;
    peliculas[0].titulo = "Batman Begins";

    this.setState({
      peliculas: peliculas,
    });
  };

  //Recibe OBJ peliculas desde el componente Pelicula
  favorita = (pelicula, indice) => {
    console.log("Favortia marcada");
    console.log(pelicula, indice);
    this.setState({
      favorita: pelicula,
    });
  };

  componentDidMount() {}

  render() {
    //Mover al archivo CSS
    const pstyle = {
      background: "green",
      color: "white",
      padding: "10px",
    };

    return (
      <div className="home">
        <Slider
          title="Sección de Peliculas"
          btn="Ir al blog"
          size="slider-big"
        />

        <div className="center">
          <div id="content">
            <div id="peliculas" className="peliculas">
              <p>Selección de peliculas favoritas de {this.state.nombre}</p>
              <p>
                <button onClick={this.cambiarTitulo}>Cambiar titulo</button>
              </p>

              {this.state.favorita.titulo ? (
                <p className="favorita" style={pstyle}>
                  <strong>La pelicula favorita es: </strong>
                  <span>{this.state.favorita.titulo}</span>
                </p>
              ) : (
                <p className="favorita" style={pstyle}>
                  {" "}
                  NO HAY PELICULA FAVORITA
                </p>
              )}

              {/* Crear componente peliculas */}

              <div id="articles">
                {this.state.peliculas.map((pelicula, i) => {
                  return (
                    <Pelicula
                      key={i}
                      pelicula={pelicula}
                      marcarFavorita={this.favorita}
                      indice={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <Sidebar blog="false" />
        </div>
      </div>
    );
  }
}

export default Peliculas;
