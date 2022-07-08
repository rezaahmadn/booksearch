import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
const FAVORITES_API = 'https://booksearch-test-app.herokuapp.com/favorites/'

export default function FavoriteButton({ book }){
  const [ localFavorite, setLocalFavorite ] = useState(false)

  useEffect(() => {
    setLocalFavorite(book.favorite)
  }, [])

  const onAddHandler = (id) => {
    const payload = book
    delete payload.favorite
    console.log(payload);
    fetch(FAVORITES_API, {
      method: 'POST',
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      console.log(response)
      if(!response.ok) throw new Error('Failed to add to favorite')
      return response.json()
    })
    .then(response => {
      console.log(response)
      setLocalFavorite(!localFavorite)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Added to favorite',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error => console.log(error))
  }

  const onDeleteHandler = (id) => {
    fetch(FAVORITES_API+id, {
      method: 'DELETE'
    })
    .then(response => {
      console.log(response)
      if(!response.ok) throw new Error('Failed to remove from favorite')
      return response.json()
    })
    .then(response => {
      console.log(response)
      setLocalFavorite(!localFavorite)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Removed from favorite',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(error => console.log(error))
  }

  if (localFavorite){
    return (
      <>
        <button className="btn btn-danger btn-sm" onClick={() => onDeleteHandler(book.id)}>Remove from favorite</button>
      </>
    )
  } 
    
  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={() => onAddHandler(book.id)}> Add to favorite </button>
    </>
  )
  
}