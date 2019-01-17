---
title: "Quick-Start Guide"
permalink: /getting_started/dev-quick-start-guide/
excerpt: "The Developer VON Getting Started Guide."
last_modified_at: 2018-05-16T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

You know a few things about [Self Sovereign Identity](https://bitsonblocks.net/2017/05/17/a-gentle-introduction-to-self-sovereign-identity/), [Decentralized Identifiers](https://w3c-ccg.github.io/did-spec/), the [Decentralized Identity Foundation](http://identity.foundation/), [Verifiable Credentials](https://w3c.github.io/vc-data-model/), and [Hyperledger Indy](https://www.hyperledger.org/projects/hyperledger-indy) and you are excited to start to play around. You've heard about the [Verifiable Organizations Network (VON)](https://von.pathfinder.gov.bc.ca/) as being a great way to get going. We agree!  And this is the place to start!

We assume you also know a bit about VON and TheOrgBook from reading our [About page]({{ "/about/" | relative_url }})

## Sit Back and Watch

If you want to start easy, begin by [watching Alice](https://www.youtube.com/watch?v=cz-6BldajiA) get her self-sovereign identity, some Verifiable Credentials and use those credentials to get a job and a loan. This video is from IBM's Identity Group and uses VON components and dFLow under the covers. IBM has a [github repo](https://github.com/IBM-Blockchain-Identity/indy-ssivc-tutorial) with the demo configured that you can run with docker. Or, stick around here and can follow on to the next step and start to build up your own version of the VON components from the original source.

**Tip:** The current IBM demo is based on the same components you will find here. In the following we'll guide you through starting up the same components to run a slightly different demo.{: .notice--info}

## Try the Demos

We also have some demos up and running that you can try out on your (or get in touch for a walkthrough):

* Run the [Alice demo](https://indyworld.vcreds.org/en/recipe/indy_world) yourself - courtesy of IBM's Blockchain Identity Group
* Check out [dFlow - Decentralized Workflow Demo](https://dflow.orgbook.gov.bc.ca) - dFlow is like the Alice demo, but for organizations for getting Permits and Licenses using a decentralized workflow.
* Access a test instance of [TheOrgBook](https://test.orgbook.gov.bc.ca/)
* Curious about the Blockchain?  Take a look at [what's on the Public Ledger](http://159.89.115.24/). Be warned - it's technical.

Ready to run the code yourself? Jump to the section [I Want To Run The Code]({{ "/getting_started/quick-start-guide/#i-want-to-run-the-code" | relative_url }}).  If not, maybe the next section is for you...

## Could Your Organization Use VON?

There are a number of organizations that might want to participate in VON - issuing and verifying credentials, running Credential Registries or configuring and deploying VON components. The following summarizes those that might be interested in running and contributing.

### Corporate and Professional Registries

Are you part of a Corporate or Professional Registries organization? You could lay the foundation in your jurisdiction to join VON! Registries issue the "foundational credential" for Organizations or Professionals. This foundational registration credential enables other issuers in your jurisdiction to lookup the basic data (name, status, identifier, dates, etc) about an entity so they can both improve their own data and issue their Verifiable Credential to your OrgBook Credential Registry. OrgBook will automatically update the organization page for that entity with the new Verifiable Credential.

To learn more, start with the [VON Participants]({{ "/getting_started/von_participants/" | relative_url }}) page, and then move on to [Running TheOrgBook Instance]({{ "/getting_started/running-tob-instance/" | relative_url }}).

### Permits and Licences Issuer

If your organization issues Permits and Licences, you can use VON to make it easier for your clients, improve your data and make it easier for organizations that rely on the Permits and Licences you issue. You should start with the [VON Participants]({{ "/getting_started/von_participants/" | relative_url }}) page, and then move on to [Running TheOrgBook Instance]({{ "/getting_started/issuing-permits-licences/" | relative_url }}).

### Technical Architect

If you've heard your organization is thinking of deploying some VON components, you probably want to know what those components are and how you would run them. You should start with the [BC VON Architecture]({{ "/getting_started/bc-architecture/" | relative_url }}) page, and then move on the pages about the Operating Components, starting with [VON Network]({{ "/getting_started/von-network/" | relative_url }}).

## I Want to Run the Code

Sounds good! Here are the steps you can follow to run some code with Docker.  There are a couple of prerequisites that you will need, some terminal windows and then we'll direct you to the details about how to get started.

### Prerequisites

To run the VON components, you need the following prerequisites. 

**Heads Up**: If you don't know what these are this might be a little advanced. We assume you are pretty familiar with running commands in a terminal window, using git and github to clone source code repositories to your computer and get Docker installed and running. You've been warned!
{: .notice--warning}

* A relatively beefy (8GB of memory, a modern CPU and ideally an SSD drive) computer running MacOS, Linux or Windows 10 Professional
* **Docker Community Edition**  If you are new to Docker, you have a fair bit of learning to do before you can get going.  [Start here](https://docs.docker.com/install/) and then go to their [Getting Started](https://docs.docker.com/get-started/) section.
* **git** and if you are on Windows, **git-bash**. If you are new to git, you again have some learning. You can [start that journey here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
    * **git-bash** is a command line shell to use on Windows that is (sort of) on par with what you get on Linux or MacOS. You will need that for the scripts we will be using.
* **s2i** This is a Docker related tool from Red Hat's OpenShift project. Get the [executable for your computer from here](https://github.com/openshift/source-to-image/releases). Unzip the file and move the executable file (e.g. "s2i" or "s2i.exe") to a directory on your path (as described [here](https://github.com/openshift/source-to-image#installation)).

### Run the Code

To run a local installation of VON, with an Indy Network, an instance of TheOrgBook, and an instance of dFlow, follow the instructions in the **[VON Quick Start Guide](https://github.com/bcgov/dFlow/blob/master/docker/VONQuickStartGuide.md)**.

:boom: Boom! On your computer, you have running:

* A Four-node [Hyperledger Indy Blockchain Network]({{ "/getting_started/von-network/" | relative_url }}). It is listening for Identities (like TheOrgBook and the dFlow services) writing and reading (DIDs, Schema, and Credential Definitions) to and from the Ledger.
  * In your browser, you can see the status and contents of the Ledger
* An instance of the [TheOrgBook]({{ "/getting_started/theorgbook/" | relative_url }}), including a Web Interface, an Indy Agent and Wallet that can talk to the Indy Network, and a Postgres database holding information from received Credentials about the Organizations in TheOrgBook
* [VON Issuer Verifier Agents]({{ "/getting_started/von-ivy/" | relative_url }}) - Several Permit and Licence Issuer Agents each running an instance of VON-X - an Indy Agent and Wallet, configured to request TheOrgBook send proofs of Claims about an Organization, and issuing a new Credential to TheOrgBook.

With that, you can use dFlow to walk through a series of business registration/permit/licence applications to receive the Credentials that are the necessary for opening a business.
