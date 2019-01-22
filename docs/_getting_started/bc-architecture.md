---
title: "BC's VON Architecture"
permalink: /getting_started/bc-architecture/
excerpt: "Province of BC's VON Eco-System"
last_modified_at: 2019-01-21T15:15:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

The Province of BC's VON ecosystem is summarized by the following network diagram, showing one instance of VON Issuer/Verifier Agent (BC Registries) and an instance of OrgBook.

<figure>
  <img src="{{ '/assets/images/BC-Architecture.svg' | relative_url }}" alt="BC's VON EcoSystem ">
</figure>

BC Registries ([github repo](https://github.com/bcgov/von-bc-registries-agent)) is an instance of VON issuer/verifier agent that issues the foundational credentials for the BC instance of OrgBook. It's operation is relatively simple:

> The `Registries Event Processor` monitors the BC Registries database for events - creation of, and updates to, organizational registrations. Each event is processed to determine if any vervifiable credentials need to be issued. If so, claims (registration data for the organization) are assembled and passed (as JSON) to the BC Registries' VON issuer/verifier agent which formulates the data into a Hyperledger Indy-format verifiable credential that is issued to the BC OrgBook instance.

OrgBook ([github repo](https://github.com/bcgov/TheOrgBook)) receives the verifiable credentials from VON issuer/verifier agents (such as BC Registry's agent), inserts them it into its Hyperledger Indy-format digital wallet and passes the claims from the credential to the OrgBook Application Programming Interface (API). The claims are pushed into the OrgBook's Search Database based on mappings provided by the credential issuer. [SOLR](http://lucene.apache.org/solr/) search indices are updated to include the data from the newly issued credential, making them available to site users.

The BC deployment has been tuned to automatically scale to enable the rapid loading of current and historical registrations. The current deployment supports the issuance and loading of over 2600 Verifiable Credentials per minute. The deployment likewise scales down to handle steady state workloads.

Docker and OpenShift deployment scripts are available for all components, including OpenShift scripts supporting Dev, Test and Production variants. Those scripts can be used as the basis for deploying in similar Kubernetes- or Docker-based environments.