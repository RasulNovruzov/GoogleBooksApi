import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BooksItem({ book, b }) {
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img
        alt="image not found"
        variant="top"
        src={
          book.volumeInfo.imageLinks &&
          book.volumeInfo.imageLinks.smallThumbnail
        }
      />
      <Card.Body>
        <Card.Title>{book.volumeInfo.title}</Card.Title>
        <Card.Text>{book.volumeInfo.publishedDate}</Card.Text>
        <Link to={`/book/${b.id}`} variant="primary">
          <Button variant="primary">Подробнее</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
