import React from "react";
const Credit = (props) => {
    const {name, id} = props;

    return(
        <div>Powered By {name} {id}</div>
    )
}

export default Credit; 