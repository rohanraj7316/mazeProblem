import React, { Component } from 'react';
let foodCounter = 0;

export default class Column extends Component {    
    render () {
        const additionalClass = (function() {
            if (this.props.marioPosition.x === this.props.rowPosition 
                    && this.props.marioPosition.y === this.props.colPosition) {
                        if (this.props.board[this.props.rowPosition][this.props.colPosition].isHavingFood) {
                            this.props.board[this.props.rowPosition][this.props.colPosition].isHavingFood = false;
                            foodCounter += 1;
                            if (foodCounter === (this.props.foodCount)) {
                                alert ('GAME OVER. Total moves to save princess: ' + this.props.totalCount);
                            }
                        }
                        return 'cell mario-location';
                    } else {
                        return this.props.board[this.props.rowPosition][this.props.colPosition].isHavingFood ? 'cell food' : 'cell';
                    }
        }.bind(this))();
        
        return (
            <div className = {additionalClass}>
            </div>
        );
    }
}