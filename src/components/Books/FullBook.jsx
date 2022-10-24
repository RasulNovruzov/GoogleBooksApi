import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function FullBook() {
  const [book, setBook] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchBooksApi() {
      try {
        const { data } = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${id}`
        );
        setBook(data.items[0]);
      } catch (error) {
        console.log("error");
      }
    }

    fetchBooksApi();
  }, []);

  if (!book) {
    return "loading";
  }

  console.log(book);

  return (
    <Container>
      <h3>Название: {book.volumeInfo.title}</h3>
      <span>Дата публикации: {book.volumeInfo.publishedDate}</span>
      <p>Автор: {book.volumeInfo.authors}</p>
      <p>Количество страниц: {book.volumeInfo.pageCount}</p>
      <Card.Img
        height={"500px"}
        alt="image not found"
        variant="top"
        src={
          book.volumeInfo.imageLinks &&
          book.volumeInfo.imageLinks.smallThumbnail
        }
      />
      <p>{book.volumeInfo.description}</p>
      <Link to={"/"}>
        <Button>Назад</Button>
      </Link>
    </Container>
  );
}
