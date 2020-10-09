import React, { Component } from 'react';
import styled from 'styled-components';
// import Radium from 'radium'
const StyledDiv = styled.div`


'@media(min-width: 500px)': {

            width: 450px
            `;
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        // const style = {

        //     '@media(min-width: 500px)': {

        //         width: '450px'
        //     }
        // }
        return (


            // <div className="Person">
            <StyledDiv>
                <p onClick={this.props.click}>My Name Is {this.props.name} and I am {this.props.age}
    year old </p >
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} />
            </StyledDiv>



        )

    };




}

export default Person;