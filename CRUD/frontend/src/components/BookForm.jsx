import React, { useState } from "react";

const BookForm = () => {
  const [BookName, setBookName] = useState("");
  const [BookTitle, setBookTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [SellingPrice, setSellingPrice] = useState("");
  const [PublishDate, setPublishDate] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      BookName,
      BookTitle,
      Author,
      SellingPrice,
      PublishDate,
    };

    console.log(formData);


  setBookName("");
  setBookTitle("");
  setAuthor("");
  setSellingPrice("");
  setPublishDate("");

  };


  return (
    <form
      onSubmit={handleFormSubmit}
      className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end mb-10"
    >
      <div>
        <label className="block text-sm mb-1">Book Name</label>
        <input
          type="text"
          value={BookName}
          onChange={(e) => setBookName(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Book Title</label>
        <input
          type="text"
          value={BookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Author</label>
        <input
          type="text"
          value={Author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Selling Price</label>
        <input
          type="number"
          value={SellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Publish Date</label>
        <input
          type="date"
          value={PublishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="md:col-start-5 flex justify-end">
        <button
          type="submit"
          className="bg-slate-700 text-white px-8 py-2 rounded"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default BookForm;
