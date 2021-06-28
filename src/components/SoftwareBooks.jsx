import { Label, RelativeFontSize75 } from './Styled'
import React from 'react'
import styled from 'styled-components'

export default function ListOfBooks({ books }) {
  return (
    <UnorderedList>
      {books.favourites.map((book) => (
        <BookItem key={book.title} book={book} />
      ))}
      <FullListReference url={books.url} />
    </UnorderedList>
  )
}

function FullListReference({ url }) {
  return (
    <CompactListItem>
      <br />
      <Label>goodreads list</Label>
      <a>{url}</a>
    </CompactListItem>
  )
}

function BookItem({ book }) {
  return (
    <>
      <CompactListItem>
        <Author author={book.author} />
        <br />
        {book.title}
      </CompactListItem>
    </>
  )
}

const CompactListItem = styled.li`
  line-height: 1em;
  margin-bottom: 0.35em;
`

const UnorderedList = styled.ul`
  list-style-type: none;
  margin-block: 0;
  padding-inline: 0;
`

function Author({ author }) {
  return (
    <RelativeFontSize75>
      [{author.surname}, {author.givenName}]
    </RelativeFontSize75>
  )
}
