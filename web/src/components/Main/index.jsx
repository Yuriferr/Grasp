import React from "react";
import './style.scss'

export default function Main(){
    return(
        <div className="Main">
            <div className="title">
                <div className="borda"/>
                <div>
                    <h1>Alexandra Stellis</h1>
                </div>
                <p>Sou Alexandra Stellis, uma artista multifacetada que transita entre os domínios da expressão visual, trazendo à vida obras que capturam a essência da emoção humana e a interação entre luz e sombra.</p>
                <button>Conheça me</button>

                <div className="ball" data-aos="fade-up"/>
            </div>

            <div className="objectImg">
                <img src="https://cdn.discordapp.com/attachments/1096821782591311992/1106620313443246140/Yuriferr_Greek_statue_with_purple_background_purple_and_pink_ne_c0c4c99b-a874-45f7-8e09-ef769aa30b96.png"/>
                <div className="fundo"/>
            </div>
        </div>  
    )
}