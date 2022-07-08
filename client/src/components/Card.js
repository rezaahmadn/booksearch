import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import FavoriteButton from "./FavoriteButton";

export default function Card({ book }){
  const [ localBook, setLocalBook ] = useState({})

  useEffect(() => {
    setLocalBook(book)
  },[])

  if(!Object.keys(localBook).length){
    return (
      <>
        <div></div>
      </>
    )
  }

  return (
    <>
       <div className="card" style={{width:"18rem", height: "32rem"}} >
        <img src={localBook.thumbnail} alt={'thumbnail'} className="card-img-top" style={{height:"20rem"}} />
        <div className="card-body">
          <h5 className="card-title text-truncate">{localBook.title}</h5>
          <h6 className="card-text">{ localBook.authors ? localBook.authors.join(', ') : ""}</h6>
          <ReactStars
            classNames='mb-2 mt-0'
            count={5}
            value={localBook.rating || 0}
            edit={false}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />

          <FavoriteButton book={book} />
          
          {/* {localBook.favorite ? <button className="btn btn-danger btn-sm" onClick={() => deleteHandler(localBook.BookId)}>Remove from favorite</button> : <button className="btn btn-primary btn-sm" onClick={() => addHandler(localBook.BookId)}>Add to favorite</button>} */}
        </div>
      </div>
    </>
  )
}