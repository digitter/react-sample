import React, { useState, useEffect } from 'react'

export default function BookList() {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState({})

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(books => setBooks(books))
  }, [])

  const handleShowDetails = book => {
    setSelectedBook(book)
  }

  return (
    <div>
      <h1>Book List</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <table style={{ marginRight: 50 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr key={index}>
                  <td >{book.id}</td>
                  <td>{book.title}</td>
                  <td>
                    <button onClick={() => handleShowDetails(book)}>
                      View Details 👀
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {Object.keys(selectedBook).length ? (
          <div style={{ border: '5px solid gray' }}>
            <button onClick={() => handleShowDetails({})}>Close ❌</button>

            <p>ID: {selectedBook.id}</p>
            <p>Title: {selectedBook.title}</p>
            <p>Body: {selectedBook.body}</p>
            <p>Created At: {selectedBook.created_at}</p>
          </div>
        ) : null
        }
      </div>
    </div>
  )
}
