import React from "react";
import './style.scss'

export default function Contact(){
    return(
        <div id="contact" className="Contact">
            <div data-aos="fade-up" className="ball1"/>
            <div data-aos="fade-up" className="ball2"/>
            <form data-aos="fade-up">
                <h1>Entre em contato</h1>
                <section>
                    <div>
                        <label>Nome (obrigatório)</label>
                        <input placeholder="Seu nome"/>
                    </div>

                    <div>
                        <label>Email (obrigatório)</label>
                        <input placeholder="Seu nome"/>
                    </div>

                    <div>
                        <label>Celular (opcional)</label>
                        <input placeholder="Seu nome"/>
                    </div>

                    <div>
                        <label>Assunto</label>
                        <input placeholder="Seu nome"/>
                    </div>
                </section>
                
                <div>
                    <label>Nome (obrigatório)</label>
                    <input placeholder="Seu nome"/>
                </div>

                <button>Enviar</button>
            </form>
        </div>
    )
}