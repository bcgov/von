---
title: "Verifiable Credentials&mdash;A Quick Overview"
permalink: /safeentry/vcs/
excerpt: "Navigate the Safe Entry BC Demo"
last_modified_at: 2020-04-27T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: false
toc_sticky: false
---

The following is a brief overview of the technology underlying [SafeEntryBC](/safeentry/)&mdash;Verifiable Credentials. In reading this, think of the process you went through to get an official government document, like a drivers license.

* Authoritative issuers go through a process to decide who should be issued a credential and what data should be put into their credential.
* Once issued, the holder puts the credential in their digital wallet, usually an app on their phone. The credential is stored by the holder in their wallet, not in a service in the cloud.
* When needed, a verifier can request presentation of certain claims (data elements) from one or more credentials.
* The holder can present a proof containing the requested claims to a verifier, entirely independent of the issuers.
* At a technical level, the verifier knows (with even more certainty) the same things that they are supposed to learn by looking at a paper credential:
  * Who issued the credential
  * That the credential was issued to the person presenting the proof
  * That the credential was not tampered with or forged
  * That the credential has not been revoked by the issuer
* At a human level, the verifier will decide based on their knowledge of the issuer if they should trust the data.

That last part is crucial. If the proof passes the technical verification process, the verifier doesn't have to worry about whether they trust the person *presenting* the data. What they have to decide is whether they trust the *issuer* of the data. If a person is presenting a valid "COVID-19 Test Negative" credential, did that credential come from a trusted, certified medical testing lab known to the verifier, or not. If not, the credential must not be accepted.

For SafeEntryBC, the set of trusted issuers is limited and known. If the presentation of data from a service provider is made available to the "gatekeeper", the set of issuers will have already been verified.

Learn more about verifiable credentials [from the standards organization W3C](https://w3c.github.io/vc-data-model/).
