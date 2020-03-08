'use strict'

const showAllBooks = require('./templates/books.handlebars')

const getAllBooksSuccess = (data) => {
  console.log(data)

  const showBooksHandlebars = showAllBooks({ books: data.books })
  $('.content').append(showBooksHandlebars)
}

module.exports = getAllBooksSuccess
