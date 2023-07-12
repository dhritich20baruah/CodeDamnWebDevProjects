export default function Blog() {
  return (
    <main className="m-10">
      <h1 className="font-bold text-gray-800 text-2xl my-5">Dummy Blog Content</h1>
      <img
        src="https://www.rakiyaworld.com/assets/uploads/media-uploader/mit-evaluating-performance-0-21617358969.jpg"
        alt=""
        className="w-[90%] h-[50vh]"
      />
      <ul className="flex space-x-3 p-3">
        <li className="text-gray-600">11th July 2023</li>
        <li className="text-gray-600">Blogger one</li>
      </ul>
      <p className="text-gray-900 font-sans w-[90%] text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p className="text-gray-900 font-sans w-[90%] text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error doloribus labore velit odio possimus voluptate amet saepe perferendis a quidem commodi architecto officiis ratione inventore, autem repellendus nemo quae officia accusamus modi, deleniti consectetur corrupti reprehenderit? Eveniet est corporis in repudiandae, iste aut esse voluptatem, et repellendus natus vitae quam debitis. Quibusdam temporibus quod fuga aut dolorem aspernatur nulla ad possimus atque similique ducimus nam voluptates id, tenetur ullam quae quisquam dicta recusandae? Accusantium cumque quis vel nesciunt quod quas suscipit odio, quasi modi vero earum reiciendis quisquam cupiditate sed nobis voluptas aut? Quo, deleniti minus maxime atque ipsam molestiae totam libero tempora consectetur repellat dolore numquam earum sint voluptatum veniam praesentium ducimus iste laboriosam, ipsum cumque eaque nisi illum excepturi? Adipisci alias aliquid laudantium amet rerum delectus iure consectetur. Veniam consectetur cumque provident assumenda placeat? Cupiditate doloribus ducimus unde explicabo recusandae? Dignissimos eligendi corrupti corporis architecto accusamus rerum amet illum, obcaecati itaque ipsa repudiandae inventore et sequi impedit maxime consectetur provident neque ab perspiciatis explicabo. Eligendi voluptates esse facilis reiciendis cumque? Veniam ipsam dolore rerum corporis, voluptates blanditiis non laborum pariatur consequuntur aliquid aliquam perferendis, soluta natus incidunt odio ratione debitis hic sunt dignissimos in quo temporibus cum? Doloremque.
      </p>
      <div className="my-8">
        <p className="font-bold">Comments</p>
        <div>
            <input type="text" name="comment" id="comment" className="w-[90%] outline-none border-b-2 border-slate-600 p-2"/>
            <button className="p-2 text-white bg-orange-600 ml-3 hover:cursor-pointer hover:bg-red-900">Submit</button>
        </div>
      </div>
    </main>
  );
}
