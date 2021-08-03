import React, { Component } from 'react';
import './item-list.css';
import SwapiService from "../../services/swapi-service";


const {getAllPeople} = new SwapiService()

const ItemList = (props) => {


 const renderElements = (elementCollection) => {
    return elementCollection.map((item) => {
      return (
          <li
              onClick={() => {
                props.selectPerson(item.id)
              }}
              key={item.id}
              className="list-group-item"
          >
            {props.children(item)}
          </li>
      )
    })
  }

  const content = renderElements(props.data)

    return (
      <ul className="item-list list-group">
        {content}

      </ul>
    );
  }




export default ItemList;