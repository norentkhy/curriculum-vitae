import React from 'react'
import { Tag, RightAlignedBottomMargin } from './Styling'

function LanguageProficiencies({ languageProficiencies }) {
  return (
    <RightAlignedBottomMargin>
      <Tag>Language</Tag>
      {languageProficiencies.map(({ language, proficiency }) => (
        <div>
          {language}: {proficiency}
        </div>
      ))}
    </RightAlignedBottomMargin>
  )
}

export default LanguageProficiencies
