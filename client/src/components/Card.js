import { Link } from "react-router-dom";

export default function Card(){
  return (
    <>
       <div className="card" style={{width:"18rem"}} >
        <img src={'http://books.google.com/books/publisher/content?id=FmyBAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70pyE2YCMH-tHVbQBAteF384KwGxjbssLF1aB-pqwRU_po0bOYG1AKI5Kj9vWN0yjc5Kk-FjlBr6GPB5YbBDNhrboMRGESeZRQdSUlqZhLr2La1i__wc_UH9OETYrHa3jb03aje&source=gbs_api'} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Sapiens</h5>
          <p className='badge rounded-pill text-bg-secondary'>4/5</p>
          <p className="card-text">Yuval Noah Harari</p>
          <Link to={`/favorites/`} className="btn btn-primary m-2">Add to favorite</Link>
          {/* <a onClick={()=>{onClickHandler(pokemon.id)}} className="btn btn-danger">Delete</a> */}
        </div>
      </div>
    </>
  )
}