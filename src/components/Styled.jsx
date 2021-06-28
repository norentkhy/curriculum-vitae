import styled from 'styled-components'

export const SectionTitle = styled.div`
  font-size: 8mm;
  border-bottom: 1px solid #777777;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const RightAligned = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

export const FlexColumnRightAligned = styled(RightAligned)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CompactListItem = styled.li`
  line-height: 1em;
  margin-bottom: 0.35em;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  margin-block: 0;
  padding-inline: 0;
`

export const Label = styled.div`
  font-weight: 500;
  font-size: 90%;
`

export const RelativeFontSize75 = styled.span`
  font-size: 75%;
`