import React, { useState } from 'react'
import './Todos.css'

function Todos() {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItems = ()=> {
        if(!inputData){

        } else {
            setItems([...items, inputData]);
            setInputData('');
        }    
    }

    const deleteItem = (id)=> {
        const updateItems = items.filter((element, index)=> {
            return index !== id;
        })
        setItems(updateItems);
    }

    const removeAll = ()=> {
        setItems([]);
    }
    
    return (
        <div className='container'>
            <h1 className="title">
                Todo List App
            </h1>

            <div className="todo-list">
                <div className="list-head">
                    <input type="text" className='entered-list' placeholder='Add items...' value={inputData} onChange={(e)=> setInputData(e.target.value)} />
                    <button className="add-list" onClick={addItems}>ADD</button>
                </div>

                <div className="tasks">
                    {
                        items.map((element, index)=> {
                            return(
                                <div className="item" key={index}>
                                    <p>{element}</p>
                                    <div className="item-btn">
                                    <i class="fa-solid fa-pen-to-square" title="Edit Item"></i>
                                    <i class="fa-solid fa-trash" title="Remove Item" onClick={()=> deleteItem(index)}></i>
                                </div>
                            </div>
                            )
                        })
                    }
                    
                </div>

                <div className="remove-all">
                    <button type="button" className="btn" onClick={removeAll}>REMOVE ALL</button>
                </div>
            </div>
        </div>
    )
}

export default Todos