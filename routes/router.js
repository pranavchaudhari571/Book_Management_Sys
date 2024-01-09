const express = require("express");
const router = express.Router();
const connection = require("../db/dbconnect");

router.get("/books",function(req,resp){
    connection.query("select * from books",(err,data,fields)=>{
    if(err){
     console.log(err);
     resp.status(500).send("<h3>no data found</h3>")
    }else{
     console.log(data);
     //this will generate ./views/index.ejs
     resp.render("book-index", { bookdata: data });
    }
    })
 
 });

router.get("/displayaddform", (req, resp) => {
    resp.render("add-book");
});

router.post("/addbook", function(req, resp)  {
    connection.query("INSERT INTO books VALUES (default,?, ?, ?, ?)", [req.body.isbn, req.body.title, req.body.author, req.body.price], function(err, result) {
        if (err) {
            console.error(err);
            resp.status(500).send("<h3>No data found</h3>");
        } else {
            console.log(result);
            resp.redirect("/books");
        }
    })
});

router.get("/deletebook/:isbn", function(req, resp)  {
    connection.query("DELETE FROM books WHERE isbn=?", [req.params.isbn], function(err, result) {
        if (err) {
            console.error(err);
            resp.status(500).send("<h3>No data found</h3>");
        } else {
            console.log(result);
            resp.redirect("/books");
        }
    });
});

router.get("/editbook/:isbn", function(req, resp) {
    connection.query("SELECT * FROM books WHERE isbn=?", [req.params.isbn], function(err, data) {
        if (err) {
            console.error(err);
            resp.status(500).send("<h3>No data found</h3>");
        } else {
            console.log(data);
            resp.render("edit-book", { book: data[0] });
        }
    });
});

router.post("/updatebook", function(req, resp)  {
    connection.query("UPDATE books SET title=?, author=?, price=? WHERE isbn=?", [req.body.title, req.body.author, req.body.price, req.body.isbn], function(err, result)  {
        if (err) {
            console.error(err);
            resp.status(500).send("<h3>No data updated</h3>");
        } else {
            console.log(result);
            resp.redirect("/books");
        }
    });
});

module.exports = router;
