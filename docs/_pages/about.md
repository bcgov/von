---
permalink: /about/
title: "About Verifiable Organizations Network"
excerpt: "About Verifiable Organizations Network - what we've started and where we're going"
last_modified_at: 2018-05-28T12:00:00-07:00
toc: true
toc_sticky: true
---
# Quick Start: Webinar

> To see and hear about what we are building, [watch this webinar](https://bc-von.s3.amazonaws.com/2018-06-VON-Webinar-for-Sovrin-Indy-Community.mp4) by John Jordan of the BC Government about TheOrgBook and Verifiable Organizations Network.

# Background - Adding Trust to the Internet

Our goal with the VON project is to enable Organizations - and the people running those organizations - to conduct business online in a trusted manner. The core challenge is that on the Internet we can't tell if we're talking to you, or someone pretending to be you. We need a reliable way to verify that "you are you" in a manner appropriate for the type of transaction that you want to complete and in a privacy-preserving manner. The imposter problem is made worse by the rise in cyber-hacks that expose user's personal data that might otherwise be useful in proving identity. With all of the data about you "in the wild", we need new approaches to verifying that you have the authority to conduct an online transaction.

Putting Internet users - and organizations - in control of their own online Identity has been a growing need since the start of the Internet. With the creation of massive centralized stores of private data (e.g. Equifax, Google, Facebook, etc.), has grown the ability for holders of that data to use (and misuse) that data in ways that are not always in the best interest of the data owner - You. As we move forward in with identity, we also want to put you in control of where and how your data is used.

The goals of trusted identity and control over your data has created an urgency to change how our data - data we (should) own - is handled. [Self-Sovereign Identity](https://bitsonblocks.net/2017/05/17/a-gentle-introduction-to-self-sovereign-identity/) (SSI) is a promising approach to decentralize the handling of personal data that gives the control of that data back to us, where it belongs. SSI further enables a higher level of trust on the Internet by providing mechanisms that enable verifiable identification of parties to a transaction, reducing the need for high-cost, in person mechanisms to establish trust. With SSI, people can't pretend to be you simply be showing that know things about you.

The Verifiable Organization Network (VON) project is particularly interested in bootstrapping the trust attribute of the SSI approach. We aim to create a trusted digital network of verifiable data about organizations which is globally connected, interoperable, secure, and easy to join. We believe the novel capabilities of distributed ledger based Self-Sovereign Identity ecosystems to provide increased levels of trust for online transactions will foster economic activity for BC companies locally and across the globe.

## Our first step - Creating a Network Effect

We recognize there is an immediate problem in creating VON - a network of [Verifiable Credential](https://w3c.github.io/vc-data-model/) Issuers/Verifiers and Holders - organizations. The chicken-and-egg challenge is a lack of Services (for example, government organizations) issuing Verifiable Credentials about organizations, and a lack of organizations with the ability to hold Verifiable Credentials about themselves. To bootstrap VON we are using strategies suggested in this excellent [presentation](https://a16z.com/2016/03/07/all-about-network-effects/) by the venture capital firm [Andreessen Horowitz](https://a16z.com) on building network effects. A network effect is needed when a product or service becomes more valuable to its users only when there enough people they know using it. This effect has been observed in any successful communications network from the telephones to Facebook.

The particular strategy we are putting into action is similar to the one which was deployed by Facebook. [TheFaceBook](http://www.thecrimson.com/article/2004/2/9/hundreds-register-for-new-facebook-website/) at Harvard used a very clever network effect to bootstrap the new world of Social Networks. Mark Zuckerberg pre-loaded TheFacebook with accounts that provided a core of users with one common attribute - they went to Harvard. This one step triggered a network effect, magnifying the subsequent actions of users and resulting in the ever-faster growth of TheFaceBook's, and ultimately, Facebook's, social network. Without seeding the network, that growth may not have come.

We're trying to use VON's ["TheOrgBook"](https://theorgbook.pathfinder.gov.bc.ca) to generate that same network effect for building organizational Self-Sovereign Identities and the use of [Verifiable Credentials](https://w3c.github.io/webpayments-ig/VCTF/charter/faq.html).

## Triggering Network Effects for the VON

The challenge in creating an Organizational SSI network is:

* **Supply:** Services don't support Verifiable Credentials because there are no Organizations with their own SSI Digital Agents.
* **Demand:** Organizations don't have a need for their own SSI Digital Agents because there are no Services that support Verifiable Credentials.

The BC Government can't directly influence the demand side. However, as a major supplier of Credentials (registrations, licenses, permits, etc.) to organizations, BC can enhance government services to drive the supply side. TheOrgBook gives government services a place to issue public Verifiable Credentials and from which to receive proofs of Verifiable Claims - without needing Organizations to have their own Agents and Wallets.

Here's a simple picture of the system:

![](https://github.com/bcgov/TheOrgBook/raw/master/docs/assets/images/TheOrgBook-HighLevel2.png)

> That picture is from our first presentation deck about VON. Quaint, don't you think? In the presentation, the images moved. Wow.

* The desks represent government services that organizations use to register their business and apply for permits and licenses
  * The services use instances of [VON-IVy](https://github.com/bcgov/von-agent-template) to Issue Credentials and Verify Claims.
* TheOrgBook is a repository of the public Credentials generated by those Services
  * Credentials are equivalent to the "Permit to Operate" documents posted on businesses' walls
  * TheOrgBook's repository of public Credentials is web-searchable, listing organizations, Credentials and Credential details (claims)
* The Identity Registry Network underlies the system to infuse trust
  * a decentralized Self-Sovereign Identity network based on distributed ledger technology

As an organization goes through online processes to acquire Registrations/Licenses/Permits, the services get proofs (and their associated data) from Verifiable Credentials already stored in TheOrgBook. Once the service completes the approval process and decides to issue a Registration/Licence/Permit, they can issue the public Verifiable Credential digitally to TheOrgBook about the organization.

- This saves the users from having to re-type the information for each service (and eliminates typos in the data)
- Each service can trust the information because it comes from a trusted source - cryptographically proving:
  - The information was issued by the Issuer
  - The information was issued to TheOrgBook
  - The information has not been tampered with (was not forged)
  - The information has not been revoked

## The Code

All of the code related to VON is Open Source and found on [GitHub](https://github.com/topics/verifiable-organizations-network). To learn more about the VON Components, check out [this section]({{ "/getting_started/von-overview/" | relative_url }}) of this site.

## Want to know more?

A detailed document about our first demonstration project can be found [here](https://docs.google.com/document/d/1wNnXdQKUtWnx--xw3VQ9Fr2TDa0kUNIBSMmFGR4uoMg/edit?usp=sharing).

## Want to help?

Fork the code, get in touch and let's build this together.