import React, { Component } from 'react';

import './person-details.css';


const PersonDetailsView = ({item}) => {
  const {id, name, gender, birthYear, eyeColor} = item;

  return (
    <React.Fragment>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}


export default class PersonDetails extends Component {
  state = {
    item: {},
    load: true
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.personId !== prevProps.personId) {
      this.updateItem()
    }
  }

  updateItem = () => {
    const id = this.props.personId;

    this.props.getData(id).then((data) => {
      this.setState({item: data, load: false})
    })
  }

  render() {
    return (
      <div className="person-details card">
        <PersonDetailsView item={this.state.item} />
      </div>
    )
  }
}
