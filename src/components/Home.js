import React, {Component} from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Home extends Component{
    
    render(){
        return(
            <div className="home">
                <Slider title="Bienvenido al Curso de React" btn= "Ir al blog" size = "slider-big" />
    
                <div className="center">
                    <div id="content">
                        <h2 className="subheader">Ultimos Articulos</h2>
                       
                    </div>
                    <Sidebar blog="true" />
                </div>
            </div>
        );
    }
}

export default Home;

