import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FileInfo from './FileInfo';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import styled from 'styled-components';
const ROOT_URL = 'http://localhost:5000';

const DragFile = styled.div`
    padding: 70px 0;
    text-align: center;
    width: 100% - 100px;
    height: 200px;
    background-color: lightyellow;
    margin: 30px 50px;
    border: 3px dashed darkgrey;
`

const styles = {
    button: {
        margin: '30px 50px',
        width: '25%',
    },
  };

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            size: '',
            img: '',
            value: '',
        };
    };

    handleDrop = event => {
        event.preventDefault();
        const file = event.dataTransfer.items[0].getAsFile();
        console.log('files', file);
        let value = file.type.slice(0, 5) === 'image' ? 'img' : 'value';
        if (window.FileReader) {
            const fr = new FileReader();
            fr.onload = (read) => {
                this.setState({ [value]: read.target.result, file }, () => console.log('state', this.state));
            };
            fr.readAsDataURL(file);
        }
    }

    handleDragover = (e) => { 
        e.preventDefault();
    };

    handleSubmit = () => {
        const base64file = this.state.value ? this.state.value : this.state.img;
        axios.post(`${ROOT_URL}/file`, { file: base64file })
            .then(result => console.log('done'))
            .catch(err => console.log('error', err));
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <DragFile onDrop={this.handleDrop} onDragOver={this.handleDragover}>
                    {this.state.img ? 
                        <img src={this.state.img} alt='uploaded img'/> 
                        : <h2>{this.state.value ? 
                                'File ready to be uploaded' 
                                : 'Drop a file here to upload!'
                        }</h2>
                    }
                </DragFile>
                <FileInfo file={this.state.file}/>
                <Button 
                    className={classes.button}
                    variant='contained' 
                    color='primary' 
                    size='large' 
                    onClick={this.handleSubmit}
                >
                    Submit
                </Button>
            </div>
        )
    }
}

export default withStyles(styles)(FileUpload);
