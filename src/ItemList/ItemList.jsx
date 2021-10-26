import { useState } from "react";
import Item from '../Item/Item'

function ItemList (props) {
    // const [ name, setName ] = useState( null );
    return(
        <div>
            <h1>List of Items</h1>
            {
                props.items.map( ( thisItem ) => ( <Item myItem={ thisItem } />) )
            }
        </div>
    )
}

export default ItemList;