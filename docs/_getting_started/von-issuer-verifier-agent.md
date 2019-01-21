---
title: "VON Issuer/Verifier Agent"
permalink: /getting_started/von-issuer-verifier-agent/
excerpt: "The VON Issuer/Verifier Agent"
last_modified_at: 2018-05-17T15:15:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

# VON Issuer Verifier Agent

A VON Issuer/Verifier Agent handles the verifying of claims held by OrgBook about a registered entity (typically, an organization), and when appropriate, the issuance of a Verifiable Credential about a permit/registration/licence to OrgBook about that registered entity. In the future, VON Issuer/Verifier Agents will handle verifying claims from, and issuing credentials to, the entity itself - once the entity has its own Verifiable Credential-capable Digital Wallet.

## Typical Credential Issuer Service Workflow

A typical authorization issuing service is likely to use a workflow for issuing credentials that is similar to the following:

* The service defines and publishes any pre-requisite authorizations/credentials an organization must have before applying for a credential from the service
  * For example, an organization might need to prove they are a registered entity, have a tax number, and insurance.
* An organization applies for the credential, typing information about the pre-requisites and any other data needed by the service before reviewing the application.
  * Typically, the organization would also pay a fee for the application process and/or for the authorization itself.
  * The person submitting the application might also need to prove they have the authority to act on behalf of the applying organization.
* The service validates the application information provided and makes a decision to issue (or not) the authorization to the organization.
* If the authorization is approved, the service typically provides the organization with a document - a permit/licence/registration - that they can use to prove to other that the organization has that authority.
  * The organization might display the authorization on the wall and/or might take it to others to prove it was issued - for example to a bank for use in a business loan application process.

## How Does VON Help?

The biggest immediate impact the VON ecosystem has on the process is that the service (via its VON Issuer/Verifier Agent) can access OrgBook to get proofs of the prerequisite claims. This means that the applicant does not have to type the information in - it is collected automatically. Further, since the proofs come from OrgBook, they are known to:

* Have been issued by the stated Verifiable Credential Issuer
  * Not by OrgBook, and not by the applying organization
* Have been issued to OrgBook
  * In the future, an organization might be issued the Verifiable Credentials into their own Digital Wallet and proof them from that Wallet.
* Have not been tampered with
* Have not been revoked

Given that, as long as the verified claims are known to be about the right organization, the service does not have put effort into verifying the data through some other path. Had the applicant typed all of the information into the application, at minimum, the service would have to verify the accuracy of the typing (is the Legal Name correct? Is the corporate ID correct?  Is the tax ID correct? etc.). Typos aside, the information has already been validated and the service does not need to do it's own due diligence to verify what the applicant claims - the service is getting authoritative information from the issuers.

Note that the service still has to verify what organization is requesting the authorizations, and that the person applying is authorized to act on behalf of the organization.

The pre-requisites the service defines for the application process can be declared in the form of Hyperledger Indy "Proof Requests". If the pre-requisites are issued by services that are part of the VON ecosystem, the same sort of workflow optimizations here are available for those services as well.

> The demonstration app [dFlow](https://dflow.orgbook.gov.bc.ca) shows how this can simplify the "authorization maze" that frustrate so many business owners today.

And of course, the same benefits flow to other services that have this service's Credentials as pre-requisites in their applications. Those services can use OrgBook to prove data about organizations applying to them.

## Configuring and Deploying a VON Issuer/Verifier Agent

Technically, a VON Issuer/Verifier Agent is a REST (web) service that is controlled by an existing application to request proofs of claims from Verifiable Credentials held by an instance of OrgBook, and to issue Verifiable Credentials to that OrgBook. Standing up an instance of VON Issuer/Verifier Agent is done in two parts using source code and configurations found in the [VON Agent Template](https://github.com/bcgov/von-agent-template) repo.

* First, the VON Issuer/Verifier Agent instance is configured through a series of YAML files that define the Proof Requests (verifications), Verifiable Credential issuances and related OrgBook metadata.
* Second, the existing service must be altered to invoke the VON Issuer/Verifier Agent and OrgBook APIs at appropriate times.

For an issuer-only service, the integration is straight forward and read-only - a REST call to pass JSON every time a new Credential is issued or revoked.

For a verifier that must store the verified data, the integration will be more sophisticated - likely an alternative/replacement for some of the data entry interactions currently carried out with a User. The OrgBook search APIs can drive the UI, allowing users to search for and select their organization. Essentially, if the application your users currently use to get their permit or licence has a "Business Name" data entry text field, you can instead use OrgBook APIs to enable a search-based, autocomplete lookup. This provides a better user experience, and the use of the proof request to get other data about the Business significantly improves data quality going into your service.

To see example code and configurations of existing VON Issuer/Verifier Agents, checkout the pages in this guide on the [BC](/getting_started/bc-architecture) and [Ontario](/getting_started/ontario-architecture) deployments of a VON ecosystem. Those pages have links to the GitHub repos behind those deployments.