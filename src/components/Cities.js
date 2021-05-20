import React, { useState } from "react";
import Towns from './Towns';


const Cities = (props) => {
    const [click2,setClick2] = useState(false);
    return (
        <React.Fragment>
               <li onClick={()=> setClick2(!click2)}  id={`city${props.id}`}>
                <button>{props.city.name} </button>
            </li>
            <ul>
                {click2 ? props.city.towns.map((town ,i) => {
                    return (
                        <Towns town={town} key={i+1} id={i+1} />
                    )
                }) : ""}
            </ul>
         </React.Fragment>
    )
}

export default Cities;
