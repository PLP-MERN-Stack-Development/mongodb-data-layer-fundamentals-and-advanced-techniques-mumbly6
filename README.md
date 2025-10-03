📚 PLP Bookstore – MongoDB Project
📖 Overview

This project sets up a MongoDB database for a bookstore application.
We implemented basic CRUD operations, advanced queries, aggregation pipelines, and indexing using MongoDB.

The project consists of:

A script to insert sample book data into MongoDB (insert_books.js)

A file containing all MongoDB queries (queries.js)

Documentation (README.md) and a screenshot of MongoDB Compass/Atlas

🛠️ Setup Instructions
1. Install MongoDB

Option A: Install MongoDB Community Edition
 locally.

Option B: Use MongoDB Atlas
 (free cluster).

2. Clone the repository
git clone <your-repo-url>
cd <your-repo-folder>

3. Insert sample data

Run the script to populate the database with 12 books:

node insert_books.js


This will:

Create database: plp_bookstore

Create collection: books

Insert sample book documents

4. Run queries

Open MongoDB Shell:

mongosh "mongodb://localhost:27017/plp_bookstore"


Load queries:

load("queries.js")

📂 Files in this Project

insert_books.js → Script to connect to MongoDB and insert 12 sample book documents.

queries.js → Contains MongoDB queries for CRUD, advanced filtering, projections, sorting, pagination, aggregation, and indexing.

README.md → Documentation of setup, usage, and project tasks.

screenshot.png → Proof of MongoDB Compass/Atlas with the books collection.

✅ Tasks Completed
Task 1: MongoDB Setup

Installed MongoDB (local/Atlas).

Created database plp_bookstore.

Created collection books.

Task 2: Basic CRUD Operations

Inserted 12 book documents with fields:
title, author, genre, published_year, price, in_stock, pages, publisher.

Implemented queries to:

Find books by genre

Find books published after a year

Find books by author

Update book price

Delete book by title

Task 3: Advanced Queries

Find books in stock and published after 2010.

Projection to show only title, author, and price.

Sorting by price (ascending & descending).

Pagination with limit() and skip().

Task 4: Aggregation Pipelines

Average price of books by genre.

Author with the most books.

Group books by publication decade.

Task 5: Indexing

Created an index on title.

Created a compound index on author and published_year.



