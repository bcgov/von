---
title: "A VON Overview"
permalink: /getting_started/von-overview/
excerpt: "An overview of a VON Ecosystem"
last_modified_at: 2018-05-17T15:15:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

The Verifiable Organizations Network (VON) is a series of ecosystems, each operated by a jurisdiction and each consisting of an instance of OrgBook and a set of VON issuer/verifier Agents. A VON ecosystem is kind of like a neighbourhood of collaborating services - an OrgBook - a credential repository about (typically) organizations in the middle, and around it, a number of services that contact OrgBook to get verified claims (information) about organizations, and that subsequently issue Verifiable Credentials (permits, registrations, licences, etc.) about organizations back to OrgBook.

> ToDo: Add image of an ecosystem

Further, since each ecosystem is based on the same standards and APIs, services in one ecosystem can access OrgBooks in other ecosystems to receive verified claims about organizations in other jurisdictions. That's the full VON - allowing, for example, a service in Ontario to verify (and trust) the claims of a business in British Columbia.

> ToDo: Add image of multiple ecosystems

As more jurisdictions join VON, each local ecosystem enables further global business participation.

## Orgbook

Typically (although there can be many variations) an OrgBook instance contains public Verifiable Credentials about organizations (business, coops, partnerships, etc.) operating publicly within the jurisdiction.

For more details about the capabilities and structure of OrgBook, go to the [OrgBook](/getting_started/orgbook) page of this site.

## VON Issuer/Verifier Agents

VON Issuer/Verifier agents are operated by services that issue authoritative credentials - permits/licences/registrations - about the organizations in OrgBook. In making decisions about whether or not to issue a Credential to an organization, they often access OrgBook to get verified claims about the organization:

- Are they a registered organization in the jurisdiction?
- Do they have have a tax id?
- Do they have insurance?

By getting that data in the form of Verifiable Claims from OrgBook, the service typically has less effort to confirm the data than if the organization had just submitted the information.

If the service decides that the organization can be given the request authorization they inform the organization (perhaps given it a paper document or PDF) and issue a Verifiable Credential about the organization to OrgBook. That Verifiable Credential can then be used by other services to verify the data about the organization.

For more details about the capabilities and structure of OrgBook, go to the [VON issuer/verifier agents](/getting_started/von-issuer-verifier-agent) page of this site.
