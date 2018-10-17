import React, { Component } from 'react';
import Header from './Header';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                <Header />
                FILEUPLOAD
            </div>                
        )
    }
}

export default FileUpload;
