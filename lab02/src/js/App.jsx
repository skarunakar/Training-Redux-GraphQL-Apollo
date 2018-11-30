import React, { Component } from 'react';
import '../css/App.css';
import { connect } from "react-redux";
import axios from "axios";
import store from "./reducers" 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    };
    getBookDetails = () => {
       axios.post("http://localhost:4000/graphql", {query: `{
        books {
         id, title, price
        }}`}).then(response => store.dispatch({type: "GET_BOOKS", payload: response.data})); 
    };
    render = () =>{
        return (
        <div className="App">
          <header className="App-header">
            <button onClick={this.getBookDetails}>Fetch Books</button>
          </header>
          <div id="message">
              {this.props.books}
          </div>  
        </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(App);
