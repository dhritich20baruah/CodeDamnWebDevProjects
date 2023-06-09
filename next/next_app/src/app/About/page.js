export default async function About(){
  let info = await fetch('https://dummyjson.com/users')
  .then(res => res.json())

  let arr = [...info.users]
  return(
    <div>
      <h1 className="text-center font-bold text-2xl">About</h1>
      {arr.map((element)=>{
        return(
          <div>
            <ul key={element.id} className="flex space-x-3 justify-center my-3">
              <li>First Name: {element.firstName} |</li>
              <li>last Name: {element.lastName} |</li>
              <li>Phone: {element.phone}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}