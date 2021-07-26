import portrait from './assets/portrait.png'
import ContactInfo from './components/ContactInfo'
import {
  Header,
  PageLayout,
  List,
  Masteries,
  Experience,
  Personalia,
  Books,
  TagProvider,
  useTagContext,
} from './components'
import React, { useEffect, useState } from 'react'
import loadData from './data'

export default function App({ language = 'EN', showPersonalia = false }) {
  const [data, setData] = useState(null)
  useEffect(() => loadData({ language, showPersonalia, setData }), [])

  if (!data) return <div>Loading Curriculum Vitae...</div>
  return (
    <TagProvider tag={data.tag}>
      <CurriculumVitae data={data} />
    </TagProvider>
  )
}

function CurriculumVitae({ data }) {
  const tag = useTagContext()
  const { personalia, hobbiesAndInterests } = data
  const selectedWorkExperiences = selectWorkExperience(data)
  const selectedEducation = selectEducation(tag, data)
  const books = selectBooks(data)
  const [spokenLanguages, languageMasteries, toolMasteries] =
    selectMasteries(data)

  return (
    <PageLayout
      Header={<Header name={personalia.name} portraitSource={portrait} />}
      ContactInfo={<ContactInfo personalia={personalia} />}
      WorkExperience={<Experience experiences={selectedWorkExperiences} />}
      Education={<Experience experiences={selectedEducation} />}
      Personalia={<Personalia personalia={personalia} />}
      SpokenLanguages={<Masteries masteries={spokenLanguages} />}
      LanguageMastery={<Masteries masteries={languageMasteries} />}
      ToolMastery={<Masteries masteries={toolMasteries} />}
      SoftwareBooks={<Books books={books} />}
      HobbiesAndInterests={<List items={hobbiesAndInterests} />}
    />
  )
}

function selectWorkExperience(data) {
  const companyNames = [
    'Van Den Akker Engineering',
    ['University of Technology Eindhoven', 'Technische Universiteit Eindhoven'],
    'IST Dynamical Systems and Ocean Robotics Lab',
    'Prodrive',
  ]

  return companyNames
    .map((name) =>
      data.workExperience.find(
        ({ company }) => company === name || name.includes(company)
      )
    )
    .map(({ company, location, roles }) => ({
      organisation: company,
      location,
      roles,
    }))
}

function selectEducation(tag, data) {
  const { bachelor, master } = data.education
  return [
    {
      organisation: master.program,
      location: master.institution,
      roles: [
        {
          title: `Master ${master.specialization}`,
          period: master.period,
          tasks: [
            ['Thesis', master.graduationThesis],
            [tag.internship, master.internshipThesis],
          ],
        },
        {
          title: `Bachelor ${bachelor.major}`,
          period: bachelor.period,
          tasks: [
            ['Thesis', bachelor.thesis],
            ['Minor', bachelor.minor],
          ],
        },
      ],
    },
  ]
}

function selectBooks(data) {
  const { favouriteSoftwareBooks, linkToSoftwareBooks } = data

  return {
    favourites: favouriteSoftwareBooks,
    url: linkToSoftwareBooks.short,
  }
}

function selectMasteries(data) {
  const { languageProficiencies, codingProficiencies, toolProficiencies } = data
  return [languageProficiencies, codingProficiencies, toolProficiencies].map(
    mapProficienciesToArray
  )
}

function mapProficienciesToArray(proficiencies) {
  return proficiencies.map(({ subject, proficiency }) => [subject, proficiency])
}
