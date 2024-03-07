import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);




        setTimeout(() => {
            console.log(this);
            this.setState({
                list: this.state.list.concat('Alexandria'),


                color: 'lightpink',

            })
        }, 1000);
        setTimeout(() => {


            this.setState({
                list: this.state.list.sort(),

                colors: this.state.colors.slice(3, -1)

            })
        }, 3000);




    }
    state = { ...this.props };
    render() {
        let { list, color, colors } = this.state
        return (
            <React.Fragment>
                {list.length ?

                    <ul style={{ background: color }}>
                        {list.map((item, index) => {

                            return (
                                <li style={{ background: colors[Math.floor(Math.random() * colors.length)] }} key={index}>{item}</li>
                            )
                        })}
                    </ul>
                    : null
                }



            </React.Fragment>
        );
    }
}

export default List;