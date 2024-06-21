import React from 'react';
import {Link, useParams} from "react-router-dom";


const Youtube=()=> {
    const{youtube} = useParams();
  return (
    <>
     <Link to="id/${youtube}">
     <h1>Watch in Youtube</h1>
     </Link>
    </>
  )
}
export {Youtube};
