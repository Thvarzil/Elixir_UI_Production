import React, {Component} from 'react';

export default class Landing extends Component{
    render(){
        return(
            <div className={"frosted main-content"}>
                <h1>elixir(n):</h1>
                <ol>
                    <li>Also called elixir of life. An alchemic preparation formerly believed to be capable of prolonging life.</li>
                    <li>An alchemic preparation formerly believed to be capable of transmuting base metals into gold.</li>
                    <li>An up and coming bar, nestled nicely on the Wasatch front. 
                        A sanctuary for weary travelers and thirsty locals alike, offering Italian food from Cafe Trio 
                        and a myriad of drink selections, from local craft beer, wine, and custom "elixirs" to suit every palate.
                        <br/> Ex: Everyone had a memorable time at Elixir Lounge last night!</li>
                </ol>
                
            </div>
        );
    }
}