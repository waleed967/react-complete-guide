
import React, { Component } from 'react';
import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput'
// import Person from './Person/Person'
// import List from './List/List'
class App extends Component {
    constructor(props) {
        super(props)

        this.state =
        {



            // persons: [
            // {
            value: " ",
        }
        // , age: "25"
        // },
        // {
        //     name: "Adeel", age: "26"
        // },
        // {
        //     name: "Talha", age: "27"
        // }
        // ],
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    };



    // switchNameHandler = (newName) => {

    //     this.setState({

    // persons: [
    // { 
    // name: newName
    // , age: 28
    // },
    // { name: 'Zia', age: 30 },

    // { name: 'Haider', age: 31 },



    // ]


    //     });


    // }
    handleChange = (event) => {
        this.setState({ value: event.target.value });


    }

    handleSubmit = (event) => {
        alert('Num Submitted' + this.state.value);
        event.preventDefault();


    }


    // togglePersonHandler = () => {

    //     const doesShow = this.state.showPersons;
    //     this.setState({ showPersons: !doesShow });

    // }
    // nameChangeHandler = (event) => {
    //     this.setState({
    //         persons: [
    //             {

    //                 name: "Waleed", age: "25"

    //             },
    //             {

    //                 name: "Adeel", age: "26"

    //             },
    //             {

    //                 name: event.target.value, age: "27"

    //             }


    //         ]


    //     })



    // }

    render() {
        return (

            <div className="App" >
                <header className="App-header" >
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
<input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    {/* <button onClick={this.changeNumHandler}>Button</button>
                    <List num={this.state.num}></List> */}
                    {/* { */}
                    {/* this.state.showPersons === true ? */}
                    {/* <div> */}

                    {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, 'Ahmed')}></Person> */}
                    {/* </div> : null */}
                    {/* } */}
                </header >

            </div >
        );


    }
}
export default App;

