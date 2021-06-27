import React from 'react'
import {
  Tag,
  LargeTag,
  RightAligned,
  RightAlignedUnit,
  RightAlignedBottomMargin,
} from './Styling'

function Personalia({ personalia, hobbiesAndInterests }) {
  const {
    name,
    dateOfBirth,
    nationality,
    placeOfBirth,
    address,
    postalCode,
    city,
  } = personalia

  return (
    <RightAligned>
      <LargeTag>Personalia</LargeTag>
      <RightAlignedUnit>
        <Name name={name} />
        <Nationality nationality={nationality} />
        <DateOfBirth dateOfBirth={dateOfBirth} />
        <PlaceOfBirth placeOfBirth={placeOfBirth} />
        <Address address={address} postalCode={postalCode} city={city} />
        <Tag>Hobbies and Interests</Tag>
        {hobbiesAndInterests.map((hobbyOrInterest) => (
          <div>{hobbyOrInterest.toString()}</div>
        ))}
      </RightAlignedUnit>
    </RightAligned>
  )
}

function Name({ name }) {
  return (
    <RightAlignedBottomMargin>
      <Tag>Full Name</Tag>
      {name.first} {name.last}
    </RightAlignedBottomMargin>
  )
}

function Nationality({ nationality }) {
  return (
    <RightAlignedBottomMargin>
      <Tag>Nationality</Tag>
      {nationality}
    </RightAlignedBottomMargin>
  )
}

function DateOfBirth({ dateOfBirth }) {
  return (
    <RightAlignedBottomMargin>
      <Tag>Date of Birth</Tag>
      {dateOfBirth}
    </RightAlignedBottomMargin>
  )
}

function PlaceOfBirth({ placeOfBirth }) {
  return (
    <RightAlignedBottomMargin>
      <Tag>Place of Birth</Tag>
      {placeOfBirth}
    </RightAlignedBottomMargin>
  )
}

function Address({ address, postalCode, city }) {
  return (
    <RightAlignedBottomMargin>
      <Tag>Address</Tag>
      <div>{address}</div>{' '}
      <div>
        {postalCode} {city}
      </div>
    </RightAlignedBottomMargin>
  )
}

export default Personalia
