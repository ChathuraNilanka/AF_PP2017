import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './App.css';

import AddBook from './AddBook';

export default class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            books: []
        };
    }

    componentDidMount(){
        fetch('/af/books/get', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
            const _books = [];

            for(const book of data){
                _books.push(
                    <tr key={book._id}>
                        <td>{book.name}</td>
                        <td>{book.isbn}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td>{book.year}</td>
                        <td>{book.publisher}</td>
                    </tr>
                );
            }
            this.setState(
                this.state.books = _books
            );

            console.log("Books", this.state.books)
        }).catch(err => {
            console.log(err);
        });
    }

    addBook(){
        ReactDOM.render(<AddBook/>, document.getElementById('root'));
    }

    render(){
        return(
            <div>
                <h2>Books List</h2>
                <table align="center">
                    <tbody>
                        <tr>
                            <th>Book Name</th>
                            <th>ISBN</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Year</th>
                            <th>Publisher</th>
                        </tr>
                        {this.state.books}
                    </tbody>
                        <button onClick={this.addBook} >Add New Book</button>
                </table>
            </div>
        )
    }
}