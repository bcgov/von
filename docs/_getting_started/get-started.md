---
title: "Get Started with VON"
permalink: /getting_started/get-started/
excerpt: "Get Started with the Verifiable Organizations Network (VON), Self-Sovereign Identity and Verifiable Credentials to empower business."
last_modified_at: 2019-01-21T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

Welcome to the Verifiable Organizations Network (VON)!  We have lots of information here and in the various code repositories that make up VON. That's good, but it can make it difficult for someone new (like you) to figure out where to get started. That's the purpose of this page.  Scan this list and find the topics that will help you get started.

- Basic Principles
  - [What is the business problem VON is trying to solve?](#whats-the-problem)
  - [Where's the blockchain?](#wheres-the-blockchain)
- For Business
  - [I'm with an authoritative public registry - e.g. a corporate registry](#authoritative-public-registries)
  - [I'm with a permit or licence Issuer](#permits-and-licenses-issuers)
  - [We need to verify registrations, permits and/or licenses](#registration-permit-and-licence-verifiers)
- Technical Information
  - [What are the components of VON?](#technical-components-of-a-von-ecosystem)
  - [I'd like to run some Hyperledger Indy code](#running-indy-code)
  - [I'd like to run a VON ecosystem](#running-a-von-ecosystem)
  - [I'd like to setup a VON agent](#configuring-your-own-von-agent)

# What's the Problem?

To understand the business problem that VON is trying to solve, take a look at the [About](/about) page on this site. There is a link at the top of that page to a webinar about the problem we're trying to solve&mdash;take a listen. Or, just read the About page text. Come back here once you've gone through that material.

# Where's the Blockchain?

VON is built on a foundation of blockchain technology, and more specifically, blockchain technology focused on decentralized identity. If you are new to how decentralized identity relates to the business challenge VON addresses, start with our [VON's Blockchain Basis](/getting_started/vons-blockchain-basis)  page. In that page, we also cover self-sovereign identity (SSI), decentralized identifiers (DIDs) and verifiable credentials (VCs).

# Types of VON Participants

The following are the types of organizations that might be interested in participating in VON and possibly operating components of VON.

## Authoritative Public Registries

Authoritative public registries are the foundation of VON. Registries have the authority (often from legislation) to register individuals and organizations to operate within a jurisdiction. There are many examples of registries:

- Corporate registries for organizational entities (corporations, partnerships, sole proprietorships, non-profits and so on)
- Professional accreditation registries (lawyers, doctors, engineers and so on)
- Associations such as colleges and universities
- Land title registries
- And more...

Such registries are potential operators of an instance of an OrgBook. If you are involved in such a registry, learn [about VON](/getting_started/von-overview) and about [OrgBook](/getting_started/orgbook), and consider if you should join VON.

## Permits and Licenses Issuers

If your organization is a service that issues permits and/or licenses to public entities that are authorized by a registry, you are a great candidate to operate a VON Issuer/Verifier Agent.

Check out the [overview of VON](/getting_started/von-overview) and [using VON Issuer/Verifier Agent](/getting_started/von-issuer-verifier-agent) sections, and consider if you should join VON.

## Registration, Permit and Licence Verifiers

If your organization needs to verify credentials about an entity, VON could really help you. Current "know your customer" (KYC) processes are labour intensive because the documents that need to be verified are easily forged, and the supposedly private information from the documents may be known by others that might be using that information fraudulently. That means you have to do your own due diligence to lower your risk in accepting the information. Verifiable credentials available from instances of OrgBook can make the process more reliable at a much lower cost because the digital versions of the documents can be trusted to be accurate.

To learn more about using VON to enable verifications, see an [overview of VON](/getting_started/von-overview) and learn about [using VON Issuer/Verifier Agent](/getting_started/von-issuer-verifier-agent), and consider if you should join VON.

# Technical Components of a VON Ecosystem

A [VON ecosystem](/getting_started/von-overview) is made up of two interacting technical components: [VON issuer/verifier agents](/getting_started/von-issuer-verifier-agent) and an instance of [OrgBook](/getting_started/orgbook). Check out those sections to learn more about each component.

# Running Code

Now you're talking. Let's see this stuff in action!  There are a few simple options for quickly learning about the technical underpinnings of VON.

## Running Hyperledger Indy Code

To learn more about the basics of [self-sovereign identity](/getting_started/vons-blockchain-basis#self-sovereign-identity) and Hyperledger Indy, you can run the [Indy code workshop](https://github.com/hyperledger/education/blob/master/LFS171x/indy-material/nodejs/README.md), part of Hyperledger's edX course called [Blockchain for Business](https://www.edx.org/course/blockchain-for-business-an-introduction-to-hyperledger-technologies). The workshop takes you through a nodejs implementation of some Hyperledger Indy web agents connecting and exchanging verifiable credentials.

## Running a VON Ecosystem

To run a local instance of a VON ecosystem, you'll need a bit more than just a browser, specifically git, docker, docker-compose and bash. If you are up for that, [follow these directions](https://github.com/bcgov/dFLow/blob/master/docker/VONQuickStartGuide.md) to run the latest VON dFLow (decentralized workFlow) demo, which includes a sandbox Hyperledger Indy network, an instance of OrgBook, and a number of VON issuer/verifier agents. The dFlow demo uses OrgBook and the VON issuer/verifier agents to complete a workflow for getting various interdependent business licences and permits.

## Configuring Your Own VON Agent

If you want to go a step further, you can run a tutorial that walks you through the process of configuring your own VON issuer/verifier agent. The [instructions](https://github.com/bcgov/von-agent-template/blob/master/GettingStartedTutorial.md) show you how to define Hyperledger Indy-style verifiable credentials and proof requests, integrate with an OrgBook instance, and extend dFlow. You'll have your own permit issuing agent in no time!
