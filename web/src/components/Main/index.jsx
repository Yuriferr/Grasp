import React from "react";
import './style.scss'

export default function Main(){
    return(
        <div className="Main">
            <div className="title">
                <div>
                    <h1>Black Theme</h1>
                    <h1>Only One</h1>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button>Click</button>

                <div className="ball"/>
            </div>

            <div className="objectImg">
                <img src="https://cdn.discordapp.com/attachments/1096821782591311992/1106620313443246140/Yuriferr_Greek_statue_with_purple_background_purple_and_pink_ne_c0c4c99b-a874-45f7-8e09-ef769aa30b96.png"/>
                <div className="fundo"/>
            </div>
        </div>  
    )
}