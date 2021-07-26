import { UnorderedList, CompactListItem, RelativeFontSize75 } from './Styled'
import React from 'react'

export default function Masteries({ masteries }) {
  return (
    <UnorderedList>
      {masteries.map(([subject, mastery]) => (
        <Mastery {...{ key: subject, subject, mastery }} />
      ))}
    </UnorderedList>
  )
}

function Mastery({ subject, mastery }) {
  return (
    <CompactListItem>
      <RelativeFontSize75>{stars[mastery]} </RelativeFontSize75>
      {subject}
    </CompactListItem>
  )
}

const star = { empty: '☆', filled: '★', growing: '✮' }

const stars = {
  beginner: repeatStars([['filled', 1],['growing', 1], ['empty', 3]]),
  improver: repeatStars([['filled', 2],['growing', 1], ['empty', 2]]),
  intermediate: repeatStars([['filled', 3],['growing', 1], ['empty', 1]]),
  advanced: repeatStars([['filled', 4],['growing', 0], ['empty', 1]]),
  master: repeatStars([['filled', 4],['growing', 1], ['empty', 0]]),
  fluent: repeatStars([['filled', 4],['growing', 1], ['empty', 0]]),
  vloeiend: repeatStars([['filled', 4],['growing', 1], ['empty', 0]]),
  native: repeatStars([['filled', 4],['growing', 1], ['empty', 0]]),
  moedertaal: repeatStars([['filled', 4],['growing', 1], ['empty', 0]]),
}

function repeatStars(specs) {
  return specs
    .map(([type, amount]) => star[type].repeat(amount))
    .reduce((a, b) => a + b)
}
