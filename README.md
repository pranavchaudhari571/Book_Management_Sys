

# book_management_system
Welcome to the Simple Book Management CRUD Application repository, a minimalist yet powerful tool for managing your book collection. This repository focuses on the fundamental CRUD operations - Create, Read, Update, and Delete - providing a straightforward and efficient way to organize and maintain your books.

# Features
*Add Book:Users can add new books with details such as Book ID, Title, Author, Quantity, and Price.

*View Books:
Display a table of existing books with options to edit or delete each entry.

*Edit Book:
Modify book details such as Title, Author, Quantity, and Price.

*Delete Book:
Remove a book from the system.


# Technologies Used
* Express.js: A web application framework for Node.js.
* MySQL: A relational database management system.
* EJS: A simple templating language that lets you generate HTML markup with plain JavaScript.
* Body-Parser: Middleware to handle HTTP POST requests.
* Nodemon: Utility to automatically restart the server during development.


# Learnings
*In the process of building this project, I gained insights into the following:

* Express.js Fundamentals: Understanding how to set up routes, handle HTTP requests, and manage middleware in Express.
* MySQL Integration: Connecting an Express application to a MySQL database and performing CRUD operations.
* EJS Templating: Using EJS to render dynamic content on the server side.
* Middleware Usage: Incorporating middleware like Body-Parser to handle form submissions.
* Project Structuring: Organizing files and structuring the project in a scalable way.
* Error Handling: Implementing basic error handling and displaying user-friendly error messages.


# How to use Apllication
1. Clone the repository:
```bash
git clone https://github.com/pranavchaudhari571/Book_Management_Sys

```
2. Install dependencies:
```bash
cd Book_Management_System
npm install
```
3. Run this script in MySql Client:
```sql

CREATE DATABASE IF NOT EXISTS book_management;


USE book_management;


CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(20),
    title VARCHAR(255),
    author VARCHAR(255),
    price DECIMAL(10,2)
);


CREATE INDEX idx_isbn ON books(isbn);
```
4.Configure MySQL settings in db/dbconnect.js or a separate configuration file:
```javaScript
var mysqlconnection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    port:3306,
    database:'book_management'
    /*multipleSatetments:true*/

})
```
5. Run:
```javaScript
node ./app.js
```
6:The application should be accessible at:
```
http://localhost:9090/books

```
