import Card from "./Card"

export default function CardList({ books }){
  console.log(books);
  if (!books.length) {
    return (
      <>
        <div></div>
      </>
    )
  }

  return (
    <>
      <div className="row mx-2 px-5">
        {books.map(book => <div className="col-sm-3 my-2" key={book.id}><Card book={book} /></div>)}
      </div>
    </>
  )
}