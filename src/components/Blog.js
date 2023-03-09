import React, {Component} from "react";
import Article from "./Article";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Blog extends Component{
    


    render(){
        return(
            <div className="blog">
                <Slider title="Blog" size="slider-small" />
    
                <div className="center">
                    <div id="content">
                        {/* Listado de Articulos desde la API */}
                        <Article/>
                       
                    </div>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Blog;

