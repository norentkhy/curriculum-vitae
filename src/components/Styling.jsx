import styled from 'styled-components'

const Tag = styled.div`
  font-weight: 500;
`

const LargeTag = styled(Tag)`
  font-size: 1.2rem;
  margin-bottom: 1mm;
`

const RightAligned = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`

const RightAlignedUnit = styled(RightAligned)`
  font-size: 0.8rem;
`

const RightAlignedTopMargin = styled(RightAlignedUnit)`
  /* margin-top: 0.1cm; */
`

const RightAlignedBottomMargin = styled(RightAlignedUnit)`
  margin-bottom: 0.1cm;
`

const RelativelySmallerFont = styled.span`
  font-size: 75%;
`

export {
  Tag,
  LargeTag,
  RightAligned,
  RightAlignedUnit,
  RightAlignedTopMargin,
  RightAlignedBottomMargin,
  RelativelySmallerFont,
}
