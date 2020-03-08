'use strict'

const config = require('./config.js')

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books'
  })
}

// const deleteBooks = function (bookId) {
//   return $.ajax({
//     url: config.apiUrl + '/books/' + bookId,
//     method: 'DELETE'
//   })
// }

module.exports = {
  getBooks
  // deleteBooks
}
