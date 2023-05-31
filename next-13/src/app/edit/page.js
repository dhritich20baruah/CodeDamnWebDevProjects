export default function Edit(){
    return(
        <div className="container">
        <h1>Edit Todo</h1>
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
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">SUBMIT</button>
        </form>
      </div>
    )
}