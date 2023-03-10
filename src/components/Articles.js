//Paquetes
import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import "moment/locale/es";

//Utilidadeds
import Global from "../Global";
import defaultImage from "../assets/default.png";

class Articles extends Component {
  url = Global.url;

  state = {
    articles: [],
    status: null,
  };

  componentWillMount() {
    var home = this.props.home;
    var search = this.props.search;

    if (home === "true") {
      this.getLastArticles();
    }
    else if(search && search != null && search != undefined){
      this.getArticlesBySearch(search);
    }
    else {
      this.getArticles();
    }
  }

  getLastArticles() {
    axios.get(this.url + "articles/last").then((res) => {
      this.setState({
        articles: res.data.articles,
        status: "Success",
      });
    });
  }
  getArticles = () => {
    axios.get(this.url + "articles").then((res) => {
      this.setState({
        articles: res.data.articles,
        status: "Success",
      });
      // console.log(this.state);
    });
  };

  getArticlesBySearch = searched => {
    axios.get(this.url + "search/" + searched).then(res => {
        this.setState({
          articles: res.data.articles,
          status: "Success",
        });
    })
    .catch( err => {
      this.setState({
        articles: [],
        status: "Success",
      });
    })
  };

  render() {
    if (this.state.articles.length >= 1) {
      var listArticle = this.state.articles.map((article, key) => {
        return (
          <article className="article-item" id="article-template" key={key}>
            <div className="image-wrap">
              {article.image !== null ? (
                <img
                  src={this.url + "get-image/" + article.image}
                  alt={article.title}
                />
              ) : (
                <img src={defaultImage} alt="Imagen por Defecto" />
              )}
            </div>

            <h2>{article.title}</h2>
            <span className="date">
              <Moment locale="es" fromNow>
                {article.date}
              </Moment>
            </span>
            <Link to={"/blog/articulo/" + article._id}>Leer más</Link>

            <div className="clearfix"></div>
          </article>
        );
      });

      return (
        <div className="article">
          {/* Listado de Articulos desde la API */}
          <h2 className="subheader">Listado de Articulos</h2>
          {listArticle}
        </div>
      );
    } else if (
      this.state.articles.length === 0 &&
      this.state.status === "Success"
    ) {
      return (
        <div className="article">
          {/* Listado de Articulos desde la API */}
          <h2 className="subheader">No hay Articulos para mostrar</h2>
          <p>Today no se ha publicado ninguno articulo</p>
        </div>
      );
    } else {
      return (
        <div className="article">
          {/* Listado de Articulos desde la API */}
          <h2 className="subheader">Cargando...</h2>
          <p>Espere un momento, estamos cargando el contenido...</p>
        </div>
      );
    }
  }
}

export default Articles;
