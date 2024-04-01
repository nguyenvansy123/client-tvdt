import React from 'react'
import "./about.css"
import { ModalUI } from '../../components/ModalUI'

export const About = () => {
    return (
        <div id="container">
            <div className="about-content">
                <h1>
                    About <span>Healthy Together</span>{" "}
                </h1>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make
                    changes to the font. Feel free to drag and drop me anywhere you like on
                    your page.I’m a great place for you to tell a story and let your users
                    know a little more about you.
                </p>
            </div>
       
        </div>
    )
}
