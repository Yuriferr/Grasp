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
                <a target="_blank" href="https://www.linkedin.com/in/yuriferr/">Linkedin</a>
                <a target="_blank" href="https://github.com/Yuriferr">GitHub</a>
                <a target="_blank" href="mailto:yurifernandespreto@gmail.com">Email</a>
                <button>Click</button>
            </section>
        </header>
    )
}