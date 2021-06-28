import React from 'react'
import styled from 'styled-components'

export default function Header({ portraitSource, name }) {
  return (
    <FlexRow>
      <Portrait src={portraitSource} />
      <NameDisplay>{name.display}</NameDisplay>
    </FlexRow>
  )
}

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.2cm;
`

const Portrait = styled.img`
  display: block;
  height: 40mm;
  border: solid 1px #777777;
  border-radius: 1mm;
`

const NameDisplay = styled.span`
  font-family: 'Noto Sans JP';
  font-size: 18mm;
  line-height: 1em;
  padding-left: 0.1em;
  padding-bottom: 0.2em;
`
