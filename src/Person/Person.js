import React from 'react';

const person = (props) => {
    return (


        <div><p onClick={props.click}> My Name Is {props.name} and I am {props.age}
    year old </p>
            <p>{props.children}</p>
            <input type="text" />
        </div>



    )

};
export default person;