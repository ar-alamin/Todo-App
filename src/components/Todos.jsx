import React, { useState } from 'react'
import './Todos.css'

function Todos() {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggle, setToggle] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItems = ()=> {
        if(!inputData){
            alert('plese fill data');
        } else if(inputData && !toggle) {
            setItems(
                items.map((element)=> {
                    if(element.id === isEditItem){
                        return {...element, name: inputData}
                    }
                    return element;
                })
            )
            setToggle(true);
            setInputData('');
            setIsEditItem(null);
            
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('');
        }    
    }

    const deleteItem = (index)=> {
        const updateItems = items.filter((element)=> {
            return index !== element.id;
        })
        setItems(updateItems);
    }

    const removeAll = ()=> {
        setItems([]);
    }

    const editItem = (id)=> {
        let newEditItem = items.find((element)=>{
            return element.id === id;
        });
        setToggle(false);
        setInputData(newEditItem.name);
        setIsEditItem(id);
    }
    
    return (
        <div className='container'>
            <h1 className="title">
                Todo List App
            </h1>

            <div className="todo-list">
                <div className="list-head">
                    <input type="text" className='entered-list' placeholder='✍️Add items...' value={inputData} onChange={(e)=> setInputData(e.target.value)} />

                    {
                        toggle ? <button className="add-list" onClick={addItems}><i class="fa-solid fa-plus" title='Add Item' /></button> : <button className="add-list" onClick={addItems}><i class="fa-solid fa-pen-to-square" title='Edit Item' /></button>
                    }
                </div>

                <div className="tasks">
                    {
                        items.map((element)=> {
                            return(
                                <div className="item" key={element.id}>
                                    <p>{element.name}</p>
                                    <div className="item-btn">
                                    <i class="fa-solid fa-pen-to-square" title="Edit Item" onClick={()=> editItem(element.id)}></i>
                                    <i class="fa-solid fa-trash" title="Remove Item" onClick={()=> deleteItem(element.id)}></i>
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