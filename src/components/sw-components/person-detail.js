import React from "react";
import {ItemDetails, Record} from '../item-details';
import withSwapiService from "../hoc/with-swapi-service";


const personDetail = ({getPerson, getPersonImage}) => {
    return (
        <ItemDetails>
            itemId={5}
            getData={getPerson}
            getImageUrl={getPersonImage} >
            <Record fieldName='eyeColor' label='eye color'/>
            <Record fieldName='gender' label='gender'/>
            <Record fieldName='birthYear' label='birth year'/>
        </ItemDetails>
    )
}


const mapMethodsToProps = (swapi_object) => {
    return {
        getPerson: swapi_object.swapi_object,
        getPersonImage: swapi_object.getPersonImage

    }
}

export default withSwapiService(personDetail, mapMethodsToProps());