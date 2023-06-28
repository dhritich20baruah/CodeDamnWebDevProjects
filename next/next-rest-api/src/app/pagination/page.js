import Quotes from "../model/Quotes";
import dbConnect from "../utils/dbConnect";
dbConnect();

const getPaginate = async(data) => {
    'use server'

}

export default async function paginatedDisplay() {
  // Pagination
  const quotes = await Quotes.find();
  const pageSize = 3;
  const currentPage = 1;
  const pagesCount = Math.ceil(quotes.length / pageSize);

  if (pagesCount === 1) return null;
  const pages = []
 
  for (let i = 1; i<= pagesCount; i++){
    pages.push(i)
  }
  function Paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  }

  const paginatedQuotes = Paginate(quotes, currentPage, pageSize);
  return (
    <main className="m-10">
      <h1>Paginated Display</h1>
      <div className="m-10">
        {paginatedQuotes.map((element) => {
          return (
            <ul key={element._id} className="flex justify-between">
              <li className="w-[90%]">{element.quote}</li>
            </ul>
          );
        })}
      </div>
      {/* Pagination */}
      <div>
        <ul className="pagination flex justify-between items-center list-none">
          {pages.map((page) => (
            <li
              className={
                page === currentPage
                  ? "flex items-center justify-center w-8 h-8 border-2 border-slate-600 hover:cursor-pointer rounded-md bg-red-500"
                  : "flex items-center justify-center w-8 h-8 border-2 border-slate-600 hover:cursor-pointer rounded-md"
              }
              key={page}
            >
              <a
                // onClick={() => onPageChange(page)}
                className="pagelink hover:cursor-pointer"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
