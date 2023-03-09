import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

//Componentes
import Peliculas from "./components/Peliculas";
import Error from "./components/error";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";

class Router extends Component {
  render() {
    function PruebaParametros() {
      console.info(useParams());
      let { nombre } = useParams();
      let { apellidos } = useParams();
      let sinApellidos = null;

      if (apellidos) {
        sinApellidos = (
          <h2 className="subheader">Prueba obtener apellidos: {apellidos} </h2>
        );
      }

      return (
        <div id="content">
          <h2 className="subheader">Prueba obtener nombre: {nombre} </h2>
          {sinApellidos}
        </div>
      );
    }

    return (
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Rutas y Paginass */}
          <Route path="/" element={<Home />} exact />
          <Route path="/blog" element={<Blog />} exact />
          <Route path="/peliculas" element={<Peliculas />} exact />
          <Route path="/formulario" element={<Formulario />} exact />
          <Route path="*" element={<Error />} />

          {/* RUTAS DE TESTEO
          <Route path="/ruta-prueba" element={<SeccionPruebas />} exact />
          <Route path="/segunda-ruta" element={<MiComponente />} exact />
          <Route path="/testeo/:nombre" element={<PruebaParametros />} exact />
          <Route
            path="/testeo/:nombre/:apellidos"
            element={<PruebaParametros />}
            exact
          />
          
          */}
      
        </Routes>
        <div className="clearfix"></div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
