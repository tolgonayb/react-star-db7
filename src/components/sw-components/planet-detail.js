import React from "react";
import {ItemDetails, Record} from '../item-details';
import withSwapiService from '../hoc/with-swapi-service'


const planetDetail = ({getPlanet, getPlanetImage}) => {

return (
    <ItemDetails
        itemId={6}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
        >
        <Record fieldName='population' label='population' />
        <Record fieldName='rotationPeriod' label='rotation period' />
        <Record fieldName='diameter' label='diameter' />

    </ItemDetails>
    )
}

const mapMethodsToProps = (swapi_object) => {
    return {
        getPlanet: swapi_object.swapi_object,
        getPlanetImage: swapi_object.getPlanetImage,
    }
}

export default withSwapiService(planetDetail, mapMethodsToProps)
