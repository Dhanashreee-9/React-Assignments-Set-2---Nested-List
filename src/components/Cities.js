// import React, { useState } from "react";
// import Towns from './Towns';


// const Cities = (props) => {
//     const [click2,setClick2] = useState(false);
//     return (
//         <React.Fragment>
//                <li onClick={()=> setClick2(!click2)}  id={`city${props.id}`}>
//                 <button>{props.cities.name} </button>
//             </li>
//             <ul>
//                 {
//                   click2 ? props.cities.towns.map((town ,i) => {
//                     return (
//                         <Towns key={i+1} town={town}  id={i+1} />
//                     )
//                    }) :
//                  ""}
//             </ul>
               
          
//          </React.Fragment>
//     )
// }

// export default Cities;

import React, { useState } from 'react';
import Town from './Towns';


export default function Cities(props) {
  const [click, setclick] = useState(false)
  const changeClick = () => {
    setclick(!click);
  }
  return (
    <>
      <li onClick={changeClick} id={`city${props.id}`}><button>{props.cities.name}</button></li>
      <ul>
        {click ? props.cities.towns.map((town, index) => {
          return <Town town={town} key={index + 1} id={index + 1}/>
        }):""}
      </ul>
    </>
  )
}
