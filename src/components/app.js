import React from "react";
import "../style/style.css"
import "../style/types.css"
const axios = require("axios");

//Max Pokemon Number
const maxPKMMN = 807;


class PKMNApp extends React.Component{
    constructor(props){
        super(props)
        this.state={};        
    }    
   
    getPokemon(){
        
        document.querySelector(".button").addEventListener("click",()=>{
            const randomPKMN = Math.floor(Math.random() * Math.floor(maxPKMMN))+1;
            //API
            const api = axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPKMN}/`);

            api.then(res =>{

               // console.log(res.data.sprites.front_default);
                

                //GET POKEMON IMAGE
                const img = res.data.sprites.front_default;
                this.setState({img});
                

                //GET POKEMON ID
                const id = res.data.id;
                this.setState({id})
                
                //GET POKEMON NAME
                const name = res.data.name;
                this.setState({name})

                //GET POKEMON TYPE 1
                const type1 = res.data.types[0].type.name;             
                this.setState({type1})
        
                


                //GET POKEMON TYPE 2
                const type2 = res.data.types[1].type.name;
                this.setState({type2})

                console.log(res.data.types.length);
                if(res.data.types.length <2){
                    console.log("no  second type,replace with null");
                }
                
                

            }).catch(function(){
                console.log("something happened");
                                
            })
        })     
   
} 

        componentDidMount(){
                this.getPokemon();
        }

    render(){
        return(
            <div>
                <div className="top">
                <h1>POKEMON-APP</h1>          
                    <button className="button">Get Pokemon</button>         
              
                </div>            
                <div className="content">            
                <div>               
                    <div className="ball">
                        <img src={this.state.img} alt="Pokemon" className="pkmnSprite"/>
                    </div>
                </div>
                </div>
                <div className="bottom">
                <div className="data">
                <p className="id">#{this.state.id}</p>
                <p className="name">{this.state.name}</p>
                </div>
                <div className="types">
                        <p className={`type1 ${this.state.type1}`}>{this.state.type1}</p>
                        <p className={`type2 ${this.state.type2}`}>{this.state.type2}</p>
                    </div>
                </div>
            </div>
        )
    }

    
}

export default PKMNApp;
