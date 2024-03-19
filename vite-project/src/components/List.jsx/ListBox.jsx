import React from 'react';
import './style.scss';

function ListBox(props) {

    return (

        <div >
            {props.list.length ?

                <ul>
                    {props.list.map(item => {
                        return <li key={item.id}>{item.title}</li>
                    })}
                </ul>

                : null}

        </div>
    );
}

export default ListBox;