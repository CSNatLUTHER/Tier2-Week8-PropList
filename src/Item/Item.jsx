import { useState } from "react";

function Item (props) {
    // const [ name, setName ] = useState( null );
    return(
        <div>
            <li>
                {props.myItem.name}: {props.myItem.description}
            </li>
        </div>
    )
}

export default Item;