---
title: "Quick-Start Guide"
permalink: /getting_started/quick-start-guide/
excerpt: "Getting Started with the Verifiable Organizations Network (VON), Self-Sovereign Identity and Verifiable Credentials to empower business."
last_modified_at: 2018-05-16T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

You know a few things about [Self Sovereign Identity](https://bitsonblocks.net/2017/05/17/a-gentle-introduction-to-self-sovereign-identity/), [Decentralized Identifiers](https://w3c-ccg.github.io/did-spec/), the [Decentralized Identity Foundation](http://identity.foundation/), [Verifiable Credentials](https://w3c.github.io/vc-data-model/), and [Hyperledger Indy](https://www.hyperledger.org/projects/hyperledger-indy) and you are excited to start to play around. You've heard about the [Verifiable Organizations Network (VON)](https://von.pathfinder.gov.bc.ca/) as being a great way to get going. We agree!  And this is the place to start!

We assume you also know a bit about VON and TheOrgBook from reading our [About page]({{ "/about/" | relative_url }})

## Sit Back and Watch

If you want to start easy, begin by [watching Alice](https://www.youtube.com/watch?v=cz-6BldajiA) get her self-sovereign identity, some Verifiable Credentials and use those Credentials to get a job and a loan. This video is from IBM's Identity Group and uses VON components and Permitify under the covers. IBM has a [github repo](https://github.com/IBM-Blockchain-Identity/indy-ssivc-tutorial) with the demo configured that you can run with docker. Or, stick around here and can follow on to the next step and start to build up your own version of the VON components from the original source.

**Tip:** The current IBM demo is based on the same components you will find here. In the following we'll guide you through starting up the same components to run a slightly different demo.{: .notice--info}

## Try the Demos

We also have some demos up and running that you can try out on your (or get in touch for a walkthrough):

* Run the [Alice demo](https://indyworld.vcreds.org/en/recipe/indy_world) yourself - courtesy of IBM's Blockchain Identity Group
* Check out [Getting a Restaurant Permit Demo](https://devex-von-test.pathfinder.gov.bc.ca/en/recipe/start_a_restaurant) - like the Alice demo, but for Permits and Licenses
* Access a test instance of [TheOrgBook](https://devex-von-test.pathfinder.gov.bc.ca/)
* Curious about the Blockchain?  Take a look at [what's on the Public Ledger](http://159.89.115.24/). Be warned - it's technical.

Ready to run the code yourself? Jump to the section [I Want To Run The Code]({{ "/getting_started/quick-start-guide/#i-want-to-run-the-code" | relative_url }}).  If not, maybe the next section is for you...

## The "I'm Not a Techy" Path

If you are not a techy, and you aren't going to run VON software on your system, you are probably here to learn about VON and how the capabilities inherent in VON might be useful in your business. Here are some places you can go to learn more:

### Corporate Registries

Part of a Corporate Registries organization? You could lay the foundation of a VON in your jurisdiction! Registries is a key "base of identity" for Organizations, just as a Driver's License issuer is a key "base of identity" for a Person. You should start with the [VON Participants]({{ "/getting_started/von_participants/" | relative_url }}) page, and then move on to [Running TheOrgBook Instance]({{ "/getting_started/running-tob-instance/" | relative_url }}).

### Permits and Licences Issuer

If your organization issues Permits and Licences, you can use VON to make it easier for your clients, improve your data and make it easier for organizations that rely on the Permits and Licences you issue. Pheww!  You should start with the [VON Participants]({{ "/getting_started/von_participants/" | relative_url }}) page, and then move on to [Running TheOrgBook Instance]({{ "/getting_started/issuing-permits-licences/" | relative_url }}).

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

To run a local installation of VON, with an Indy Network, an instance of TheOrgBook, and an instance of Permitify, start with the following steps. We've provided links to the installation steps for each component. As we said above - you do need to know how to use git to clone a repo and use a terminal to navigate on the command line to your local repo instances.

1. Use git to clone the repos of each of the the three components:
    * **von-network**: https://github.com/bcgov/von-network 
    * **TheOrgBook**: https://github.com/bcgov/TheOrgBook 
    * **Permitify**: https://github.com/bcgov/permitify
2. Open up three terminal windows running bash - one for **von-network**, one for **TheOrgBook** and one for **Permitify**
3. Follow the instructions in the **[Quick Start Guide](https://github.com/bcgov/TheOrgBook/blob/master/docker/README.md#quick-start-guide)**

:boom: Boom! On your computer, you have running:

* A Four-node [Hyperledger Indy Blockchain Network]({{ "/getting_started/von-network/" | relative_url }}). It is listening for Identities (like TheOrgBook and the Permitify services) writing and reading (DIDs, Schema, and Credential Definitions) to and from the Ledger.
  * In your browser, you can see the status and contents of the Ledger at: http://localhost:9000
* An instance of the [TheOrgBook]({{ "/getting_started/theorgbook/" | relative_url }}), including a Web Interface (try it at: http://localhost:8080/en/home) , an Indy Agent and Wallet that can talk to the Indy Network, and a Postgres database holding information from received Credentials about the Organizations in TheOrgBook
* [Permitify]({{ "/getting_started/von-x-permitify/" | relative_url }}) - A set of simulated Permit and Licence Issuers each running an instance of VON-X - an Indy Agent and Wallet, configured to requesting TheOrgBook send proof of Claims about an Organization, and issuing a new Credential to TheOrgBook. 

From there, you can [start here](http://localhost:8080/en/recipe/start_a_restaurant) to walk through the Permitify Demo to Register a Business and receive the Credentials that are the prerequsites for getting a Restaurent Business License.

<figure>
  <img src="{{ 'assets/images/VON-Logo.png' | relative_url }}" alt="creating a new branch on GitHub">
</figure>

