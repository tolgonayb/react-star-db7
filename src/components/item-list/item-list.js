import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from "../error-boundary";
import ErrorButton from "../error-button";

import './item-list.css';

export default class ItemList extends Component {
  state = {
    items: [],
    load: true
  }

  swapi = new SwapiService()

  componentDidMount() {
    this.updateItem()
  }

  updateItem() {
    this.props.getData().then((data) => {
      this.setState({items: data})
    })
  }

  renderElements = (elementCollection) => {
    return elementCollection.map((item) => {
      return (
        <li
          onClick={() => {this.props.selectPerson(item.id)}}
          key={item.id}
          className="list-group-item"
        >
          {this.props.children(item)}
        </li>
      )
    })
  }

  render() {
    const content = this.renderElements(this.state.items)

    return (
      <ul className="item-list list-group">
        {content}

      </ul>
    );
  }
}
