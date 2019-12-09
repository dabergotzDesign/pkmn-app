import React from "react";
import "../style/style.css"
import "../style/types.css"
const axios = require("axios");

//Max Pokemon Number
const maxPKMMN = 807;
const randomPKMN = Math.floor(Math.random() * Math.floor(maxPKMMN));
//Connect to API
const api = axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPKMN}/`);


const PKMNApp = ()=>{

    api.then(
        function(response){

            // console.log(response.data);

            //Get Pokemon sprite/image
            const pkmnSprite = response.data.sprites.front_default;
            document.querySelector(".pkmnSprite").src = pkmnSprite;

            //Get Pokemon id
            const pkmnId = response.data.id;
            document.querySelector(".id").innerHTML=`#${pkmnId}`;
                   
            //Get Pokemon name
            const pkmnName = response.data.name;
            document.querySelector(".name").innerHTML=pkmnName;
            
            //Get Pokemon types
            
            //type 1
            const type1 = response.data.types[0].type.name;
            document.querySelector(".type1").innerHTML=type1;
            document.querySelector(".type1").classList.add(`${type1}`);
                                              
            
            //type2
            const type2 = response.data.types[1].type.name;
            document.querySelector(".type2").innerHTML=type2;
            document.querySelector(".type2").classList.add(`${type2}`);
            
                   
        }
    ).catch(function(){      
        console.log("no second type");                      
    })

    return(
        <div>
            <div className="top">
            <h1>POKEMON-APP</h1>
            <div>
                <button className="roll-button">Get Pokemon</button>
            </div>
          
            </div>            
            <div className="content">            
            <div>               
                <div className="ball">
                    <img src={""} alt="Pokemon" className="pkmnSprite"/>
                </div>
            </div>
            </div>
            <div className="bottom">
            <div className="data">
            <p className="id"></p>
            <p className="name"></p>
            </div>
            <div className="types">
                    <p className="type1"></p>
                    <p className="type2"></p>
                </div>
            </div>
        </div>
    )
}

export default PKMNApp;
