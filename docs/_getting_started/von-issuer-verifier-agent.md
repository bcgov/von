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

# Integrating with a Production VON Issuer/Verifier Agent Instance

VON Issuer/Verifier Agent is a REST service that can be controlled by an existing application to request proofs of claims from Verifiable Credentials held by an instance of OrgBook and to issue Verifiable Credentials to that OrgBook. Standing up an instance of VON Issuer/Verifier Agent is done in two parts.

First, the VON Issuer/Verifier Agent instance is configured through a series of YAML files that define the Proof Requests (verifications), Verifiable Credential issuances and related OrgBook metadata. Second, the existing service must be altered to invoke the VON Issuer/Verifier Agent and OrgBook APIs at appropriate times. For an issuer-only service, the integration is pretty trivial - a REST call to pass JSON every time a new Credential is issued or revoked. For a verifier, the integration will be a little more sophisticated - likely an alternative/replacement for some of the data entry interactions with a User. The OrgBook search APIs can drive the UI, allowing users to search for and select their organization. Essentially, if the application your users currently use to get their permit or licence has a "Business Name" data entry text field, you can instead use OrgBook APIs to enable a search-based, autocomplete lookup. This provides a better user experience, and the use of the proof request to get other data about the Business significantly improves data quality going into your service.

See the section of this site on [VON Issuer/Verifier Agent](/getting_started/von-issuer-verifier-agent) for the details and the primary repo for [VON Issuer/Verifier Agent on github](https://github.com/bcgov/von-agent-template). As well, checkout the pages in this guide on the [BC](/getting_started/bc-architecture) and [Ontario](/getting_started/ontario-architecture) deployments of a VON ecosystem.