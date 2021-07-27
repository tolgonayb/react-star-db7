import React from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';
import SwapiService from '../../services/swapi-service'
import ErrorBoundary from "../error-boundary";
import ErrorButton from "../error-button";


class PeoplePage extends React.Component {
  swapi = new SwapiService()

  state = {
    personId: 1
  }

  selectPerson = (id) => {
    this.setState({
      personId: id
    })
  }

  render() {
    console.log('current state', this.state)

    const leftElement = (
        <ErrorBoundary>
           <ItemList getData={this.swapi.getAllPeople} selectPerson={this.selectPerson}>
        {(item) => `${item.name} (${item.gender})`}
      </ItemList>
          <ErrorButton />
        </ErrorBoundary>

    )
    const rightElement = <ErrorBoundary>

   <PersonDetails personId={this.state.personId} getData={this.swapi.getPerson} /> <ErrorButton /> </ErrorBoundary>

    return (
      <Row left={leftElement } right={rightElement} />
    )
  }
}

export default PeoplePage;
