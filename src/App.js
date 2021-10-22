import React from 'react';
import axios from 'axios'
import  './App.css';

class App extends React.Component {
    state = {advice: ''};

    componentDidMount() {
        this.fetchAdvices();
    }

    
    fetchAdvices= () =>{
        axios.get('https://api.adviceslip.com/advice')

        .then((res) =>{
            const { advice } = res.data.slip;
            console.log(advice)

        })
        .catch((err) =>{
            console.log(err)

        });
    };

    render() {
        return (
            <h1>App</h1>
        );
    }
}
export default App;