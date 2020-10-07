
import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
class App extends Component {


    state =
        {



            name: "Waleed"






        }



    nameChangedHandler = (event) => {

        this.setState({




            name: event.target.value









        });


    }

    render() {
        return (

            <div className="App" >
                <header className="App-header" >
                    <UserInput changed={this.nameChangedHandler}
                        currentName={this.state.name}></UserInput>
                    <UserOutput userName={this.state.name}></UserOutput>
                    <UserOutput userName={this.state.name}  ></UserOutput>
                </header >

            </div >
        );


    }
}
export default App;

