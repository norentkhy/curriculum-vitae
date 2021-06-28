import data from './data'
import portrait from './assets/portrait.png'
import QuickContactInfo from './components/ContactInfo'
import { Header, PageLayout, List, Masteries } from './components'

import { Experiences } from './components/Experiences'
import Personalia from './components/Personalia'
import ListOfBooks from './components/SoftwareBooks'

import React from 'react'

const { personalia, hobbiesAndInterests } = data

const selectedWorkExperiences = selectWorkExperience(data)
const selectedEducation = selectEducation(data)
const books = selectBooks(data)
const [spokenLanguages, languageMasteries, toolMasteries] =
  selectMasteries(data)

export default function CurriculumVitae() {
  return (
    <PageLayout
      Header={<Header name={personalia.name} portraitSource={portrait} />}
      ContactInfo={<QuickContactInfo personalia={personalia} />}
      WorkExperience={<Experiences experiences={selectedWorkExperiences} />}
      Education={<Experiences experiences={selectedEducation} />}
      Personalia={<Personalia personalia={personalia} />}
      SpokenLanguages={<Masteries masteries={spokenLanguages} />}
      LanguageMastery={<Masteries masteries={languageMasteries} />}
      ToolMastery={<Masteries masteries={toolMasteries} />}
      SoftwareBooks={<ListOfBooks books={books} />}
      HobbiesAndInterests={<List items={hobbiesAndInterests} />}
    />
  )
}

function selectWorkExperience(data) {
  const companyNames = [
    'Van Den Akker Engineering',
    'University of Technology Eindhoven',
    'IST Dynamical Systems and Ocean Robotics Lab',
    'Prodrive',
  ]

  return companyNames
    .map((name) => data.workExperience.find(({ company }) => company === name))
    .map(({ company, location, roles }) => ({
      organisation: company,
      location,
      roles,
    }))
}

function selectEducation(data) {
  const { bachelor, master } = data.education
  return [
    {
      organisation: 'Mechanical Engineering',
      location: master.institution,
      roles: [
        {
          title: 'Master Control Systems Technology',
          period: master.period,
          tasks: [
            ['Thesis', master.graduationThesis],
            ['Internship', master.internshipThesis],
          ],
        },
        {
          title: 'Bachelor Mechanical Engineering',
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
