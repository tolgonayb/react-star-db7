import React from "react";
import {Consumer} from "../swapi-context/swapi-context";




const withSwapiService = (ComponentView, mapMethodsToProps) => {
    return (props) => {
        return (
            <Consumer>
                {
                    (Swapi) => {
                        const new_prop = mapMethodsToProps(new Swapi())
                        return <ComponentView {...props} Swapi={Swapi} />
                    }
                }
            </Consumer>
        )
    }
}


export default withSwapiService;