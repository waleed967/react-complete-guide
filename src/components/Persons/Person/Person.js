import React from 'react';
import styled from 'styled-components';
// import Radium from 'radium'
const StyledDiv = styled.div`


'@media(min-width: 500px)': {

            width: 450px
            `;
const person = (props) => {

    // const style = {

    //     '@media(min-width: 500px)': {

    //         width: '450px'
    //     }
    // }
    return (


        // <div className="Person">
        <StyledDiv>
            <p onClick={props.click}>My Name Is {props.name} and I am {props.age}
    year old </p >
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </StyledDiv>



    )

};
export default person;