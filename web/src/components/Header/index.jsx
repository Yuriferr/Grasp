import React from "react";
import './style.scss'

export default function Main(){
    return(
        <header>
            <section className="logo">
                <div className="fundo"/>
                <p>Grasp.</p>
            </section>

            <section className="links">
                <a href="#about">Sobre</a>
                <a href="#works">Trabalhos</a>
                <a href="#contact">Contato</a>
                <a target="_blank" href="https://github.com/Yuriferr" className="me">Yuriferr</a>
            </section>
        </header>
    )
}