import data from './data'
import photo from './components/by-anna-square.png'
import QuickContactInfo from './components/QuickContactInfo'
import { WorkExperience, Education } from './components/Experiences'
import Personalia from './components/Personalia'
import LanguageProficiencies from './components/LanguageProficiencies'
import CodingProficiencies from './components/CodingProficiencies'
import ToolProficiencies from './components/ToolProficiencies'
import Proficiencies from './components/Proficiencies'
import { RightAligned } from './components/Styling'
import React from 'react'
import styled from 'styled-components'

const {
  slogan,
  personalia,
  education,
  languageProficiencies,
  hobbiesAndInterests,
  codingProficiencies,
  toolProficiencies,
  vanDenAkkerEngineering,
  istDsorLab,
  prodrive,
} = data

export default function CurriculumVitae() {
  return (
    <div>
      <CurriculumVitaePage />
    </div>
  )
}

function CurriculumVitaePage() {
  return (
    <Page>
      <GridLayout>
        <Header>
          <Portrait src={photo} />
          <NameDisplay>{personalia.name.display}</NameDisplay>
          <QuickContactInfo personalia={personalia} />
        </Header>
        <Slogan>{slogan}</Slogan>
        <SomeGrid>
          <Experiences>
            <SectionTitle>Relevant Work Experience</SectionTitle>
            <WorkExperience experience={vanDenAkkerEngineering} />
            <WorkExperience experience={istDsorLab} />
            <WorkExperience experience={prodrive} />

            <SectionTitle>Education</SectionTitle>
            <Education education={education} />
          </Experiences>
          <Details>
            <Personalia
              personalia={personalia}
              hobbiesAndInterests={hobbiesAndInterests}
            />
            <Proficiencies>
              <LanguageProficiencies
                languageProficiencies={languageProficiencies}
              />
              <CodingProficiencies codingProficiencies={codingProficiencies} />
              <ToolProficiencies toolProficiencies={toolProficiencies} />
            </Proficiencies>
          </Details>
        </SomeGrid>
      </GridLayout>
    </Page>
  )
}

const Details = styled(RightAligned)`
  grid-area: details;
  display: flex;
  flex-direction: column;
`

const SomeGrid = styled.div`
  grid-area: some-grid;

  display: grid;
  grid-template-columns: 13cm;
  grid-template-areas: 'experiences details';
`

const Experiences = styled.div`
  grid-area: experiences;
`

const SectionTitle = styled.div`
  font-size: 1cm;
  border-bottom: 0.06cm solid black;
`

const Page = styled.article`
  background: white;
  display: block;
  width: 21cm;
  height: 29.7cm;
  padding: 10mm 10mm;
  font-family: 'Noto Sans JP';
  font-weight: 100;
`

const GridLayout = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  grid-template-areas:
    'header header'
    'description description'
    'some-grid some-grid';
`

const Header = styled.div`
  grid-area: header;

  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: 1fr 0.5cm;
  grid-template-areas:
    'portrait display-name quick-contact-info'
    'portrait . quick-contact-info';
`

const Portrait = styled.img`
  grid-area: portrait;
  align-self: center;

  height: 5cm;
  border: solid 0.2em black;
`

const NameDisplay = styled.span`
  font-family: 'Noto Sans JP';
  font-size: 2.2cm;
  line-height: 1em;
  align-self: center;
`

const Slogan = styled.div`
  grid-area: description;
  text-align: center;
  align-self: start;

  background-color: black;
  color: white;
  font-size: 0.6cm;

  width: 100%;
  padding-bottom: 0.1cm;
  margin-top: 0.5cm;
  margin-bottom: 0.4cm;
`
