import React, { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookCreate: React.FC = () => {
  const { createBook }: IBooksContext = useBooksContext();
    const [title, setTitle] = useState("");
    const habdleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.target.value)
    }
    const habdleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        createBook(title)
        setTitle('')
    }
  return (
    <div >
        <form onSubmit={habdleSubmit} className='flex flex-col my-4 items-center'>
            <label>Title</label>
            <input className='rounded-full p-2 text-slate-800' value={title} onChange={habdleChange}></input>
            <button className=''>Submit!</button>
        </form>
    </div>
  )
}
export default BookCreate