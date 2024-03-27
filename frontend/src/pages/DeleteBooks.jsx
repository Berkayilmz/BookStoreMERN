import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const DeleteBooks = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
  }

  const handleNavigate = () => {
    navigate('/');
  }

  return (
    <div className="p-4">
      {loading ? <Spinner /> :
        <div>
          <h1 className="text-3xl my-4">Do you want to confirm deleting the book?</h1>
          <div className="flex items-center space-x-4">
            <button
              className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
              onClick={handleDeleteBook}
            >
              Delete
            </button>
            <button
              className="p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
              onClick={handleNavigate}
            >
              No
            </button>
          </div>
        </div>
      }


    </div>
  )
}

export default DeleteBooks