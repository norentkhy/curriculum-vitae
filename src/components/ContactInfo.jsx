import {
  PhoneIcon as PhoneIconSrc,
  MailIcon as MailIconSrc,
  LinkedInIcon as LinkedInIconSrc,
} from '../assets/icons'
import React from 'react'
import styled from 'styled-components'

export default function ContactInfoOld({ personalia }) {
  const { phoneNumber, emailAddress, linkedInUrl } = personalia
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

const QuickContactInfoGrid = styled.div`
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

const PhoneNumber = styled.span`
  grid-area: phone-number;
  align-self: var(--info-align-self);
  justify-self: var(--info-justify-self);
  padding-right: var(--info-padding-right);
  font-size: var(--info-font-size);
`

const EmailAddress = styled.span`
  grid-area: email-address;
  align-self: var(--info-align-self);
  justify-self: var(--info-justify-self);
  padding-right: var(--info-padding-right);
  font-size: var(--info-font-size);
`

const LinkedInUrl = styled.span`
  grid-area: linkedin-url;
  align-self: var(--info-align-self);
  justify-self: var(--info-justify-self);
  padding-right: var(--info-padding-right);
  font-size: var(--info-font-size);
`

const PhoneIcon = styled(PhoneIconSrc)`
  grid-area: phone-icon;
  height: var(--icon-height);
  margin: var(--icon-margin);
  align-self: var(--icon-align-self);
  justify-self: var(--icon-justify-self);
`

const MailIcon = styled(MailIconSrc)`
  grid-area: mail-icon;
  height: var(--icon-height);
  margin: var(--icon-margin) 0;
  align-self: var(--icon-align-self);
  justify-self: var(--icon-justify-self);
`

const LinkedInIcon = styled(LinkedInIconSrc)`
  grid-area: linkedin-icon;
  height: var(--icon-height);
  margin: var(--icon-margin) 0;
  align-self: var(--icon-align-self);
  justify-self: var(--icon-justify-self);
`
