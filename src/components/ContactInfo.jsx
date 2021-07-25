import {
  PhoneIcon as PhoneIconSrc,
  MailIcon as MailIconSrc,
  LinkedInIcon as LinkedInIconSrc,
} from '../assets/icons'
import React from 'react'
import styled from 'styled-components'
import { CensoredQuickContact } from './Censored'

export default function ContactInfoOld({ personalia }) {
  const { phoneNumber, emailAddress, linkedInUrl } = personalia
  if (!phoneNumber) return <CensoredQuickContact />

  return (
    <QuickContactInfoGrid>
      <PhoneNumber>{phoneNumber}</PhoneNumber>
      <PhoneIcon />
      <EmailAddress>{emailAddress}</EmailAddress>
      <MailIcon />
      <LinkedInUrl>{linkedInUrl}</LinkedInUrl>
      <LinkedInIcon />
    </QuickContactInfoGrid>
  )
}

export const QuickContactInfoGrid = styled.div`
  grid-area: quick-contact-info;

  --icon-height: 8mm;
  --icon-margin: 0.5mm;
  --icon-align-self: center;
  --icon-justify-self: center;
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
`

const TextInfo = styled.span`
  align-self: var(--info-align-self);
  justify-self: var(--info-justify-self);
  padding-right: var(--info-padding-right);
  font-size: var(--info-font-size);
`

const PhoneNumber = styled(TextInfo)`
  grid-area: phone-number;
`

const EmailAddress = styled(TextInfo)`
  grid-area: email-address;
`

const LinkedInUrl = styled(TextInfo)`
  grid-area: linkedin-url;
`

const IconCss = `
  height: var(--icon-height);
  margin: var(--icon-margin);
  align-self: var(--icon-align-self);
  justify-self: var(--icon-justify-self);
`

export const PhoneIcon = styled(PhoneIconSrc)`
  grid-area: phone-icon;
  ${IconCss}
`

export const MailIcon = styled(MailIconSrc)`
  grid-area: mail-icon;
  ${IconCss}
`

export const LinkedInIcon = styled(LinkedInIconSrc)`
  grid-area: linkedin-icon;
  ${IconCss}
`
