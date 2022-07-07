import { useState } from "react"
import Card from "./Card"


export default function Main(){
  const [keyword, setKeyword] = useState('')

  const onChangeHandler = (e) => {
    e.preventDefault()
    setKeyword(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    console.log(keyword)
  }

  return (
    <>
      <div className="mx-2 px-5 py-3">
        <form className="input-group input-group-sm" onSubmit={onSubmitHandler}>
          <input type="text" className="form-control " placeholder="Keyword" onChange={onChangeHandler} value={keyword} required />
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
        </form>
      </div>
      <div className="row mx-2 px-5">
        <Card />
      </div>
    </>
  )
}