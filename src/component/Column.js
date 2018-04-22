import React, { Component } from 'react';

export default class Column extends Component {
    render () {
        console.log(this.props);
        const additionalClass = this.props.board[this.props.rowPosition][this.props.colPosition].isHavingFood ? 'cell food' : 'cell';
        return (
            <div className = 'cell'>
            </div>
        );
    }
}