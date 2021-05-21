import React, { useState } from "react";
import Towns from './Towns';


const Cities = (props) => {
    const [click2,setClick2] = useState(false);
    return (
        <React.Fragment>
               <div onClick={()=> setClick2(!click2)}  id={`city${props.id}`}>
                <button>{props.city.name} </button>
            </div>
            
                {click2 ? props.city.towns.map((town ,i) => {
                    return (
                        <Towns town={town} key={i+1} id={i+1} />
                    )
                }) : ""}
          
         </React.Fragment>
    )
}

export default Cities;
