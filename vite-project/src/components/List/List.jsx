import todos from './../../service/todos.js'
import './styles.scss';

import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
    }
    state = {
        list: [],
        newToDo: {
            title: '',
            completed: false,
        },

    }

    async componentDidMount() {
        try {
            let res = await todos.get()

            this.setState({
                list: res

            });
        }
        catch (err) {
            console.log(err);
        };


    };
    async handleDelete(id) {

        try {
            await todos.delete(id);
            this.setState((actualState) => ({
                list: actualState.list.filter((item) => item.id !== id)
            }))
        } catch (err) {
            console.log(err);
        };


    };
    async handleComplete(item) {
        let res = await todos.put(item.id, { completed: !item.completed });
        this.setState((actualState) => ({
            list: actualState.list.map(element => {
                element.id === item.id ? element = res : null;
                return element;

            })
        }))

    };
    async handleTitle(event) {
        this.setState((actualState) => ({
            newToDo: { ...actualState.newToDo, title: event.target.value }
        }))

    };
    async handleCompleted(event) {
        this.setState((actualState) => ({
            newToDo: { ...actualState.newToDo, completed: event.target.checked }
        }))
    };
    async handleSubmit(event) {
        event.preventDefault();
        try {
            let res = await todos.post(this.state.newToDo);
            this.setState((actualState) => ({
                list: [...actualState.list, res]
            }), () => {
                this.setState({
                    newToDo: { title: '', completed: false }
                })
            })

        } catch (err) {
            console.log(err);
        }

    }

    render() {
        let { list, newToDo } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleCompleted} checked={newToDo.completed} type='checkbox'></input>
                    <input onChange={this.handleTitle} value={newToDo.title} type='text'></input>
                    <button>Send</button>
                </form>
                {list.length ?
                    list.map((item) => {
                        return <ul className='list' key={item.id}>
                            <li>{item.title}</li>
                            <input type='checkbox' defaultChecked={item.completed} onChange={() => this.handleComplete(item)} />
                            <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                        </ul>
                    })
                    : null}

            </div>
        );
    }
}

export default List;

