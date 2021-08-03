import React from 'react';

import Header from '../header';

import {ItemDetails, Record} from "../item-details";

import {PeopleList, PlanetList, StarshipList, PersonDetail, PlanetDetail, StarshipDetail} from "../sw-components";
import {Provider, Consumer} from "../swapi-context/swapi-context";
import SwapiService from "../../services/swapi-service";

import './app.css';





const App = () => {
  return (
    <div>
        <Provider value={SwapiService} >
      <Header />

            <PersonDetail />

            <StarshipDetail />

            <PlanetDetail />

            <PeopleList />

            <PlanetList />

            <StarshipList />
    </Provider>
    </div>
  );
};

export default App;
