import './styles.scss'
import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem.jsx';


class List extends Component {
    state = {
        ...this.props,
        border: null,

    };
    componentDidMount() {



        const interval = setInterval(() => {


            let unactiveItems = this.state.list.filter((item) => !item.active);
            const random = Math.floor(Math.random() * unactiveItems.length);
            const randomUnactiveItem = unactiveItems[random];

            this.setState(
                {
                    list: this.state.list.map((item) => {

                        if (item === randomUnactiveItem) item.active = true;
                        return item;
                    }),
                },
                () => {


                    unactiveItems = this.state.list.filter((item) => !item.active);
                    if (unactiveItems.length === Math.round(unactiveItems.length / 2)) {
                        this.setState({
                            border: '10px'
                        })
                    }

                    if (!unactiveItems.length) {
                        this.setState({
                            border: '20px'
                        });
                        clearInterval(interval);

                    }
                }
            );
        }, 1000)

    }
    render() {
        let { list, border } = this.state
        return (

            <table style={{ 'borderWidth': border }}>
                <tbody>
                    {list.map((item, index) => {
                        return <tr className={item.active ? 'active' : null} key={index} >
                            <ListItem item={item}></ListItem>
                        </tr>

                    })}
                </tbody>
            </table >

        );
    }
}

export default List;