import React from "react";
import './style.scss'

import { BsLinkedin, BsGithub, BsTiktok } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md'

export default function Footer(){
    return(
        <footer>
            <section className="contato">
                <div>
                    <h1>Permita tornar seus projetos reais!</h1>
                    <p>Sites incríveis, da sua maneira, rápido desenvolvimento.</p>
                    <a target="_blank" href="https://www.linkedin.com/in/yuriferr/">Contate-me</a>
                </div>
            </section>

            <section className="links">
                <div>
                    <a target="_blank" href="https://www.linkedin.com/in/yuriferr/"><BsLinkedin/>Yuri Fernandes</a>
                    <a target="_blank" href="https://github.com/Yuriferr"><BsGithub/>Yuriferr</a>
                    <a target="_blank" href="https://www.tiktok.com/@yuri_ferr_"><BsTiktok/>yuri_ferr_</a>
                    <a target="_blank" href="mailto:yurifernandespreto@gmail.com"><MdEmail/>yurifernandespreto@gmail.com</a>
                </div>
            </section>
        </footer>
    )
}