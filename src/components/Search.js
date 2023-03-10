import React, {Component} from "react";
import { useParams } from "react-router-dom";
import Articles from "./Articles";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

const Search = () =>{
    let searched = useParams().search;

    return(
        <div className="search">
             <Slider title= {"Busqueda de: " +searched} size = "slider-small" />
            <div className="center">
                <div id="content">
                    {/* Listado de Articulos desde la API */}
                    <Articles search={searched} />
                   
                </div>
                <Sidebar
                    blog='true'
                />
            </div>
        </div>
    );
}

export default Search;

