import { redirect } from "next/navigation";
import dbConnect from "../../utils/dbConnect";
import { pool } from "../../utils/dbConnect";

export default async function edit({ params }) {
  dbConnect();
  const id = params.id;
  const data = await pool.query("SELECT * FROM notes WHERE id = $1", [id]);
  const result = data.rows[0];

  async function updateNote(data) {
    "use server"
    let note = data.get("note").valueOf();
    let writtenBy = data.get("writtenBy").valueOf();

    try {
      const updatedNote = await pool.query(
        `UPDATE notes SET note = $1, written_by = $2 WHERE id = $3`,
        [note, writtenBy, id]
      );
      console.log("Note updated");
    } catch (error) {
      console.error("Error updating note:", error);
    }
    redirect('/')
  }

  return (
    <main className="m-10">
      <div className="m-5">
        <h1 className="text-center m-5">Edit Note</h1>
        <form action={updateNote} className="space-y-5">
          <input
            type="text"
            name="note"
            id="note"
            className="shadow-lg rounded-md shadow-black w-[100%] h-10 p-3"
            placeholder="Add note"
            defaultValue={result.note}
          />
          <input
            type="text"
            name="writtenBy"
            id="writtenBy"
            className="shadow-lg rounded-md shadow-black w-[100%] h-10 p-3"
            placeholder="Written by"
            defaultValue={result.written_by}
          />
          <button
            className="bg-orange-500 font-bold text-white hover:bg-red-600 p-3 rounded-md"
            type="submit"
          >
            UPDATE
          </button>
        </form>
      </div>
    </main>
  );
}
