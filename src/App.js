
import React, { Component } from 'react';
import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput'
import Person from './Person/Person'
class App extends Component {


    state =

        {

            persons: [
                {

                    name: "Waleed", age: "25"

                },
                {

                    name: "Adeel", age: "26"

                },
                {

                    name: "Talha", age: "27"

                }

            ],
            showPersons: false

        }



    switchNameHandler = (newName) => {

        this.setState({

            persons: [
                { name: newName, age: 28 },
                { name: 'Zia', age: 30 },

                { name: 'Haider', age: 31 },



            ]


        });


    }

    togglePersonHandler = () => {

        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });

    }
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

                    <button onClick={this.togglePersonHandler}>Button</button>
                    {
                        this.state.showPersons === true ?
                            <div>
                                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
                                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
                                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, 'Ahmed')}></Person>
                            </div> : null
                    }
                </header >

            </div >
        );


    }
}
export default App;

