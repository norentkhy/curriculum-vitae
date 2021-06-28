import { UnorderedList, CompactListItem, Label } from './Styled'
import React from 'react'

export default function Personalia({ personalia }) {
  const {
    name,
    dateOfBirth,
    nationality,
    placeOfBirth,
    address,
    postalCode,
    city,
    maritalStatus,
  } = personalia

  const Items = [
    <Name {...{ name }} />,
    <Nationality {...{ nationality }} />,
    <MaritalStatus {...{ maritalStatus }} />,
    <DateOfBirth {...{ dateOfBirth }} />,
    <PlaceOfBirth {...{ placeOfBirth }} />,
    <Address {...{ address, postalCode, city }} />,
  ]

  return (
    <UnorderedList>
      {Items.map((Item, i) => (
        <CompactListItem key={i}>{Item}</CompactListItem>
      ))}
    </UnorderedList>
  )
}

function MaritalStatus({ maritalStatus }) {
  return (
    <>
      <Label>Marital Status</Label>
      {maritalStatus}
    </>
  )
}

function Name({ name }) {
  return (
    <>
      <Label>Full Name</Label>
      {name.first} {name.last}
    </>
  )
}

function Nationality({ nationality }) {
  return (
    <>
      <Label>Nationality</Label>
      {nationality}
    </>
  )
}

function DateOfBirth({ dateOfBirth }) {
  return (
    <>
      <Label>Date of Birth</Label>
      {dateOfBirth}
    </>
  )
}

function PlaceOfBirth({ placeOfBirth }) {
  return (
    <>
      <Label>Place of Birth</Label>
      {placeOfBirth}
    </>
  )
}

function Address({ address, postalCode, city }) {
  return (
    <>
      <Label>Address</Label>
      <div>{address}</div>{' '}
      <div>
        {postalCode} {city}
      </div>
    </>
  )
}
