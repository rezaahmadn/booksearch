import { useEffect, useState } from "react";
import CardList from "./CardList";
const FAVORITES_API = 'http://localhost:4001/favorites/'

export default function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch(FAVORITES_API)
    .then(response => {
      if(!response.ok) throw new Error('Fetch failed')
      return response.json()
    })
    .then(favoritesData => {
      favoritesData.forEach(fav => fav.favorite = true)
      setFavorites(favoritesData)
    })
    .catch(error => console.log(error))
  }, [])

  if(!favorites.length){
    return (
      <>
        <div></div>
      </>
    )
  }

  return (
    <>
      <div className="row mx-2 px-5">
        <CardList books={favorites} />
      </div>
    </>
  )
}