import React from "react";
import '../component/styling/pokemon.css'
// import {'?'} from '@babel/plugin-proposal-optional-chaining';
const Pokemon = (props, loading) =>{

    return( 
        <div className="pokemon-div">
            {props.data.map((element) =>(
                <section className="pokemon-card">
                    <section className="inner-section">
                        <img src={element.images.large} alt='pokemon image' />
                        <section className="text-section">
                            <h3>{element.name}</h3>
                            <h3 className="hp-text">HP {element.hp}</h3>
                        </section>
                        <section className="text-section-2">
                            <h4>Attacks</h4>
                            {element.attacks.map((e)=>(
                                // {element.attacks.lenght ? }
                                <span>{e.name} </span>
                            ))}
                            <h4>Abilities</h4>
                            {element.abilities ? 
                                    (element.abilities.map((e) =>(
                                    <span>{e.name} </span>)
                                    )): 'NA'}
                        </section>
                    </section>
                </section>
            ))}
        </div>
    );
}

export default Pokemon;