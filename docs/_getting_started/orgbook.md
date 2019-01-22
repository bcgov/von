---
title: "OrgBook"
permalink: /getting_started/orgbook/
excerpt: "About OrgBook"
last_modified_at: 2019-01-21T15:15:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

An OrgBook instance is an implementation of a verifiable credential registry, a "community digital wallet" holding verifiable credentials about entities registered in the operating jurisdiction. An OrgBook is used by VON issuer/verifier agents that request proofs of claims held by the OrgBook about entities and that issue verifiable credentials to the OrgBook instance. Each OrgBook instance is operated by an [authoritative public registry](/getting_started/get-started#authoritative-public-registries), and all the verifiable credentials held are linked to those registered entities. An OrgBook provides a website supporting users searching OrgBook from their browser for information about the registered entities. As well, an OrgBook instance provides the Application Programming Interface (API) necessary to support VON issuer/verifier agents integrations.

The BC instance of OrgBook can be seen [here](https://orgbook.gov.bc.ca), and the Ontario instance [here](https://www.von.gov.on.ca).

## Running an Instance of OrgBook

OrgBook is a moderately complex application to customize, deploy and run in production. There is good documentation (including operational deployment scripts) in the [OrgBook GitHub repo](https://github.com/bcgov/TheOrgBook) that drives the BC and Ontario instances. OrgBook code has been designed to support a skinnable, localizable (multi-language) user interface for different jurisdictions, and to be agnostic to the schema of the verifiable credentials issued to it. OrgBook's search capabilities support the generic concepts of names, addresses (locations) and credential types - regardless of how those concepts are defined in Credentials.

## OrgBook Architecture

Organizations looking to implement an OrgBook instance should review the pages in this guide on the [BC](/getting_started/bc-architecture) and [Ontario](/getting_started/ontario-architecture) deployments of VON ecosystems.