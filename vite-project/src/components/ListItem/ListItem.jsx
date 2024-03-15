import React, { Component } from 'react';

class ListItem extends Component {


    render() {
        let { item } = this.props

        return (
            <>
                <td>{item.type}</td>
                <td>{item.icon}</td>
            </>
        );
    }
}

export default ListItem;