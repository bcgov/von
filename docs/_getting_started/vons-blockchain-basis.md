---
title: "VON's Blockchain Basis"
permalink: /getting_started/vons-blockchain-basis/
excerpt: "The Blockchain/Decentralized Identity technology that is the basis of VON."
last_modified_at: 2018-11-10T15:15:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

While underlying VON is [blockchain/decentralized ledger technology (DLT)](https://bitsonblocks.net/2015/09/09/gentle-introduction-blockchain-technology/), it's not something we spend a lot of time talking about. More relevant is the digital identity capabilities that are enabled by the underlying decentralized technology.  This page covers the foundations of decentralized identity - things like Self-Sovereign Identity (SSI), Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs), tools for using VCs and the software upon which we're building VON.

The topics covered here go deep - there are links to lots of rabbit holes for you to explore. Follow the links to go as deep as you want on each. If you get really interested, the semi-annual conferences - the [Internet Identity Workshop (IIW)](https://www.internetidentityworkshop.com/) and [Rebooting the Web of Trust (RWoT)](https://www.weboftrust.info/) are probably for you. Check them out and think about participating!

# Self-Sovereign Identity

No - it's not about self-declaring yourself a sovereign country or self-issuing credentials and expecting others to accept them! Self-Sovereign Identity is a term coined by [Christoper Allen in 2016](http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html) for enabling a person full control over the use of their own digital identity. This includes individuals holding their own private information and sharing that information to others only when necessary - a far cry from what we have today. [This article](https://bitsonblocks.net/2017/05/17/a-gentle-introduction-to-self-sovereign-identity/) is an excellent introduction to the concepts of Self-Sovereign Identity.

Self-Sovereign Identity is enabled by new technologies that have recently become available based on secure cryptography, including blockchain, Decentralized IDentifiers (DIDs) and Verifiable Credentials (VCs). That's what's covered in the next section.

# DIDs and VCs

VON is built on the cryptographic foundations of Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs) - both of which are currently on a path to be W3C Standards ([DID](https://w3c-ccg.github.io/did-spec/), [VC](https://www.w3.org/2017/vc/WG/)).

DIDs are identifiers that created by an entity (like you!), published (usually to a decentralized blockchain), and then can be resolved (much like an HTTPS address) to a DID Document that (usually) contains a public key for the DID's creator and an address ("endpoint") that can be used to contact the DID's creator. So, what does that mean?  It allows someone that knows your DID to contact you (the endpoint) and send you a message (data) encrypted with your public key such that only you can decrypt. And if you know a DID for them - you can do the same - enabling secure messaging between two parties without a centralized authority - no email or SMS needed. That's pretty powerful! The W3C's [DID Primer](https://w3c-ccg.github.io/did-primer/) contains more information about DIDs.

While DIDs are interesting, it's that they enable the Verifiable Credetials (VCs) model that really makes VON possible. VCs are unforgeable digital versions of paper documents that you receive today - your driver's license, organization's registration papers, university transcripts, permits, licenses and more. When you - the holder of a VC - present a "proof" based on a VC to another entity, the Verifier can be confident:

- The VC was issued to you - the Holder
- The VC was issued by the designated Issuer (they know the DID of the Issuer)
- The VC has not been tampered with
- The VC has not been revoked by the Issuer since it was issued

If the Verifier trusts the Issuer, they can trust the information provided in the Proof - without having to check with the Issuer. This is the digital version of a person presenting a paper document about themselves - for example, their Passport at a border. If the Border Agent believes the document is valid (not forged or tampered with), they recognize the Country that issued the document, and believe the picture is on the passport is you (you are the Holder), then they can accept the information on the document. Note that unlike a Verifiable Credential, in the paper version, they can't tell if the document has been revoked - at least not without checking back with the Issuer.

> Note: Sometimes the term "Verifiable Claims" is used in place of Verifiable Credentials. A "claim" is one of a set of data elements in a "credential". For example, "Name" and "Date of Birth" are claims on a Driver's Licence credential.

A good place to learn more about Verifiable Credentials is by looking through the VC W3C Working Group's [Use Cases document](https://www.w3.org/TR/verifiable-claims-use-cases/).

# Selective Disclosure and Zero Knowledge Proofs

Two really important elements of using Verifiable Credentials are selective disclosure and something called "Zero Knowledge Proofs".

Selective disclosure means that when you present claims from a Verifiable Credential, you can disclose only some of the claims, rather than the whole credential. This is a very important privacy preserving capability. A good example of this is going to a bar, where, to prove you are old enough to drink, you must show your Driver's Licence. In fact, the bartender does not need to see all of the information on the Driver's Licence. In fact, all they need to see are - the Issuer (is it a real licence?), a picture of you (is it your licence?) and your Date of Birth (are you old enough?).  Everything else on the Credential is not relevant to the Bar and so should not be displayed to them. With some implementations of Verifiable Credentials - selective disclosure is possible.

A Zero Knowledge Proof (ZKP) uses some tricky cryptographic techniques to take privacy a step beyond selective disclosure. A ZKP based on a Verifiable Credential enables the Holder to prove that something about a claim is true without disclosing the value of the claim. To take our "old enough to drink" example, with a ZKP, the Holder can prove they are older than the legal drinking age based on the Date of Birth claim without disclosing the Holder's actual Date of Birth.  That's pretty powerful. There are many potential uses for ZKPs in the way we do identity proofing today. For example, a Rental Car Company can verify a person has a valid driver's licence and insurance without having to get the data from either document. This helps both the individual (their data is not spread out across the digital world) and the company (they don't have the liability of holding private data from individuals).

# Hyperledger Indy and the Sovrin Foundation

[Hyperledger Indy](https://www.hyperledger.org/projects/hyperledger-indy) is the decentralized identifier/verifiable credentials framework that we're using for the initial build out of VON. Indy is an open source project that is part of [Hyperledger](https://www.hyperledger.org/) - a set of business blockchain frameworks and tools being developed under the umbrella of [The Linux Foundation](https://www.linuxfoundation.org/).

The [Sovrin Foundation](https://sovrin.org/) provides the governance, technical guidance and legal framework for the operation of a global instance of a Hyperledger Indy-based network. The nodes of the Sovrin Network are run by "[Stewards](https://sovrin.org/stewards/)", organizations from around the world that have agreed to adhere to the [Sovrin Governance Framework](https://sovrin.org/wp-content/uploads/2018/03/Sovrin-Provisional-Trust-Framework-2017-06-28.pdf). The Sovrin Network is the decentralized ledger (blockchain) that serves as the anchor of this first instance of VON.

To summarize - the Sovrin network is the decentralized foundation of the initial implementation of VON, and the Sovrin Network is a global set of nodes all running instances of Hyperledger Indy software.
