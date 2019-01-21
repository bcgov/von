---
title: "OrgBook"
permalink: /getting_started/orgbook/
excerpt: "About OrgBook"
last_modified_at: 2018-05-17T15:15:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

## VON OrgBook Instances

An OrgBook instance is a form of Credential Registry, a "community Digital Wallet" holding Verifiable Credentials about entities registered in the operating jurisdiction, and is used by VON issuer/verifier Agents. Each OrgBook instance is operated by an [Authoritative Public Registry](#authoritative-public-registries), and all the Verifiable Credentials that it holds are linked to those registered entities. An OrgBook provides a Web interface supporting users searching OrgBook from their browser. The BC instance of OrgBook can be seen [here](https://orgbook.gov.bc.ca).

# Running a Production Instance of OrgBook

OrgBook is a moderately complex application to run in Production that has good documentation (including operational deployment scripts) that make it relatively easy to deploy. The code has been designed to support a skinnable, localizable UI for different jurisdictions, and to be agnostic to the schema of the Verifiable Credentials issued to it. OrgBook's search capabilities support the generic concepts of "names", "addresses" (locations) and credential types - regardless of how those concepts are defined in Credentials.

See the section of this site on [OrgBook](/getting_started/orgbook) for the details and the primary repo for [OrgBook on github](https://github.com/bcgov/TheOrgBook). As well, checkout the pages in this guide on the [BC](/getting_started/bc-architecture) and [Ontario](/getting_started/ontario-architecture) deployments of VON ecosystems.