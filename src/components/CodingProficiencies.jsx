import React from 'react'
import { Tag, RightAlignedBottomMargin } from './Styling'

function CodingProficiencies({ codingProficiencies }) {
  return (
    <RightAlignedBottomMargin>
      <Tag>Coding</Tag>
      {codingProficiencies.map(({ language, proficiency }) => (
        <div>
          {language}: {proficiency}
        </div>
      ))}
    </RightAlignedBottomMargin>
  )
}

export default CodingProficiencies
