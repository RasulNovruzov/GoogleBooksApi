import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

export default function Pagination({ onChangePage, total }) {
  let totalPage = Math.ceil(total / 6);
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageCount={10}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
