---
layout: single
title:  "What's Next - TheOrgBook"
header:
  teaser: "assets/images/Teal_Background.png"
categories: 
  - Jekyll
tags:
  - docs
---

We've been asked a lot about what's next on the VON Project. Here's an overview of what we have planned for the next couple of months. By the way, if you are interested in the underlying details - follow along on our [VON Trello board](https://trello.com/b/fHox971V/von) where all of our real "What's Next" info is maintained.

To this point, the team has been busy creating a first [demonstration version](https://devex-von-test.pathfinder.gov.bc.ca/home) of TheOrgBook. We've demonstrated the use of Verifiable Credentials held by TheOrgBook with [dFlow](https://http://dflow.orgbook.gov.bc.ca) - a decentralized workFlow driven by Credentials and credentials prerequisite. We've learned a ton about Hyperledger-Indy (with help from our Government of Canada collaborators) through the creation of an initial [VON-Agent](https://github.com/PSPC-SPAC-buyandsell/von_anchor), and in the process [answering](http://138.197.170.136/) the always mysterious question "what's on the ledger?". We have even created a [visualization](https://kumu.io/maher-bouidani/bc-govern) of what's on the ledger to try to further remove the mystery.

Next up is TheOrgBook Beta. What's the mean?  Well, in a nutshell, we want to publish a beta version of TheOrgBook that is populated with data from BC Registries to support both the discovery and verification (using Hyperledger Indy technology) of BC organizations' public credentials. Getting a beta version of TheOrgBook available is going to take some work. Here's what's involved.

### Using the Sovrin Provisional Network
Since the Beta TheOrgBook will be a live, public application, we'll need to anchor the Identities involved in TheOrgBook on a live, public, globally accessible network. That means will need to use the [Sovrin's](https://sovrin.org) [Provisional Network](https://sovrin.org/library/trust-framework/) to put on the ledger TheOrgBook and BC Registries identities, the Verifiable Credential schemas and the BC Registries credential definitions. The Sovrin Provisional Network is an implementation of the [Hyperledger-Indy](https://www.hyperledger.org/projects/hyperledger-indy) codebase.

### Loading BC Registries Claims
We've established a secure, read-only connection to BC Registries so that we can access the information necessary to generate the appropriate claims about incorporations in BC. With that, we can build a Verifiable Credentials "Printer Driver" to stamp out credentials to TheOrgBook. We'll load signed BC Registries data for past incorporation events and create a mechanism for producing new Verifiable Credentials as events occur in the future. A prerequisite of this effort is an Information Architecture task  - figuring out what Credentials types should be created and what data to put in those Credentials. Finally, as the Verifiable Credentials are loaded - what impact will the BC Registries event have on TheOrgBook's searching/discovery capabilities?  For example, a "Dissolution" event will remove an organization from the "Name Search" - unless of course the user is including history in their search.

### Scaling: The Enterprise Wallet
With the volume of credentials going into TheOrgBook - on the order of millions - we need a Verifiable Credentials wallet that is capable of handling those volumes. Our recent [Code With Us Enterprise Wallet Opportunity](https://von.pathfinder.gov.bc.ca/von-code-for-us-challenges-awarded/) is well underway to achieve that goal. We may have to get some help from the Hyperledger-Indy community for that effort - which is great.

### Improving the Search User Experience
The demo version of TheOrgBook used a fairly simple user interface. We would like to improve that interface to scale to the data volumes we will have, and to expand the ways to discover BC organizations. For example:

* Searching from an organization find what credentials nearby businesses possess, or, from a location find nearby businesses with a specific credential types.
* We want to provide ways to search for not only the current state of organizations, but what (and when) organizations held other credentials in the past.
* We'd like to provide a timeline view of an organization.

### Infrastructure Updates
As well as the user visible changes we'll be making, there are several other changes that will be made in evolving the implementation:

* A goal is to separate out the skinning of TheOrgBook so that it is easier for another Jurisdictions to use TheOrgBook code, tuned to their purpose and with their Look and Feel.
* We think that there might be useful to store data into a different data store than our current Postgres backend. For example, it may be easier to provide better analytics if the data is stored into a graph database, since the data with which we are dealing is primarily about relationships.
* As part of this effort we have created and we'll continue to evolve (in collaboration with the [Hyperledger-Indy](https://www.hyperledger.org/projects/hyperledger-indy) community) the [VON-Agent](https://github.com/PSPC-SPAC-buyandsell/von_agent) - code we have built to simplify the creation of Government Services (and possibly other) interfaces to HL-Indy-based networks.
* A nice to have for us - a beta usable version of DID-Auth, so we can use DID's to secure the implementation. At worst, we'll need to add some traditional mechanisms to lock down the endpoints of the application, but with our [Code With Us Enterprise DID-Auth Opportunity](https://von.pathfinder.gov.bc.ca/von-code-for-us-challenges-awarded/) we'll make progress regardless.

Lots to do - we're looking forward to it!