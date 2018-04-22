import React, { Component } from 'react';
import Column from './Column';

const styles = {
    row: {
      clear: 'both'
    }
};

export default class Border extends Component {
  
    getColoum() {
      let columsRender = [];
      for (var j = 0; j < this.props.boardHeight; j++) {
        columsRender.push( <Column key = { j } rowPosition = { this.props.rowPosition } board = { this.props.board } colPosition = { j } /> );
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