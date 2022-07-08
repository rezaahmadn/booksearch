import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export default function Card(){
  return (
    <>
       <div className="card" style={{width:"18rem"}} >
        <img src={'http://books.google.com/books/publisher/content?id=FmyBAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70pyE2YCMH-tHVbQBAteF384KwGxjbssLF1aB-pqwRU_po0bOYG1AKI5Kj9vWN0yjc5Kk-FjlBr6GPB5YbBDNhrboMRGESeZRQdSUlqZhLr2La1i__wc_UH9OETYrHa3jb03aje&source=gbs_api'} alt={'thumbnail'} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Sapiens</h5>
          <h6 className="card-text">Yuval Noah Harari</h6>
          <ReactStars
            classNames='mb-2 mt-0'
            count={5}
            value={4}
            edit={false}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          
          <Link to={`/favorites/`} className="btn btn-primary">Add to favorite</Link>
          <button className="btn btn-secondary disabled">Favorite</button>
          {/* <a onClick={()=>{onClickHandler(pokemon.id)}} className="btn btn-danger">Delete</a> */}
        </div>
      </div>
    </>
  )
}