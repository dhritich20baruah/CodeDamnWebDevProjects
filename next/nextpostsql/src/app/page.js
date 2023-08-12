import { redirect } from "next/navigation"
import { pool } from "./utils/dbConnect"
import dbConnect from "./utils/dbConnect"
import Link from "next/link"

export default async function Home() {
 dbConnect()

 //CREATE
  async function createNote(data){
    "use server"
    let note = data.get("note")?.valueOf()
    let writtenBy = data.get("writtenBy")?.valueOf()

    try{
      const newNote = await pool.query('INSERT INTO notes (note, written_by) VALUES ($1, $2) RETURNING *', [note, writtenBy])
      console.log(newNote.rows[0])
    }
    catch(error){
      console.log(error)
    }
    redirect('/')
  }

  //READ
  const data = await pool.query("SELECT * FROM notes");
  const result = data.rows;

  //UPDATE

  //DELETE
  async function deleteNote(data){
    "use server"
    let id = data.get("id")?.valueOf()

    try{
      await pool.query('DELETE FROM notes WHERE id=$1', [id])
      console.log('note deleted')
    }
    catch(error){
      console.log(error)
    }
    redirect('/')
  }

  return (
    <main className="m-10">
      <div className="m-5">
        <h1 className="text-center m-5">Add Note</h1>
        <form action={createNote} className="space-y-5">
          <input
            type="text"
            name="note"
            id="note"
            className="shadow-lg rounded-md shadow-black w-[100%] h-10 p-3"
            placeholder="Add note"
          />
          <input
            type="text"
            name="writtenBy"
            id="writtenBy"
            className="shadow-lg rounded-md shadow-black w-[100%] h-10 p-3"
            placeholder="Written by"
          />
          <button className="bg-orange-500 font-bold text-white hover:bg-red-600 p-3 rounded-md" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="m-5 space-y-10">
        <h1 className="text-center">Notes</h1>
        <div className="w-[100%]">
          <ul className="flex font-bold text-md">
            <li className="w-[50%] text-center">Notes</li>
            <li className="w-[30%] text-center">Written by</li>
            <li className="w-[20%] text-center">Options</li>
          </ul>
          {result.map((element) => {
            return (
              <>
              <ul className="flex my-2" key={element.id}>
                <li className="w-[50%] text-center">{element.note}</li>
                <li className="w-[30%] text-center">{element.written_by}</li>
                <li className="w-[20%] text-center flex">
                  <form action={deleteNote}>
                  <input type="hidden" name="id" value={element.id}/>
                  <button className="bg-red-700 font-bold hover:bg-orange-600 text-white p-1 m-1 rounded-sm" type="submit">DEL</button>
                  </form>
                  <Link href={"/edit/"+element.id}>
                  <button className="bg-cyan-700 font-bold hover:bg-green-600 text-white p-1 m-1 rounded-sm">EDIT</button>
                  </Link>
                </li>
              </ul>
              <hr />
              </>
            );
          })}
          <hr />
        </div>
      </div>
    </main>
  );
}
