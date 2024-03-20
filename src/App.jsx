import React, { useState } from 'react'
import Todolist from './Todolist';

const App=()=>{
    const[inputList,setInputList] = useState();
    const[items,setItems] = useState([]);

    const InputEvent=(event)=>{
        setInputList(event.target.value);
    }

    const ListOfItems=()=>{
        setItems((olditems)=>{
            return[...olditems,inputList]
        })
        setInputList('');
    }

    const deleteItem=(id)=>{
        //console.log("deleted")
        setItems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }; 

    return (
        <>
            <div className='main_div'>
                <div className='central_div'>
                    <h1>ToDo List</h1>
                    <input type='text' placeholder='Add Item' onChange={InputEvent} value={inputList}/> 
                    <button onClick={ListOfItems}>+</button>

                    <ol>
                        {/* <li>{inputList}</li> */}
                        {/* {
                        items.map((itemvalue)=>{
                            return <li>{itemvalue}</li>
                        })
                        } */}

                        {
                        items.map((itemvalue,index)=>{
                            return(
                            <Todolist key={index} id={index} onSelect = {deleteItem} text = {itemvalue}/>
                            )
                        })
                        }

                    </ol>
                </div>
            </div>
        </>
    )
}

export default App;
