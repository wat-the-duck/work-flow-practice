'use strict'

const api = require('./api.js')

const ui = require('./ui.js')

const onGetAllBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getAllBooksSuccess)
    .catch(ui.getAllBooksFail)
}

const eventHandlers = () => {
  $('#books-button').on('click', onGetAllBooks)
}

module.exports = {
  eventHandlers
}
