import { useEffect, useState } from "react"
import CardList from "./CardList"

const FAVORITES_API = 'https://booksearch-test-app.herokuapp.com/favorites/'
const BOOKSEARCH_API = 'https://www.googleapis.com/books/v1/volumes?q='

export default function Main(){
  const [keyword, setKeyword] = useState('')
  const [favorites, setFavorites] = useState([])
  const [results, setResults] = useState([])

  useEffect(() => {
    fetch(FAVORITES_API)
    .then(response => {
      if(!response.ok) throw new Error('Fetch failed')
      return response.json()
    })
    .then(favoritesData => {
      setFavorites(favoritesData)
    })
    .catch(error => console.log(error))
  }, [])

  const onChangeHandler = (e) => {
    e.preventDefault()
    setKeyword(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    fetch(BOOKSEARCH_API+keyword)
    .then(response => {
      if(!response.ok) throw new Error('Fetch failed')
      return response.json()
    })
    .then(data => {
      const { items } = data
      const books = []
      items.forEach(item => {
        let favorite = favorites.find(favorite => favorite.id === item.id) === undefined ? false : true
        books.push({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          thumbnail: item.volumeInfo.imageLinks === undefined ? "https://www.bastiaanmulder.nl/wp-content/uploads/2013/11/dummy-image-square.jpg" : `${item.volumeInfo.imageLinks.thumbnail}`,
          rating: item.volumeInfo.averageRating,
          favorite
        })
      })
      setResults(books)
    })
    .catch(error => console.log(error))
  }

  return (
    <>
      <div className="display-5 my-4 text-center">Welcome to Booksearch</div>
      <div className="mx-2 px-5 py-3">
        <form className="input-group input-group-sm" onSubmit={onSubmitHandler}>
          <input type="text" className="form-control " placeholder="Keyword" onChange={onChangeHandler} value={keyword} required />
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
        </form>
      </div>
      <div className="row mx-2 px-5">
        <CardList books={results} />
      </div>
    </>
  )
}