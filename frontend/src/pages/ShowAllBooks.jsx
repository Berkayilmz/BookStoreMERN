import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const ShowBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <h1 className="text-3xl my-4">Show Books</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {books.map((book,index) => (
            <div key={index} className="flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4 my-4">
              <div className="my-4">
                <span className="text-x1 mr-4 text-gray-500">Id: </span>
                <span>{book._id}</span>
              </div>
              <div className="my-4">
                <span className="text-x1 mr-4 text-gray-500">Title: </span>
                <span>{book.title}</span>
              </div>
              <div className="my-4">
                <span className="text-x1 mr-4 text-gray-500">Author: </span>
                <span>{book.author}</span>
              </div>
              <div className="my-4">
                <span className="text-x1 mr-4 text-gray-500">Publish Year: </span>
                <span>{book.publishYear}</span>
              </div>
              <div className="my-4">
                <span className="text-x1 mr-4 text-gray-500">Create Time: </span>
                <span>{new Date(book.createdAt).toString()}</span>
              </div>
              <div className="my-4">
                <span className="text-x1 mr-4 text-gray-500">Last Update Time:</span>
                <span>{new Date(book.updateAt).toString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowBooks;
