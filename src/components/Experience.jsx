import { FlexColumn, FlexRow } from './Styled'
import React from 'react'
import styled from 'styled-components'
import formatDate from '../data/formatDate'

export default function Experience({ experiences }) {
  return (
    <FlexColumn>
      {experiences.map(({ organisation, location, roles }) => (
        <ExperienceInstance
          {...{ key: organisation, organisation, location, roles }}
        />
      ))}
    </FlexColumn>
  )
}

function ExperienceInstance({ organisation, location, roles }) {
  const mostRecentRoles = roles.sort(sortByMostRecent)

  return (
    <FlexColumn>
      <ExperienceHeader {...{ organisation, location }} />
      {mostRecentRoles.map(({ title, subtitle, period, tasks }) => (
        <Role {...{ key: title, title, subtitle, period, tasks }} />
      ))}
    </FlexColumn>
  )
}

function ExperienceHeader({ organisation, location }) {
  return (
    <div>
      <ExperienceTitle>{organisation}</ExperienceTitle>
      <ExperienceLocation>{location}</ExperienceLocation>
    </div>
  )
}

function Role({ title, period, tasks, subtitle }) {
  return (
    <FlexColumnMargin>
      <FlexRowTextBaseline>
        <TitleContainer>
          <RoleTitle>{title}</RoleTitle>
          <RoleSubtitle>{subtitle}</RoleSubtitle>
        </TitleContainer>
        <DateRange range={period} />
      </FlexRowTextBaseline>
      <FlexRow>
        <TaskList>
          {tasks.map((task, i) => (
            <TaskListItem key={i} task={task} />
          ))}
        </TaskList>
      </FlexRow>
    </FlexColumnMargin>
  )
}

function DateRange({ range }) {
  const formatted = {
    start: formatDate(range.start),
    end: formatDate(range.end),
  }

  return (
    <Timeline>
      {formatted.start} — {formatted.end}
    </Timeline>
  )
}

function TaskListItem({ task }) {
  if (!Array.isArray(task))
    return <ListItemRelativeFont80>{task}</ListItemRelativeFont80>

  return (
    <ListItemRelativeFont80>
      <FontWeight500>{task[0]}</FontWeight500> &nbsp; {task[1]}
    </ListItemRelativeFont80>
  )
}

const FlexColumnMargin = styled(FlexColumn)`
  margin-top: 0.4em;
`

const FlexRowTextBaseline = styled(FlexRow)`
  align-items: baseline;
  justify-content: space-between;
`

const TaskList = styled.ul`
  list-style-type: none;
  margin-block: 0;
  padding-inline: 0;
  margin-left: 2em;
`

const ListItemRelativeFont80 = styled.li`
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 80%;
  line-height: 1.5em;
`

function sortByMostRecent(a, b) {
  const monthsInYear = 12
  const aMonths = a.period.end.month + a.period.end.year * monthsInYear
  const bMonths = b.period.end.month + b.period.end.year * monthsInYear

  return bMonths - aMonths
}

const Timeline = styled.div`
  font-size: 80%;
  white-space: nowrap;
`
const TitleContainer = styled(FlexRow)`
  flex-wrap: wrap;
  margin-bottom: 0.1em;
`

const FontWeight500 = styled.span`
  font-weight: 500;
`

const RoleTitle = styled.div`
  margin-left: 1rem;
  font-size: 100%;
  line-height: 1.4em;
`

const RoleSubtitle = styled.div`
  margin-left: 1rem;
  font-size: 80%;
  color: #777777;
`

const ExperienceTitle = styled.span`
  display: inline-block;
  font-size: 4mm;
  font-weight: 500;
  margin-top: 0.3em;
`

const ExperienceLocation = styled.span`
  padding-left: 2mm;
  color: #777777;
`
