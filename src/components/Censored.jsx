import {
  QuickContactInfoGrid,
  PhoneIcon,
  MailIcon,
  LinkedInIcon,
} from './ContactInfo'
import React from 'react'
import styled from 'styled-components'

export function CensoredPersonaliaDiv() {
  return <PersonaliaSize>Private Information</PersonaliaSize>
}

export function CensoredQuickContact() {
  return (
    <QuickContactDiv>
      <PhoneIcon />
      <MailIcon />
      <LinkedInIcon />
    </QuickContactDiv>
  )
}

const QuickContactDiv = styled.div`
  grid-area: quick-contact-info;

--icon-height: 8mm;
--icon-margin: 0.5mm;
--icon-align-self: center;
--icon-justify-self: flex-end;
--info-align-self: center;
--info-justify-self: end;
--info-padding-right: 1mm;
--info-font-size: 120%;

align-self: center;
justify-self: end;
height: min-content;

display: grid;
--grid-icon-width: var(--icon-height);
--grid-template-colums: 1fr var(--grid-icon-width);
grid-template-areas:
  'phone-number phone-icon'
  'email-address mail-icon'
  'linkedin-url linkedin-icon';
  width: 224.969px;
  height: 101.953px;
  text-align: end;
`

const PersonaliaSize = styled.div`
  width: 104.125px;
  height: 179.125px;
`
