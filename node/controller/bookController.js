const Book = require('../model/book');

exports.add = (req, res)=> {
    let book = new Book();

    book.name = req.body.name;
    book.isbn = req.body.isbn;
    book.author = req.body.author;
    book.price = req.body.price;
    book.year = req.body.year;
    book.publisher = req.body.publisher;

    book.save((e)=>{
        if(e){
            res.json(e);
            console.log("Error",e);
        }
        res.json({
            "message": "Success",
            Book: book
        });
    });
};

exports.getAll = (req, res)=>{
    Book.find((err, Data)=>{
        if(err){
            res.json(err);
            console.log("Error", err);
        }

        res.json(Data);
    });
};

exports.filter = (req, res)=>{
    let query = {
        author: req.params.author
    };

    Book.find(query, (err, Data)=>{
        if(err){
            res.json(err);
            console.log("Error", err);
        }
        res.json(Data);
    });
};