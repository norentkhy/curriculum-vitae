import { UnorderedList, CompactListItem } from './Styled'
import React from 'react'

export default function List({ items }) {
  return (
    <UnorderedList>
      {items.map((item) => (
        <CompactListItem key={item}>{item}</CompactListItem>
      ))}
    </UnorderedList>
  )
}
