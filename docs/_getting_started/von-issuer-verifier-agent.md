---
title: "VON Issuer/Verifier Agent"
permalink: /getting_started/von-issuer-verifier-agent/
excerpt: "The VON Issuer/Verifier Agent"
last_modified_at: 2019-01-21T15:15:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

A VON Issuer/Verifier Agent handles the verifying of claims held by OrgBook about a registered entity (typically, an organization), and when appropriate, the issuance of a Verifiable Credential about a permit/registration/licence to OrgBook about that registered entity. In the future, VON issuer/verifier agents will handle verifying claims from, and issuing credentials to, the entity itself, once the entity has its own Verifiable Credential-capable digital wallet.

## Typical Credential Issuer Service Workflow

A typical authorization issuing service is likely to use a workflow for issuing credentials that is similar to the following:

* The service defines and publishes any pre-requisite authorizations/credentials an organization must have before applying for a credential from the service.
  * For example, an organization might need to prove they are a registered entity, have a tax number, and insurance.
* An organization applies for the credential, typing information about the pre-requisites and any other data needed by the service before reviewing the application.
  * Typically, the organization would also pay a fee for the application process and/or for the authorization itself.
  * The person submitting the application might also need to prove they have the authority to act on behalf of the applying organization.
* The service validates the application information provided and makes a decision to issue (or not) the authorization to the organization.
* If the authorization is approved, the service typically provides the organization with a document - a permit/licence/registration - that they can use to prove to other that the organization has that authority.
  * The organization might display the authorization on the wall and/or might take it to others to prove it was issued. For example to a bank for use in a business loan application process.

## How Does VON Help?

The biggest immediate impact the VON ecosystem has on the process is that the service (via its VON Issuer/Verifier Agent) can access OrgBook to get proofs of the prerequisite claims. This means that the applicant does not have to type the information in the application, the service is getting the information from OrgBook. Further, since the proofs come from OrgBook, they are known to:

* have been issued by the stated Verifiable Credential issuer service
  * not by OrgBook, and not by the applying organization
* have been issued to OrgBook
* have not been tampered with
* have not been revoked

Given that, as long as the verified claims are known to be about the right organization, the service does not have put effort into verifying the data through some other path. It is the equivalent of asking the issuer directly for the data. Had the applicant typed all of the information into the application, the service would have at least had to verify the accuracy of the typing (is the legal name correct? Is the corporate ID correct?  Is the tax ID correct? etc.). Typos aside, service would also have needed to do its own due diligence to verify the applicant claims. Depending on the likelihood of the applicant falsifying the information, such verifications can take take a lot of effort.

Note that the service still has to verify what organization is requesting the authorization, and that the person applying is authorized to act on behalf of the organization.

Another improvement in the process can occur because the prerequisites for the application process can be declared in the form of Hyperledger Indy "proof requests". If the prerequisites are issued by services that are part of the VON ecosystem, the same sort of workflow optimizations here are available for those services as well. The demonstration app [dFlow (decentralized workFlow)](https://dflow.orgbook.gov.bc.ca) shows how this information can simplify the authorization maze that frustrates so many business owners today.

And of course, the same benefits flow to other services that have this service's credentials as prerequisites in their applications. Those services can use OrgBook to prove data about organizations applying to them.

## Configuring and Deploying a VON Issuer/Verifier Agent

Technically, a VON issuer/verifier agent is a REST (web) service that is controlled by an existing application to request proofs of claims from Verifiable Credentials held by an instance of OrgBook, and to issue Verifiable Credentials to that OrgBook. Standing up an instance of VON issuer/verifier agent is done in two parts using source code and configurations found in the [VON Agent Template](https://github.com/bcgov/von-agent-template) repo.

* First, the VON issuer/verifier agent instance is configured through a series of YAML files that define the Proof Requests (verifications), Verifiable Credential issuances and related OrgBook metadata.
* Second, the existing service must be altered to invoke the VON issuer/verifier agent and OrgBook APIs at appropriate places in their credential processing lifecycle. For example, at application time, at credential issuance time, when updating a credential and when revoking a credential.

For an issuer-only service, the integration is relatively straight forward and read-only. An HTTP REST call is made to pass a JSON structure of credential attributes every time a new credential is issued or revoked.

For a verifier that needs to store the collected verified claims data, the integration will be more sophisticated, likely an alternative/replacement for some of the data entry interactions currently carried out with a user. The OrgBook search APIs can drive the UI, allowing users to search for and select their organization. Essentially, if the application your users currently use to get their permit or licence has a business name data entry text field, you can instead use OrgBook APIs to enable a search-based, autocomplete lookup. This provides a better user experience, and the use of the proof request to get other data about the business significantly improves data quality going into your service.

To see example code and configurations of existing VON issuer/verifier agents, checkout the pages in this guide on the [BC](/getting_started/bc-architecture)  and [Ontario](/getting_started/ontario-architecture) deployments of a VON ecosystem. Those pages have links to the GitHub repos behind those live, production deployments.