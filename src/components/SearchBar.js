
import React from 'react'

export default ({handleInput,city,getResult}) => {
  return (
    <form onSubmit={getResult} className="input-group">
      <input 
        type="text"
        value={city}
        onChange={handleInput}
        placeholder="Get a five-day forecast in your favorite cities"
        className="form-control"
        required/>
      <span className="input-group-btn">
      <button type="submit" className="btn btn-warning">Search</button>
    </span>
    </form>
  )
}
