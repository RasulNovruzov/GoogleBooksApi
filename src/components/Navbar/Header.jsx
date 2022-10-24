import debounce from "lodash.debounce";
import React, { useCallback, useRef, useState } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header({ setSearchValue }) {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Navbar.Brand>AXL</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <input
              ref={inputRef}
              value={value}
              placeholder="Поиск ..."
              onChange={onChangeInput}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
