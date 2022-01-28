import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Inicio} from '../components/Inicio'
import { Iniciodos } from '../components/Iniciodos'
import Menu from '../container/Menu'
import Registro from '../components/Formulario' 



export default class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/dos" element={<Menu/>}/>
                    <Route path="/p" element={<Iniciodos/>}/>
                    <Route path="/registro" element={<Registro/>}/>
                </Routes>

            </BrowserRouter>

      )
    }
}