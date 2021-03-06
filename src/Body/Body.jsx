import { useState } from "react";
import ItemList from "../ItemList/ItemList"

function Body (props) {
    // const [ name, setName ] = useState( null );

    const [ currentItem, setCurrentItem ] = useState({
        name: '',
        description:''
    });

    const [ items, setItems ] = useState( [] );

    const handleNameChange = ( event ) => {
        console.log('in handleNameChange:', event.target.value );
        setCurrentItem(
            {...currentItem, name: event.target.value }
        )
    }

    const handleDescriptionChange = ( event ) => {
        console.log('in handleDescriptionChange:', event.target.value );
        setCurrentItem(
            {...currentItem, description: event.target.value }
        )
    }

    const addItem = ()=>{
        console.log( 'in addItem' );
        setItems([...items, currentItem ] )
    }

    return(
        <div>
            <h1>Body</h1>
            <div>
                <input type="text" placeholder="name" onChange= { (event)=> handleNameChange(event) } />
                <input type="text" placeholder="description" onChange= { (event)=> handleDescriptionChange(event) } />
                <button onClick={ addItem }>Add Item</button>
            </div>
            <ItemList items={ items } />
        </div>
    )
}

export default Body;