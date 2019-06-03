import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import App from './App';

export default class AddBook extends Component{
    constructor(props){
        super(props);

        this.state = {
            authors: []
        };
    }

    componentDidMount(){
        fetch('af/authors', {method: 'GET'})
        .then(res => res.json())
        .then(_data => {
            const option = [];

            for(const aut of _data){
                const authname = aut.fName + " " + aut.lName;
                option.push(<option key={aut._id} value={authname}>{authname}</option>)
            }
            this.setState(
                this.state.authors = option
            );
        });

    }

    _cancel(){
        ReactDOM.render(<App/>, document.getElementById('root'));
    }

    _submit(){
        let body = {
            name: this.refs.name.value,
            isbn: this.refs.isbn.value,
            author: this.refs.author.value,
            price: this.refs.price.value,
            year: this.refs.year.value,
            publisher: this.refs.publisher.value
        }

        fetch('/af/books/add', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            console.log(res);
            alert("New bokk added successfully");
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
        return(
            <div>

                <form onSubmit={this._submit}>
                    <table align="center">
                        <h2>Add new Book</h2>
                        <tbody>
                            <tr>
                                <td>Book Name</td>
                                <td><input type="text" ref="name"/></td>
                            </tr>
                            <tr>
                                <td>ISBN</td>
                                <td><input type="text" ref="isbn"/></td>
                            </tr>
                            <tr>
                                <td>Select Author</td>
                                <td><select type="text" ref="author">{this.state.authors}</select></td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td><input type="text" ref="price"/></td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td><input type="text" ref="year"/></td>
                            </tr>
                            <tr>
                                <td>Publisher</td>
                                <td><input type="text" ref="publisher"/></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <button type='submit'>Add</button>
                                    <button onClick={this._cancel}>Cancel</button>
                                </td>   
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}