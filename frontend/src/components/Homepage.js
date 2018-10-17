import React, { Component } from 'react';
import Header from './Header';
import FileUpload from './FileUpload';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <Header />
                <FileUpload />
            </div>
        )
    }
}

export default Homepage;
