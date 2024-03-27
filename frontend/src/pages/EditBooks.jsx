import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

const EditBooks = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const titleInputRef = useRef(null);
  const authorInputRef = useRef();
  const publishYearInputRef = useRef(null);


  useEffect(() => {
    const fillPlaceHolder = async () => {
      const res = await axios.get(`http://localhost:5555/books/${id}`);
      const book=res.data;
      
      try {
        if (titleInputRef.current) {
          titleInputRef.current.placeholder = book.title;
        }
        if (authorInputRef.current) {
          authorInputRef.current.placeholder = book.author;
        }
        if (publishYearInputRef.current) {
          publishYearInputRef.current.placeholder = book.publishYear;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [titleInputRef, authorInputRef, publishYearInputRef])

  const handleEditBook = () => {
    setLoading(true);
    const editedBook = {
      title,
      author,
      publishYear,
    }

    axios
      .put(`http://localhost:5555/books/${id}`, editedBook)
      .then(() => {
        setLoading(false);
        navigate('/');
      })

  }

  return (
    <div className='p-4'>
      <h1 className='text-3x1 my-4'>Edit Book</h1>
      {loading ? <Spinner /> :
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title: </label>
            <input className='input' type="text" value={title} onChange={(e) => setTitle(e.target.value)} ref={titleInputRef}/>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author: </label>
            <input className='input' type="text" value={author} onChange={(e) => setAuthor(e.target.value)} ref={authorInputRef}/>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year: </label>
            <input className='input' type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} ref={publishYearInputRef}/>
          </div>
          <button className='p-2 bg-sky-300 m-8' onClick={handleEditBook}>Save</button>
        </div>
      }
    </div>
  )
}

export default EditBooks

/*
const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublisYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id}=useParams();

  

  const handleEditBook=()=>{
    const editBook = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`,editBook)
      .then(()=>{
        setLoading(false);
        navigate(`/`);
      })
  }
*/