import React, { Component } from 'react';

export default class Column extends Component {
    render () {
        const additionalClass = this.props.board[this.props.rowPosition][this.props.colPosition].isHavingFood ? 'cell food' : 'cell';
        return (
            <div className = {additionalClass}>
            </div>
        );
    }
}