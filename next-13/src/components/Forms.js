'use client'
import React, {useState} from 'react'

const Forms = (props) => {
    const {title, todo} = props
    const [newTitle, setNewTitle] = useState(title)
    const [newTodo, setNewTodo] = useState(todo)

    return(
        <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="exampleFormControlInput1"
            value={newTitle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Todo
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="todo"
            value={newTodo}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">SUBMIT</button>
        </form>
    )
}

export default Forms