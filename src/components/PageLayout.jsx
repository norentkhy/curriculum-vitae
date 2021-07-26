import { FlexRow, FlexColumn, SectionTitle } from './Styled'
import React from 'react'
import styled from 'styled-components'
import { useTagContext } from './TagContextProvider'

export default function PageLayout({
  Header,
  ContactInfo,
  WorkExperience,
  Education,
  Personalia,
  HobbiesAndInterests,
  SpokenLanguages,
  LanguageMastery,
  ToolMastery,
  SoftwareBooks,
}) {
  const tag = useTagContext()
  const sideSections = [
    { title: tag.spokenLanguages, content: SpokenLanguages },
    { title: tag.programmingLanguages, content: LanguageMastery },
    { title: tag.tools, content: ToolMastery },
    { title: tag.softwareBooks, content: SoftwareBooks },
    { title: tag.hobbiesAndInterests, content: HobbiesAndInterests },
  ]

  return (
    <Page>
      <Columns>
        <Main {...{ Header, WorkExperience, Education }} />
        <SideBar {...{ ContactInfo, Personalia, sideSections }} />
      </Columns>
    </Page>
  )
}

const Border = styled.div`
  border: 1px solid #777777;
  padding: 1em;
  border-radius: 1mm;
`

function SideBar({ ContactInfo, Personalia, sideSections }) {
  return (
    <RightSideFlexColumnSpaceBetween>
      <div>{ContactInfo}</div>
      <Border>{Personalia}</Border>
      <NarrowWidthColumn>
        {sideSections.map(({ title, content }) => (
          <SideSection {...{ key: title, title, content }} />
        ))}
      </NarrowWidthColumn>
    </RightSideFlexColumnSpaceBetween>
  )
}

function Main({ Header, WorkExperience, Education }) {
  const tag = useTagContext()
  return (
    <FlexColumnSpaceBetween>
      {Header}
      <div>
        <SectionTitle>{tag.workExperience}</SectionTitle>
        {WorkExperience}
      </div>
      <div>
        <SectionTitle>{tag.education}</SectionTitle>
        {Education}
      </div>
    </FlexColumnSpaceBetween>
  )
}

function SideSection({ title, content }) {
  return (
    <MarginTop>
      <Subject>{title}</Subject>
      <SmallerFont>{content}</SmallerFont>
    </MarginTop>
  )
}

const MarginTop = styled.div`
  margin-top: 0.2em;

  &::first-child {
    margin-top: 0;
  }
`

const SmallerFont = styled.div`
  font-size: 90%;
  font-family: 'Roboto';
  font-weight: 100;
`

const Subject = styled.div`
  font-weight: 500;
  margin-top: 0.4em;
  margin-bottom: 0.2em;

  &:first-child {
    margin-top: 0;
  }
`

const Columns = styled(FlexRow)`
  height: 100%;
`

const FlexColumnSpaceBetween = styled(FlexColumn)`
  justify-content: space-between;
`

const NarrowWidthColumn = styled(FlexColumnSpaceBetween)`
  width: 8ch;
  margin-right: 1em;
`

const RightSideFlexColumnSpaceBetween = styled(FlexColumn)`
  font-size: 3.5mm;
  justify-content: space-between;
  align-items: flex-end;
`

const Page = styled.article`
  display: block;
  box-sizing: border-box;
  background: white;
  width: 210mm;
  height: 297mm;
  padding: 16mm 16mm;
  font-family: 'Noto Sans JP';
  font-weight: 100;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`
