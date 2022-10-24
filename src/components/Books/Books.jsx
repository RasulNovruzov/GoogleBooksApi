import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchBooksApi,
  setStartIndex,
  setTotal,
} from "../../store/slices/bookSlice";
import Pagination from "../Pagination";
import BooksItem from "./BooksItem";

export default function Books({ searchValue }) {
  const dispatch = useDispatch();
  const startIndex = useSelector((state) => state.book.startIndex);
  const total = useSelector((state) => state.book.total);
  const books = useSelector((state) => state.book.items);
  const search = searchValue ? `${searchValue}` : "flowers";

  function getRead() {
    dispatch(fetchBooksApi({ search, startIndex }));
  }

  useEffect(() => {
    getRead();
  }, [search, startIndex]);

  let bookList = books.map((b) => <BooksItem book={b} key={b.id} b={b} />);

  const onChangePAge = (number) => {
    dispatch(setStartIndex(number));
  };

  return (
    <div>
      <Container>
        <Row>{bookList}</Row>
      </Container>
      <Pagination onChangePage={onChangePAge} total={total} />
    </div>
  );
}
