import React from 'react'
import { LargeTag, RightAligned, RightAlignedTopMargin } from './Styling'

function Proficiencies({ children }) {
  return (
    <RightAlignedTopMargin>
      <LargeTag>Proficiencies</LargeTag>
      <RightAligned>{children}</RightAligned>
    </RightAlignedTopMargin>
  )
}

export default Proficiencies
