import styled from 'styled-components'

const Tag = styled.div`
  font-weight: 500;
`

const LargeTag = styled(Tag)`
  font-size: 1.2rem;
  margin-bottom: 0.2cm;
`

const RightAligned = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

const RightAlignedUnit = styled(RightAligned)`
  font-size: 0.8rem;

  --margin-vertical: 0.3cm;
  margin-bottom: var(--margin-vertical);
`

const RightAlignedTopMargin = styled(RightAlignedUnit)`
  margin-top: 0.4cm;
`

const RightAlignedBottomMargin = styled(RightAlignedUnit)`
  margin-bottom: 0.1cm;
`

export {
  Tag,
  LargeTag,
  RightAligned,
  RightAlignedUnit,
  RightAlignedTopMargin,
  RightAlignedBottomMargin,
}
