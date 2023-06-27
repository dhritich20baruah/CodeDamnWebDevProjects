import Quotes from "../model/Quotes";
import dbConnect from "../utils/dbConnect";
dbConnect();

const searchQuotes = async (data) => {
    "use server"
    let searchTerm = data.get("search")?.valueOf();

    const convertToLowerCase = (text) => {
      const convertedText = text.replace(/[A-Z]/g, (match) =>
        match.toLowerCase()
      );
      return convertedText;
    };
    const searchTermLower = convertToLowerCase(searchTerm);

    const convertFirstLetterToCapital = (text) => {
      const convertedText = text.replace(/(^\w{1})|(\.\s*\w{1})/g, (match) =>
        match.toUpperCase()
      );
      return convertedText;
    };
    const searchTermFirst = convertFirstLetterToCapital(searchTerm);
    let quotes = await Quotes.find({
      $or: [
        {
          quote: { $regex: searchTermLower },
        },
        {
          quote: { $regex: searchTerm },
        },
        {
          quote: { $regex: searchTermFirst },
        },
      ],
    });
    return quotes
  };

export default async function search() {
  
  const quotesArr = searchQuotes()

  return (
    <main className="m-12 text-center">
      <form action={searchQuotes}>
        <input
          type="text"
          name="search"
          id="search"
          className="shadow-xl shadow-slate-500 w-[75%] h-10 p-2 outline-none"
          placeholder="Search...."
        />
        <button className="p-2 text-white bg-orange-500 hover:cursor-pointer">
          Search
        </button>
      </form>

      <div className="m-10">
        {quotesArr.map((element) => {
          return (
            <>
              <ul key={element._id} className="flex justify-between">
                <li className="w-[90%]">{element.quote}</li>
              </ul>
              <hr />
            </>
          );
        })}
      </div>
    </main>
  );
}
