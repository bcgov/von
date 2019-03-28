---
title: "Quick-Start Guide"
permalink: /getting_started/dev-quick-start-guide/
excerpt: "The Developer VON Getting Started Guide."
last_modified_at: 2019-01-21T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

You know a few things about [self-sovereign identity](https://bitsonblocks.net/2017/05/17/a-gentle-introduction-to-self-sovereign-identity/), [decentralized identifiers](https://w3c-ccg.github.io/did-spec/), the [Decentralized Identity Foundation](http://identity.foundation/), [verifiable credentials](https://w3c.github.io/vc-data-model/), and [Hyperledger Indy](https://www.hyperledger.org/projects/hyperledger-indy) and you are excited to start to play around. You've heard about the [Verifiable Organizations Network (VON)](https://von.pathfinder.gov.bc.ca/) as being a great way to get going. We agree!  And this is the place to start!

We assume you also know a bit about VON and OrgBook from reading our [About page]({{ "/about/" | relative_url }})

## Sit Back and Watch

If you want to start out easy, begin by [watching Alice](https://www.youtube.com/watch?v=cz-6BldajiA) get her self-sovereign identity, some verifiable credentials and use those credentials to get a job and a loan. This video is from IBM's Identity Group and uses VON components and dFLow under the covers. IBM has a [github repo](https://github.com/IBM-Blockchain-Identity/indy-ssivc-tutorial) with the demo configured that you can run with docker. Or, stick around here and you can follow on to the next step and start to build up your own version of the VON components from the original source.

**Tip:** The current IBM demo is based on the same components you will find here. In the following, we'll guide you through starting up the same components to run a slightly different demo.{: .notice--info}

## Try the Demos

We also have some demos up and running that you can try out on your own (or get in touch for a walkthrough):

* Run the [Alice demo](https://indyworld.vcreds.org/en/recipe/indy_world) yourself - courtesy of IBM's Blockchain Identity Group
* Check out [dFlow - Decentralized Workflow Demo](https://dflow.orgbook.gov.bc.ca)
  * dFlow is like the Alice demo, but for organizations for getting permits and licenses using a decentralized workflow.
* Access a test instance of [OrgBook](https://test.orgbook.gov.bc.ca/)
* Curious about the Blockchain?  Take a look at [what's on the Public Ledger](http://159.89.115.24/). Be warned - it's technical.

Ready to run the code yourself? Jump to the section [I Want to Run The Code]({{ "/getting_started/quick-start-guide/#i-want-to-run-the-code" | relative_url }}).  If not, maybe the next section is for you...

## Could Your Organization Use VON?

There are a number of organizations that might want to participate in VON, issuing and verifying credentials, running credential registries or configuring and deploying VON components. The following summarizes those that might be interested in running and contributing.

### Corporate and Professional Registries

Are you part of a corporate or professional registries organization? You could lay the foundation in your jurisdiction to join VON! Registries issue the "foundational credential" for organizations or professionals. This foundational registration credential enables other issuers in your jurisdiction to lookup the basic data (name, status, identifier, dates, etc.) about an entity so they can both improve their own data and issue their verifiable credential to your OrgBook credential registry. OrgBook will automatically update the organization page for that entity with the new verifiable credential.

To learn more, start with the [VON Participants]({{ "/getting_started/von_participants/" | relative_url }}) page, and then move on to [Running an OrgBook Instance]({{ "/getting_started/running-an-orgbook/" | relative_url }}).

### Permits and Licences Issuer

If your organization issues permits and licences, you can use VON to make it easier for your clients, improve your data and make it easier for organizations that rely on the permits and licences you issue. You should start with the [VON Participants]({{ "/getting_started/von_participants/" | relative_url }}) page, and then move on to [Running a VON Issuer/Verifier Agent instance]({{ "/getting_started/issuing-permits-licences/" | relative_url }}).

### Technical Architect

If you've heard your organization is thinking of deploying some VON components, you probably want to know what those components are and how you would run them. You should start with the [BC VON Architecture]({{ "/getting_started/bc-architecture/" | relative_url }}) page, and then move on the pages about the operating components, starting with [VON Network]({{ "/getting_started/von-network/" | relative_url }}).

## I Want to Run the Code

Sounds good! We have a Quick Start guide you can follow to run the code with Docker. To run a local installation of VON, with an Indy Network, an instance of OrgBook, and an instance of dFlow, follow the instructions in the **[VON Quick Start Guide](https://github.com/bcgov/dFlow/blob/master/docker/VONQuickStartGuide.md)**.

Once you have completed the Quick Start guide steps you will have running:

* A four-node [Hyperledger Indy Blockchain Network]({{ "/getting_started/von-network/" | relative_url }}). It is listening for identities (like OrgBook and the dFlow services), writing and reading (DIDs, schema, and credential definitions) to and from the ledger.
  * In your browser, you can see the status and contents of the ledger
* An instance of  [OrgBook]({{ "/getting_started/orgbook/" | relative_url }}), including a web interface, an Indy agent and wallet that can talk to the Indy network, and a Postgres database holding information from received credentials about the Organizations in OrgBook
* [VON issuer/verifier agents]({{ "/getting_started/von-issuer-verifier-agent" | relative_url }})  Several permit and licence issuers each running an instance of an Indy agent and wallet, configured to request OrgBook send proofs of claims about an organization, and issuing a new credential to OrgBook.

With that, you can use dFlow to walk through a series of business registration, permit or licence applications to receive the credentials that are the necessary for opening a business.

If you want to go further, you can run  a tutorial we have created on how to configure your own VON Issuer/Verifier Agent. The instructions for that can be found [here](https://github.com/bcgov/von-agent-template/blob/master/GettingStartedTutorial.md). Give it a try and you can be your own permit issuer.

A detailed document about our first demonstration project can be found [here](https://docs.google.com/document/d/1wNnXdQKUtWnx--xw3VQ9Fr2TDa0kUNIBSMmFGR4uoMg/edit?usp=sharing).