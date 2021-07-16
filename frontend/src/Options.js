import React, { useState, useEffect } from 'react';


import "./styles/Options.scss";



function Options(){

    useEffect(() => {
        const cards = document.querySelectorAll(".cards");
        const container = document.querySelector(".cards-container");

        const card1 = cards[0];
        const card2 = cards[1];

        container.addEventListener("mousemove", (e) => {
            let axisY = (window.innerHeight / 2 - e.pageY) /25;
            let axisX = (window.innerWidth / 2 - e.pageX) /25;

            console.log(axisX, axisY);

            card1.addEventListener("mousemove", (e) => {
                card1.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
            });


            card2.addEventListener("mousemove", (e) => {
                card2.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
            });
        })

        container.addEventListener("mouseenter", (e) => {
            card1.style.transition= "none";
            card2.style.transition= "none";
        })

        card1.addEventListener("mouseleave", (e) => {
            card1.style.transition= "0.5s ease";
            card1.style.transform= `rotateY(0deg) rotateX(0deg)`; 
        })
        
        card2.addEventListener("mouseleave", (e) => {
            card2.style.transition= "0.5s ease";
            card2.style.transform= `rotateY(0deg) rotateX(0deg)`; 
        })
        
    })

    return (
        <div className="cards-container">
            <div className="cards">
                <a href="#">
                    <img src="./img1.svg" alt="Adicionar notícia"></img>
                    <h3>Adicionar notícia</h3>
                </a>
            </div>
            <div className="cards">
            <a href="#">
                    <img src="./img2.svg" alt="Gerenciar notícias"></img>
                    <h3>Gerenciar notícias</h3>
                </a>
            </div>
        </div>
    );
}

export default Options;