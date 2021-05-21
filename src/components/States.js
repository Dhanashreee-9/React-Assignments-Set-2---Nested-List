import React, { useState } from "react";
import Cities from "./Cities";


const States = (props) => {
    const [click,setClick] = useState(false);
    return (
        <React.Fragment>
            <div onClick={()=> setClick(!click)} id={`state${props.id}`}>
                <button>{props.state.name} </button>
            </div>
           
                {click ? props.state.cities.map((city ,i) => {
                    return (
                        <Cities city={city} key={i+1} id={i+1} />
                    )
                }) : ""}
           
        </React.Fragment>
    )
}

export default States;
