// queries.js - MongoDB Queries for plp_bookstore

// === Basic CRUD ===

// Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// Find books published after a certain year (e.g. after 1950)
db.books.find({ published_year: { $gt: 1950 } })

// Find books by a specific author (George Orwell)
db.books.find({ author: "George Orwell" })

// Update the price of a specific book (e.g. "1984")
db.books.updateOne({ title: "1984" }, { $set: { price: 12.50 } })

// Delete a book by its title (e.g. "The Alchemist")
db.books.deleteOne({ title: "The Alchemist" })


// === Advanced Queries ===

// Find books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Projection: return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort books by price ascending
db.books.find().sort({ price: 1 })

// Sort books by price descending
db.books.find().sort({ price: -1 })

// Pagination (5 books per page)
// Page 1
db.books.find().skip(0).limit(5)
// Page 2
db.books.find().skip(5).limit(5)


// === Aggregation Pipelines ===

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// Group books by publication decade
db.books.aggregate([
  {
    $project: {
      decade: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])


// === Indexing ===

// Create index on title
db.books.createIndex({ title: 1 })

// Create compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Show performance improvements with explain
db.books.find({ title: "1984" }).explain("executionStats")
