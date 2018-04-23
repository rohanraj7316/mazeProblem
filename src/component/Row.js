import React, { Component } from 'react';
import Column from './Column';

/**
 * @extends - Components.
 */
export default class Border extends Component {
  
    getColoum() {
      let columsRender = [];
      for (var j = 0; j < this.props.boardHeight; j++) {
        columsRender.push( <Column key = { j } rowPosition = { this.props.rowPosition } board = { this.props.board } colPosition = { j } marioPosition = { this.props.marioPosition } foodCount = { this.props.foodCount } totalCount = { this.props.totalCount }/> );
      }
      return columsRender;
    }

    render() {
      return (
        <div className = "row" >
          { this.getColoum() }
        </div>
      );
    }
}