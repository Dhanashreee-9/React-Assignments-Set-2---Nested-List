import React from "react";

const Towns = (props) => {
    return (
        <React.Fragment>
             <div id={`town${props.id}`}>
                <button>{props.town.name} </button>
            </div>
        </React.Fragment>
    )
}


export default Towns;
