import React from 'react'
import styled from 'styled-components'
import formatDate from './formatDate'

function WorkExperience({ experience }) {
  const mostRecentRoles = experience.roles.sort(sortByMostRecent)

  return (
    <ExperienceGrid>
      <ExperienceHeader>
        <ExperienceTitle>{experience.company}</ExperienceTitle>
        <ExperienceLocation>{experience.location}</ExperienceLocation>
      </ExperienceHeader>
      <Roles>
        {mostRecentRoles.map((role) => (
          <RoleGrid>
            <RoleTitle>{role.title}</RoleTitle>
            <RolePeriod>
              <DateRange range={role.period} />
            </RolePeriod>
            <RoleDescription>
              {role.tasks.map((task) => (
                <RoleItem>{task}</RoleItem>
              ))}
            </RoleDescription>
          </RoleGrid>
        ))}
      </Roles>
    </ExperienceGrid>
  )
}

function sortByMostRecent(a, b) {
  const monthsInYear = 12
  const aMonths = a.period.end.month + a.period.end.year * monthsInYear
  const bMonths = b.period.end.month + b.period.end.year * monthsInYear

  return bMonths - aMonths
}

function Education({ education }) {
  const { master, bachelor } = education
  return (
    <ExperienceGrid>
      <ExperienceHeader>
        <ExperienceTitle>{master.program}</ExperienceTitle>
        <ExperienceLocation>{master.institution}</ExperienceLocation>
      </ExperienceHeader>
      <Roles>
        <RoleGrid>
          <RoleTitle>Master {master.specialization}</RoleTitle>
          <RolePeriod>
            <DateRange range={master.period} />
          </RolePeriod>
          <RoleDescription>
            <DescriptionGrid>
              <Descriptor>Thesis</Descriptor>
              <Description>{master.graduationThesis}</Description>
            </DescriptionGrid>
            <DescriptionGrid>
              <Descriptor>Internship</Descriptor>
              <Description>{master.internshipThesis}</Description>
            </DescriptionGrid>
          </RoleDescription>
        </RoleGrid>
        <RoleGrid>
          <RoleTitle>Bachelor {bachelor.major}</RoleTitle>
          <RolePeriod>
            <DateRange range={bachelor.period} />
          </RolePeriod>
          <RoleDescription>
            <DescriptionGrid>
              <Descriptor>Thesis</Descriptor>
              <Description>{bachelor.thesis}</Description>
            </DescriptionGrid>
            <DescriptionGrid>
              <Descriptor>Minor</Descriptor>
              <Description>{bachelor.minor}</Description>
            </DescriptionGrid>
          </RoleDescription>
        </RoleGrid>
      </Roles>
    </ExperienceGrid>
  )
}

const DescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: 1cm 1fr;
  grid-template-areas: 'descriptor description';
  margin-bottom: 0.2cm;

  & > * {
    display: inline-block;
  }
`

const Descriptor = styled.span`
  grid-area: descriptor;
  font-size: 0.3cm;
  font-style: italic;
  padding-right: 0.1cm;
  justify-self: end;
  margin-top: 0.05cm;
`

const Description = styled.span`
  grid-area: description;
  padding-left: 0.1cm;
  border-left: 0.01cm ridge black;
`

function DateRange({ range }) {
  const formatted = {
    start: formatDate(range.start),
    end: formatDate(range.end),
  }

  return (
    <div>
      <EndAligned>{formatted.end}</EndAligned>
      <EndAligned>{formatted.start}</EndAligned>
    </div>
  )
}

const EndAligned = styled.div`
  text-align: end;
  padding-right: 0.1cm;
`

const RoleGrid = styled.li`
  display: grid;
  grid-template-columns: 1.7cm 1fr;
  grid-template-areas:
    'role-period role-title'
    'role-period role-description';

  margin-top: 0.4cm;
`

const RoleTitle = styled.div`
  grid-area: role-title;
  margin-left: 0.5em;
`

const RolePeriod = styled.div`
  grid-area: role-period;
  justify-self: start;
  font-size: 0.35cm;
  padding-top: 0.05cm;
  border-right: 1px solid black;
  padding-right: 0.1cm;
  width: 1.5cm;
`

const RoleDescription = styled.ul`
  grid-area: role-description;
  list-style-type: none;
  font-size: 0.35cm;
  margin-bottom: 0.1cm;
`

const RoleItem = styled.li`
  margin-bottom: 0.1cm;
`

const ExperienceHeader = styled.div`
  grid-area: company-header;
`

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-areas:
    'company-header'
    'roles';

  margin-top: 0.3cm;
`

const ExperienceTitle = styled.span`
  display: inline-block;
  font-size: 0.5cm;
  font-weight: 500;
`

const ExperienceLocation = styled.span`
  display: inline-block;
  align-self: bottom;
  padding-left: 0.2cm;
`

const Roles = styled.div`
  grid-area: roles;
  list-style-type: none;
`

export { WorkExperience, Education }
