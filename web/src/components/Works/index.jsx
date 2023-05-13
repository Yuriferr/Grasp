import React, { useEffect, useState } from "react";
import './style.scss'

import axios from 'axios'

export default function Works(){

    const [works, setWorks] = useState([])

    useEffect(() => {
        getWorks()
    }, [])

    async function getWorks(){
        await axios.get('works.json').then(response => {
            setWorks(response.data)
        })
    }

    return(
        <div id="works" className="Works">
            <h1>Trabalhos</h1>
            
            <section className="continerArts">
                {works.map((item, index) => {
                    return(
                        <div data-aos="fade-up" key={index} className={`art${index}`}>
                            <img src={item.image}/>
                            <p className="title">{item.title}</p>
                            <p className="description">{item.description}</p>
                            <a target="_blank" href={item.image}>Conferir Trabalho</a>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}