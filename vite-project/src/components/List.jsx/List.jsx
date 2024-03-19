
import React, { useState, useEffect, useRef } from "react";

import service from "../../service/service";
import ListBox from "./ListBox";
import Button from './../Button/Button.jsx';

function List() {
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);
    const [list3, setList3] = useState([]);

    useEffect(() => {
        (async () => {
            const list = await service.get()
            setList(list.slice(0, 10))
        })();


    }, []);

    const transferFirtToRight = () => {
        setList2([list[0], ...list2]);

        setList(list.filter((item, index) => !index == 0))

    };
    const transferToLeft = () => {
        setList([list2[0], ...list]);

        setList2(list2.filter((item, index) => !index == 0))
    };
    const tranferFromSecondToRight = () => {
        setList3([list2[0], ...list3]);

        setList2(list2.filter((item, index) => !index == 0))

    };
    const removeItem = async () => {
        await service.delete(list3[list3.length - 1].id)

        setList3(list3.filter((item) => item !== list3[list3.length - 1]))
    }



    return (
        <div className="box_wrapper">


            <div className="box">
                <ListBox list={list}></ListBox>
                {list.length ? <Button function={transferFirtToRight} text={'Tranfer to rigth'}></Button> : null}
            </div>





            <div className="box">
                <ListBox list={list2}></ListBox>
                {list2.length ? <Button function={transferToLeft} text={'Tranfer to left'}></Button> : null}
                {list2.length ? <Button function={tranferFromSecondToRight} text={'Tranfer to rigth'}></Button> : null}
            </div>





            <div className="box">
                <ListBox list={list3}></ListBox>
                {list3.length ? <Button function={removeItem} text={'Remove last item'}></Button> : null}
            </div>


        </div>
    );
}

export default List;