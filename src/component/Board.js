import React, { Component } from 'react';
import Row from './Row';

/**
 * @extends Component
 */
export default class Board extends Component {
   
    /**
     * @description - Rendering Rows.
     * @returns {List} - Return list with div. 
     */
    getRows() {
        let rowsRender = [];
        for (var i = 0; i < this.props.boardWidth; i++) {
            rowsRender.push( <Row key = { i } boardHeight = {this.props.boardHeight} board = {this.props.board} rowPosition = { i } marioPosition = { this.props.marioPosition } foodCount= { this.props.foodCount } totalCount = { this.props.totalCount }/> );
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