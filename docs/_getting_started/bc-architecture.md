---
title: "BC's VON Architecture"
permalink: /getting_started/bc-architecture/
excerpt: "Province of BC's VON Eco-System"
last_modified_at: 2018-05-17T15:15:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

The Province of BC's VON ecosystem is summarized by the following network diagram, showing one instance of VON IVy (BC Registries) and an instance of TheOrgBook.

<figure>
  <img src="{{ '/assets/images/BC-Architecture.svg' | relative_url }}" alt="BC's VON EcoSystem ">
</figure>

BC Registries ([github repo](https://github.com/bcgov/von-bc-registries-agent)) is an instance of VON IVy that issues the foundational credentials for the BC instance of TheOrgBook. It's operation is relative simple:

> The `Registries Event Processor` monitors the BC Registries database for events - creation of, and updates to, organizational registrations. Each event is processed to determine if any Verifiable Credentials need to be issued. If so, Credential claims are assembled and passed (as JSON) to the BC Registries instance of IVy to formulate into a cryptographically signed Verifiable Credential and issued to TheOrgBook.

TheOrgBook ([github repo](https://github.com/bcgov/TheOrgBook)) receives credentials, inserts them it into it's VON-X (Hyperledger Indy) encrypted wallet and passes them to TheOrgBook API, where the claims from the credential are extracted and pushed into TheOrgBook Search Database based on mappings provided by the credential issuer. The SOLR search indices are updated to account for the new searchable data.

The BC deployments have been tuned to automatically scale to enable the rapid loading of current and historical registrations, currently supporting the issuance and loading of over 2600 Credentials per minute. The deployments likewise scale down to handle steady state workloads.

Deployment scripts are available for the components for OpenShift for Dev, Test and Production. Those scripts can be used as the basis for deploying comparable components in other environments.