---
title: "Get Started with VON"
permalink: /getting_started/get-started/
excerpt: "Get Started with the Verifiable Organizations Network (VON), Self-Sovereign Identity and Verifiable Credentials to empower business."
last_modified_at: 2018-05-16T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

Welcome to VON - the Verifiable Organizations Network!  We have lots of information here and in the various code repositories that make up VON. That's good, but it makes it hard for someone new (like **you**) to figure out where to get started. That's the purpose of this page.  Scan this list and find the topics that will help you get started.

- Basic Principles
  - [What is the business problem VON is trying to solve?](#whats-the-problem)
  - [Where's the blockchain?](#wheres-the-blockchain)
- Business
  - [I'm with an Authoritative Public Registry - e.g. a Corporate Registry](#authoritative-public-registries)
  - [I'm with a Permit or License Issuer](#permits-and-licenses-issuers)
  - [We need to verify Registrations, Permits and/or Licenses - KYC](#registration-permit-and-licence-verifiers)
- Technical
  - [What are the components of VON?](#the-components-of-von)
  - [I'd like to see and run some Hyperledger Indy code](#running-indy-code)
  - [What's involved in running an instance of TheOrgBook](#running-a-production-instance-of-theorgbook)
  - [How can I get an instance of VON IVy running for Issuing and Verifying Credentials?](#integrating-with-a-production-von-ivy-instance)

# What's the Problem?

To understand the business problem that VON is trying to solve, take a look at the [About](/about) page on this site. There's a link at the top of that page to a webinar about the problem we're trying to solve - take a listen. Or, just read the About page text. Come back here once you've gone through that material.

# Where's the Blockchain?

VON is built on a foundation of blockchain technology - and more specifically - blockchain technology focused on decentralized identity. If you are new to how decentralized identity relates to the business challenge VON addresses, start with our [VON's Blockchain Basis](/getting_started/vons-blockchain-basis) page.

# Types of VON Participants

The following are the types of organizations that might be interested in participating in, and operating components of VON.

## Authoritative Public Registries

Authoritative Public Registries are the foundation of the Verifiable Organizations Network. Registries have the authority (often from legislation) to register individuals and organization to operate within a jurisdictional area. There are many examples of registries to be found:

- Corporate Registries for organizational entities (corporations, partnerships, sole proprietorships, non-profits and so on)
- Professional Accredication Registries (lawyers, doctors, engineers and so on)
- Associations such as Colleges and Universities
- Land Title Registries
- And more...

Such registries are potential operators of an instance of a central component of VON - TheOrgBook, and issuers of foundational Verifiable Credentials about entities. If you are involved in such a Registry, learn [about VON](/getting_started/von-overview) and about [TheOrgBook](/getting_started/theorgnook), and see if you should consider joining VON.

## Permits and Licenses Issuers

If you issue permits and licenses to public entities that are authorized by a registry (see section above) that runs an instance of TheOrgBook - you are in luck! Chances are, one of the first things you need to do is find out exactly what entity is asking for the permit/licence. If so, you can use TheOrgBook instance as the source of that information - search, find and verify a proof from TheOrgBook about that entity. That means that you will be building your record about that entity using verifiable data. Once your process completes and a permit/license is to be issued, an instance of VON IVy can be used as a "print driver" for a Verifiable Credential issued to TheOrgBook about the entity.

Check out an [overview of VON](/getting_started/von-overview) and about [using VON IVy](/getting_started/von-ivy), and see if you should consider joining VON.

## Registration, Permit and Licence Verifiers

If your organization needs to verify credentials about an entity - VON could really help you. Current "know your customer" (KYC) processes are labour intensive because the documents that need to be verified are easily forged, and the supposedly private information on the documents may be known by others that might be using that information. Verifiable Credentials - enabled by Decentralized Identity and available from VON instances of TheOrgBook - can make the process more reliable at a much lower cost.

Check out an [overview of VON](/getting_started/von-overview) and about [using VON IVy](/getting_started/von-ivy), and see if you should consider joining VON.

# The Components of VON

VON is made up of two interacting components - [VON IVy](getting_started/von-ivy) and [TheOrgBook](getting_started/theorgbook).

VON IVy currently handles the verifying of claims held by TheOrgBook about a registered entity, and if appropriate, the issuance of a permit/licence Verifiable Credential to TheOrgBook about that registered entity. In the future, VON IVy will also handle verifying claims and issuing credentials to the entity itself - once it has it's own VC-capable Digital Wallet.

TheOrgBook is a "community Digital Wallet" - holding public Verifiable Credentials about registered entities and used by VON IVy instances. Each instance of TheOrgBook is operated by an [Authoritative Public Registry](#authoritative-public-registries), and all the Verifiable Credentials that it holds are linked to those registered entities. TheOrgBook also provides a Web interface supporting users searching TheOrgBook from their browser. The BC instance of TheOrgBook can be seen [here](https://theorgbook.pathfinder.gov.bc.ca).

# Running Indy Code

Now you're talking - let's see this stuff in action.  There are a couple of simple options for this.

One option that you can run in just a browser is the [Indy code workshop](https://github.com/hyperledger/education/blob/master/LFS171x/indy-material/nodejs/README.md) part of Hyperledger's edX course on [Blockchain for Business](https://www.edx.org/course/blockchain-for-business-an-introduction-to-hyperledger-technologies). It takes you through a nodejs implementation of some Agents connecting and exchanging Verifiable Connections.

To run a VON demo, you'll need a bit more than just a browser - git, docker, docker-compose and bash. If you are up for that - [follow these directions](https://github.com/bcgov/dFLow/blob/master/docker/VONQuickStartGuide.md) to run the latest VON dFLow demo, which includes a sandbox Hyperledger Indy, an instance of TheOrgBook and a set of VON Issuer Verifier Agent instances that use TheOrgBook to complete workflows for getting various business licences and permits.

# Running a Production Instance of TheOrgBook

TheOrgBook is a moderately complex application to run in Production that has good documentation (including operational deployment scripts) that make it relatively easy to deploy. The code has been designed to support a skinnable, localizable UI for different jurisdictions, and to be agnostic of the schema of the Verifiable Credentials issued to it. TheOrgBook's search capabilities support the generic concepts of "names", "addresses" (locations) and credential types - regardless of how those concepts are defined in Credentials.

See the section of this site on [TheOrgBook](/getting_started/theorgbook) for the details and the primary repo for [TheOrgBook on github](https://github.com/bcgov/TheOrgBook). As well, checkout the pages in this guide on the [BC](/getting_started/bc-architecture) and [Ontario](/getting_started/ontario-architecture) deployments of a VON ecosystem.

# Integrating with a Production VON IVy Instance

VON IVy is a REST service that can be controlled by an existing application to request proofs of claims from Verifiable Credentials held by an instance of TheOrgBook and to issue Verifiable Credentials to TheOrgBook. Standing up an instance of VON IVy is done in two parts.

First, the VON IVy instanced is configured through a series of YML files that define the Proof Requests (verifications), Verifiable Credential issuances and related metadata. Second, the existing service must be altered to invoke the VON IVy and TheOrgBook instances at appropriate times. For an issuer-only service, the integration will be trivial - a REST call to pass JSON for a new Credential. For a verifier, the integration will be a little more sophisticated - likely an alternative/replacement for some of the data entry interactions with a User. Using TheOrgBook search APIs might drive the UI, allowing the user to search for and confirm their organization. Essentally, if the application your users use to get their permit or licence has a "Business Name" type field you can use TheOrgBook APIs to enable a search based autocomplete instead of having a free text field. This provides a better user expereince and significantly improves data quality for the issuing service.

See the section of this site on [VON IVy](/getting_started/von-ivy) for the details and the primary repo for [VON IVy on github](https://github.com/bcgov/von-agent-template). As well, checkout the pages in this guide on the [BC](/getting_started/bc-architecture) and [Ontario](/getting_started/ontario-architecture) deployments of a VON ecosystem.