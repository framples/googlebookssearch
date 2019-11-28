import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import BootstrapContainer from "../components/BootstrapContainer";
import BookList from "../components/BookList";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    render() {
        return (
            <div>
                <Jumbotron message="Browse books saved from previous searches." />

                <BootstrapContainer>
                    <BookList listName="Saved Books" />
                </BootstrapContainer>
            </div>
        );
    }
}

export default Saved;