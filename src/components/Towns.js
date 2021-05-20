import React from "react";

const Towns = (props) => {
    return (
        <React.Fragment>
             <li id={`town${props.id}`}>
                <button>{props.town.name} </button>
            </li>
        </React.Fragment>
    )
}

export default Towns;
