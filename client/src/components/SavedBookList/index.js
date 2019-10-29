import React from "react";
import { Button, Badge } from 'reactstrap';
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";



export function SavedBookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}


export function SavedBookListItem(props) {
  return (
    props.books.map((book) =>
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={book.volumeInfo.imageLinks.thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{book.volumeInfo.title}</h3>
              <p>
                Author(s): {book.volumeInfo.authors}
              </p>
              <p>
                {book.volumeInfo.description}
              </p>
              <Badge target="_blank" href={book.volumeInfo.infoLink} color="info">View</Badge>{' '}

              <Button color="info" onClick={() => props.handleSaveBook({
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors,
                description: book.volumeInfo.description,
                image: book.volumeInfo.imageLinks.thumbnail,
                infoLink: book.volumeInfo.infoLink
              })}>Save</Button>
            </Col>
          </Row>
        </Container>
      </li>
    )

  )
}
