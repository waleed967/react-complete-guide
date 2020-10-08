
import React, { Component } from 'react';
// import { findRenderedComponentWithType } from 'react-dom/test-utils';
import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput'
import Person from './Person/Person'
import Radium from 'radium'
// import List from './List/List'
class App extends Component {
    // constructor(props) {
    //     super(props)

    // this.
    state =
        {



            persons: [
                {
                    //     value: " ",
                    // }
                    id: "uwqtuwt1", name: "Waleed", age: "25"
                },
                {
                    id: "uryeure2", name: "Adeel", age: "26"
                },
                {
                    id: "uefhuef3", name: "Talha", age: "27"
                }
            ],
            showPersons: false
            //         this.handleChange = this.handleChange.bind(this);
            // this.handleSubmit = this.handleSubmit.bind(this)
        };



    // switchNameHandler = (newName) => {

    //     this.setState({

    //         persons: [
    //             {
    //                 name: newName
    //                 , age: 28
    //             },
    //             { name: 'Zia', age: 30 },

    //             { name: 'Haider', age: 31 }



    //         ]


    //     });


    // }
    // handleChange = (event) => {
    //     this.setState({ value: event.target.value });


    // }

    // handleSubmit = (event) => {
    //     alert('Values are Submited' + this.state.value);
    //     event.preventDefault();


    // }


    togglePersonHandler = () => {

        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });

    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })


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
        const style = {
            backgroundColor: 'white',
            ':hover': {

                backgroundColor: 'lightgreen',
                color: ' white'

            }




        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (<div>
                {this.state.persons.map((person, index) => {

                    return <Person
                        name={person.name}
                        age={person.age}
                        click={() => this.deletePersonHandler(index)}
                        key={person.id} />
                })}


            </div>);

            style.backgroundColor = 'red'
            style[':hover'] = {

                backgroundColor: 'salmon',
                color: ' white'

            }

        }
        const classes = [];
        if (this.state.persons.length <= 2) {

            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }
        return (

            <div className="App" >
                <header className="App-header" >
                    {/* <form onSubmit={this.handleSubmit}>
                        <label>
                            Values:
<input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form> */}
                    <p className={classes.join(' ')}> My Name is Waleed</p>
                    <button style={style} onClick={this.togglePersonHandler}>Button</button>
                    {persons}
                    {/* <List num={this.state.num}></List> */}
                    {/* {
                        this.state.showPersons === true ? */}

                    {/* : null */}
                    {/* } */}
                </header >

            </div >
        );


    }
}
export default Radium(App);

