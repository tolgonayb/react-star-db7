import React, { Component } from 'react';

import './item-details.css';


const Record = (props) => {
  const {label, fieldName} = props;
  const {item} = props;

    return (
        <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[fieldName]}</span>
        </li>
    )
}

class ItemDetails extends Component {
  state = {
    item: {},
    load: true,
    imageUrl: ''
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  updateItem = () => {
    const id = this.props.itemId;

    this.props.getData(id).then((data) => {
      this.setState({
        item: data,
        load: false,
        imageUrl: this.props.getImageUrl({'id': id})
      })
    })
  }

  render() {
    return (
        <div className="person-details card">
        <img className="person-image"
             src={this.state.imageUrl} />

          <div className="card-body">
      <h4>{this.state.item.name}</h4>
      <ul className="list-group list-group-flush">
        { React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {item: this.state.item})
        })
        }
      </ul>
      </div>
        </div>
    )
  }
}


export {ItemDetails, Record}