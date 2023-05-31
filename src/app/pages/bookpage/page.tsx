"use client";
import { useEffect } from 'react';
import BookCreate from '../../components/BookCreate';
import BookList from '../../components/BookList';
import useBooksContext from '../../hooks/use-books-context';

export default function BooksList() {
  const { fetchBook }: IBooksContext = useBooksContext();
  useEffect(() => {
    fetchBook();
  }, []);
  
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>home</h1>
      <BookList></BookList>
      <BookCreate></BookCreate>
    </main>
  );
}
