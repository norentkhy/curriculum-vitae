import React from 'react'
import styled from 'styled-components'
import {
  PhoneIcon as RawPhoneIcon,
  MailIcon as RawMailIcon,
  LinkedInIcon as RawLinkedInIcon,
} from './icons'

function QuickContactInfo({ personalia }) {
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

  --icon-height: 0.8cm;
  --icon-margin: 0.05cm;
  --icon-align-self: center;
  --icon-justify-self: center;
  --info-align-self: center;
  --info-justify-self: end;
  --info-padding-right: 0.2cm;

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
`

const EmailAddress = styled.span`
  grid-area: email-address;
  align-self: var(--info-align-self);
  justify-self: var(--info-justify-self);
  padding-right: var(--info-padding-right);
`

const LinkedInUrl = styled.span`
  grid-area: linkedin-url;
  align-self: var(--info-align-self);
  justify-self: var(--info-justify-self);
  padding-right: var(--info-padding-right);
`

const PhoneIcon = styled(RawPhoneIcon)`
  grid-area: phone-icon;
  height: var(--icon-height);
  margin: var(--icon-margin);
  align-self: var(--icon-align-self);
  justify-self: var(--icon-justify-self);
`

const MailIcon = styled(RawMailIcon)`
  grid-area: mail-icon;
  height: var(--icon-height);
  margin: var(--icon-margin) 0;
  align-self: var(--icon-align-self);
  justify-self: var(--icon-justify-self);
`

const LinkedInIcon = styled(RawLinkedInIcon)`
  grid-area: linkedin-icon;
  height: var(--icon-height);
  margin: var(--icon-margin) 0;
  align-self: var(--icon-align-self);
  justify-self: var(--icon-justify-self);
`

export default QuickContactInfo
