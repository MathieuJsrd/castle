//JSX document
import React, { Component} from 'react';

class Welcome extends Component{
    constructor(){
        super();
        //On initialise un object state
        //un state peut être modifié contrairement aux props
        this.state = {
            count : 0
        }
    }

    //function to alter state value
    addone(){
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){
        //always return one element here :div
        return (


            <div>
                <h1>Welcome {this.props.name} </h1> {/*Ceci affiche donc Welcome JAckson*/}
                {/*this fait référence au contexte //props pour indiquer que c'est bien une propriété */}
                 <p>Mon compteur : {this.state.count}</p>
                 <button onClick={() => this.addone()}>Ajouter 1</button>{/*() => : creation d'une fonction anonyme qui retourne notre méthode //par les accolades on insère du javascript dans du html =>jsx*/}
            </div>
            
        );
    }
}

export default Welcome;