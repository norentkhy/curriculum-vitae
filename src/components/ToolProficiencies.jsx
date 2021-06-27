import React from 'react'
import { Tag, RightAlignedBottomMargin } from './Styling'

function CodingProficiencies({ toolProficiencies }) {
  return (
    <RightAlignedBottomMargin>
      <Tag>Tools</Tag>
      {toolProficiencies.map(({ language, proficiency }) => (
        <div>
          {language}: {proficiency}
        </div>
      ))}
    </RightAlignedBottomMargin>
  )
}

export default CodingProficiencies
