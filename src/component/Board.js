import React, { Component } from 'react';
import Row from './Row';

export default class Board extends Component {
    
    getRows() {
        let rowsRender = [];
        for (var i = 0; i < this.props.boardWidth; i++) {
            rowsRender.push( <Row key = { i } boardHeight = {this.props.boardHeight} board = {this.props.board} rowPosition = { i }/> );
        }
        return rowsRender;
    }
    /**
     * 
     */
    render() {
        return (
            <div className = "board" >
                { this.getRows() }                
            </div>    
        );
    }
}