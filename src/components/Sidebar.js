import React, { Component } from "react";
import { Navigate, redirect } from "react-router-dom";

class Sidebar extends Component {
  
  searchRef = React.createRef();

  state = {
    search: "",
    redirect: false
  }

  redirectToSearch = e => {
    e.preventDefault();
    this.setState({
      search: this.searchRef.current.value,
      redirect: true
    });
  }

  //Revisar Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
  render() {

    if(this.state.redirect){
      return <Navigate to= {"/blog/busqueda/" + this.state.search} replace={true} />;
    }

    return (
      <React.Fragment>
        <aside id="sidebar">
        {this.props.blog === "true" &&
            <div id="nav-blog" className="sidebar-item">
            <h3>Puedes hacer esto</h3>
            <a href="#" className="btn btn-success">
              Crear artículo
            </a>
          </div>

        }
        
          <div id="search" className="sidebar-item">
            <h3>Buscador</h3>
            <p>Encuentra el artículo que buscas</p>
            <form onSubmit={this.redirectToSearch}>
              <input type="text" name="search" ref={this.searchRef} />
              <input type="submit" name="submit" value="Buscar" className="btn" />
            </form>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default Sidebar;
