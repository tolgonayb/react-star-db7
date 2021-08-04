import React, {Component} from "react";
import ItemList from "../item-list";
import withData from '../hoc/with-data';
import SwapiService from "../../services/swapi-service";

const {getAllPeople, getAllPlanets, getAllStarships} = new SwapiService();



const withChildFunction = (ComponentView, fn) => {
    return (props) => {
        return (
            <ComponentView {...props}>
                {fn}
            </ComponentView>
        )
    }
}

const PeopleList = withChildFunction(
    withData(ItemList, getAllPeople),
            (item) => item.name
    )


const PlanetList = withChildFunction(
    withData(ItemList, getAllPlanets),
    (item) => item.name
)

const StarshipList = withChildFunction(
    withData(ItemList, getAllStarships),
    (item) => item.name
)

export {PeopleList, PlanetList, StarshipList}