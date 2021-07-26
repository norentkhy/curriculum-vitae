import { UnorderedList, CompactListItem, Label } from './Styled'
import { CensoredPersonaliaDiv } from './Censored'
import React from 'react'
import { useTagContext } from './TagContextProvider'

export default function Personalia({ personalia }) {
  const tag = useTagContext()
  const items = useItems(tag, personalia)
  if (!personalia.dateOfBirth) return <CensoredPersonaliaDiv />

  return (
    <UnorderedList>
      {items.map((item) => (
        <ListItem label={item.label} value={item.value} key={item.label} />
      ))}
    </UnorderedList>
  )
}

function useItems(tag, personalia) {
  const name = `${personalia.name.first} ${personalia.name.last}`
  const address = `${personalia.address}\n${personalia.postalCode} ${personalia.city}`
  return [
    { label: tag.fullName, value: name },
    { label: tag.nationality, value: personalia.nationality },
    { label: tag.maritalStatus, value: personalia.maritalStatus },
    { label: tag.dateOfBirth, value: personalia.dateOfBirth },
    { label: tag.placeOfBirth, value: personalia.placeOfBirth },
    { label: tag.address, value: address },
  ]
}

function ListItem({ label, value }) {
  return (
    <CompactListItem>
      <Label>{label}</Label>
      {value}
    </CompactListItem>
  )
}
