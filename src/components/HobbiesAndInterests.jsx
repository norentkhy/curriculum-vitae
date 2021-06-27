import React from 'react'
import { Tag, RightAlignedUnit } from './Styling'

function HobbiesAndInterests({ hobbiesAndInterests }) {
  return (
    <RightAlignedUnit>
      <Tag>Hobbies and Interests</Tag>
      {hobbiesAndInterests.map((hobbyOrInterest) => (
        <div>{hobbyOrInterest.toString()}</div>
      ))}
    </RightAlignedUnit>
  )
}

export default HobbiesAndInterests
