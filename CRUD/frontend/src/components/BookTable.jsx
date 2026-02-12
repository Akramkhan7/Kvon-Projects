import { Trash2, Edit2 } from 'lucide-react'; // Optional icon library

const BookTable = ({ books }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="text-gray-400 text-xs uppercase tracking-wider border-b">
          <th className="pb-4 font-medium">Book Name</th>
          <th className="pb-4 font-medium">Book Title</th>
          <th className="pb-4 font-medium">Author</th>
          <th className="pb-4 font-medium">Selling Price</th>
          <th className="pb-4 font-medium">Publish Date</th>
          <th className="pb-4 font-medium">Action</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {books.map((book) => (
          <tr key={book.id} className="border-b last:border-0">
            <td className="py-4">{book.name}</td>
            <td className="py-4 text-gray-600">{book.title}</td>
            <td className="py-4">{book.author}</td>
            <td className="py-4">{book.price}</td>
            <td className="py-4">{book.date}</td>
            <td className="py-4 flex gap-2">
              <button className="p-2 bg-red-50 text-red-500 rounded hover:bg-red-100">
                <Trash2 size={16} />
              </button>
              <button className="p-2 bg-green-50 text-green-500 rounded hover:bg-green-100">
                <Edit2 size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default BookTable;