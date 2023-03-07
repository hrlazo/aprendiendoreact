import React, {Component} from 'react';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom';

//Componentes
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/error';



class Router extends Component{

    render(){
        function PruebaParametros(){
            console.info(useParams())
            let{nombre} = useParams();
            let {apellidos} = useParams();
            let sinApellidos =(null);
    
            if(apellidos){
                sinApellidos = (
                    <h2 className='subheader'>Prueba obtener apellidos: {apellidos} </h2>
                )
            };
    
            return(
                <div id ='content'>
                    <h2 className='subheader'>Prueba obtener nombre: {nombre} </h2>
                    {sinApellidos}
                </div>
            );
        }
     
        return(
            <BrowserRouter>
                {/* CONFIGURAR RUTAS Y PAGINAS */}
                <Routes>
                <Route path= "/" element = {<Peliculas/>} exact />
                    <Route path= "/ruta-prueba" element = {<SeccionPruebas/>} exact />
                    <Route path= "/segunda-ruta" element = {<MiComponente/>} exact/>

                    <Route path= "/testeo/:nombre" element = {<PruebaParametros/>}  exact/>
                    <Route path= "/testeo/:nombre/:apellidos" element = {<PruebaParametros/>}  exact/>

                    {/* Pagina 404 */}
                    <Route path='*' element = {<Error/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;