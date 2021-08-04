import React from "react";
import {ItemDetails, Record} from '../item-details';
import withSwapiService from '../hoc/with-swapi-service'



const StarshipDetail = ({getStarship, getStarshipImage}) => {
    return (
        <ItemDetails>
            itemId={7}
            getData={getStarship}
            getImageUrl={getStarshipImage}
            >
            <Record fieldName='model' label='model'/>
            <Record fieldName='manufacturer' label='manufacturer'/>
        </ItemDetails>

    )
}
const mapMethodsToProps = (swapi_object) => {
    return {
        getStarship: swapi_object.getStarship,
        getStarshipImage: swapi_object.getStarshipImage,
    }
}

export default withSwapiService(StarshipDetail, mapMethodsToProps);
