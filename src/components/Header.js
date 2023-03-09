import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Peliculas from "./Peliculas";
import SeccionPruebas from "./SeccionPruebas";
import MiComponente from "./MiComponente";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* LOGO */}
          <div id="logo">
            <img src={logo} className="app-logo" alt="Logotipo" />
            <span id="brand">
              <strong>Curso</strong>React
            </span>
          </div>

          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/" className={(active) => active.isActive ? "active" : "" }> Inicio 
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" className={(active) => active.isActive ? "active" : "" }>Blog</NavLink>
              </li>

              <li>
                <NavLink to="/formulario" className={(active) => active.isActive ? "active" : "" }>Formulario</NavLink>
              </li>

              <li>
                <NavLink to="/peliculas" className={(active) => active.isActive ? "active" : "" }>Peliculas</NavLink>
              </li>

              <li>
                <NavLink to="/testeo/:nombre/:apellidos" className={(active) => active.isActive ? "active" : "" }>Pagina 2</NavLink>
              </li>
            </ul>
          </nav>
          {/* LIMPIAR FLOTADOS */}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
