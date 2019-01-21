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

While underlying VON is [blockchain/decentralized ledger technology (DLT)](https://bitsonblocks.net/2015/09/09/gentle-introduction-blockchain-technology/), it's not something we spend a lot of time talking about. More relevant is the digital identity capabilities that are enabled by the underlying decentralized technology.  This page covers the foundations of decentralized identity. Things like Self-Sovereign Identity (SSI), Decentralized IDentifiers (DIDs) and Verifiable Credentials (VCs), tools for using VCs, and the software upon which we're building VON.

The topics covered here go deep &mdash; there are links to lots of rabbit holes for you to explore. Follow the links to go as deep as you want on each. If you get really interested, the semi-annual conferences [Internet Identity Workshop (IIW)](https://www.internetidentityworkshop.com/) and [Rebooting the Web of Trust (RWoT)](https://www.weboftrust.info/) are probably for you. Check them out and think about participating!

# Self-Sovereign Identity

No - it's not about self-declaring yourself a sovereign country or self-issuing credentials and expecting others to accept them! Self-Sovereign Identity (SSI) is a term coined by [Christoper Allen in 2016](http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html) for enabling a person full control over the use of their own digital identity. This includes individuals holding their own private information and sharing that information to others only when necessary &mdash; a far cry from what we have today. [This article](https://bitsonblocks.net/2017/05/17/a-gentle-introduction-to-self-sovereign-identity/) is an excellent introduction to the concepts of Self-Sovereign Identity.

Self-Sovereign Identity is enabled by new technologies that have recently become available based on secure cryptography, including blockchain, Decentralized IDentifiers (DIDs) and Verifiable Credentials (VCs). That's what's covered in the next section.

# DIDs and VCs

VON is built on the cryptographic foundations of Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs), both of which are currently on a path to be W3C Standards ([DID](https://w3c-ccg.github.io/did-spec/), [VC](https://www.w3.org/2017/vc/WG/)).

DIDs are identifiers that are created by an entity (like you!), published (usually to a decentralized blockchain), and resolved (much like an HTTPS address) to a DID Document.  A DID Document (usually) contains a public key for the DID's controller and an address ("endpoint") that can be used to contact the DID's controller. So, what does that mean?  It allows someone that knows your DID to contact you (the controller of the DID) at the endpoint you provided in the DID Document and send you a message (data) encrypted with the public key you provided in the DID Document such that it can only be decrypted by you. And, if you know a DID for them, you can do the same. This enables secure messaging between two parties without a centralized authority - no email or SMS needed. That's pretty powerful! The W3C's [DID Primer](https://w3c-ccg.github.io/did-primer/) contains more information about DIDs.

While DIDs are interesting, it's that they enable the Verifiable Credentials (VCs) model that really makes VON possible. VCs are unforgeable digital versions of paper documents that you receive today - your driver's license, an organization's corporate papers, university transcripts, permits, licenses and more. As displayed in the W3C VC model below, VC's are issued by authoritative services (called Issuers), held by (usually) the subject of the VC (called Holders), and proven by the holder to those (called Verifiers) needing to proof of the claims within the VC. Note that the verifiers do not need to go to the original issuer to verify the information. That can be done using with information provided by the holder combined with information (in particular, public keys) provided by the Identity Registry, which is usually implemented as a public blockchain.

<figure>
  <img src="{{ '/assets/images/w3c-vc-model-mary.png' | relative_url }}" alt="The W3C Verifiable Credentials Model">
</figure>

When you, the holder of a VC, present to another entity (called the verifier) a "proof" based on data elements (claims) from a VC, the verifier can be confident the VC:

- was issued to you - the holder
- was issued by the designated issuer (they know the DID of the Issuer)
- has not been tampered with
- has not been revoked by the issuer since it was issued

If the verifier trusts the issuer, they can trust the information provided in the Proof without having to contact and check with the issuer. This is the digital equivalent of a person presenting a paper document about themselves, such as their Passport. If the Border Agent believes:

- the picture is on the passport is you (you are the holder),
- they recognize the country that issued the passport, and 
- the passport is legitimate (not forged or tampered with),
 
then they will accept as true the information on the passport. With a paper credential, the process is manual and carried out by (hopefully) trained individuals that know how to detect fraudulent documents. With a VC, the proof and verification process is based on the cryptographic elements of the claims presented in the proof, and information (in particular, public keys) retrieved from a public blockchain. Note that unlike a VC, in the paper-based process, the verifier can't tell if the document has been revoked. At least not without checking back with the issuer.

<figure>
  <img src="{{ '/assets/images/paper-verification.png' | relative_url }}" alt="The Paper Credential Verification Model">
</figure>

> Note: Sometimes the term "Verifiable Claims" is used in place of Verifiable Credentials. A "claim" is one of a set of data elements in a "credential". For example, "Name" and "Date of Birth" are claims on a Driver's Licence credential.

A good place to learn more about Verifiable Credentials is by looking through the VC W3C Working Group's [Use Cases document](https://www.w3.org/TR/verifiable-claims-use-cases/).

# Selective Disclosure and Zero Knowledge Proofs

Two really important elements of using Verifiable Credentials are selective disclosure and something called Zero Knowledge Proofs (ZKPs).

Selective disclosure means that when you present claims from a Verifiable Credential, you can disclose only some of the claims rather than the whole credential. This is an important privacy-preserving capability. A good example of this is going to a bar, where, to prove you are old enough to drink, today you must show your driver's licence. In fact, the bartender does not need to see all information on the Driver's Licence. All they need to see is who issued the licence (is it a real licence?), a picture of you (is it your licence?) and your date of birth (are you old enough?).  Everything else on the credential is not relevant to the bartender and so should not be provided. With some implementations of Verifiable Credentials - selective disclosure is not possible.

ZKPs use some tricky cryptographic techniques to take privacy a step beyond selective disclosure. A ZKP based on a Verifiable Credential enables the Holder to prove that something about a claim is true without disclosing the value of the claim. To demonstrate, let's extend our bartender example. With a ZKP the holder can prove they are older than the legal drinking age based on the date of birth claim in the credential, without disclosing their actual date of birth. That's pretty powerful! 

This picture combines selective disclosure and a ZKP being applied in a bar in the United States.

<figure>
  <img src="{{ '/assets/images/selective-disclosure-zkp.png' | relative_url }}" alt="Driver's licence selective disclosure and zero knowledge proof example">
</figure>

There are many potential uses for ZKPs in the way we do identity proofing today. For example, a rental car company could verify a person has a valid driver's licence, is old enough to rent a car, and has insurance without having to get the data from either document. This helps both the individual (their data is not spread out across the digital world) and the company (they don't have the liability of holding private data from individuals).

# Hyperledger Indy and the Sovrin Foundation

[Hyperledger Indy](https://www.hyperledger.org/projects/hyperledger-indy) is the decentralized identifier/verifiable credentials framework that we're using for the initial build out of VON. Indy is an open source project that is part of [Hyperledger](https://www.hyperledger.org/), a set of business blockchain frameworks and tools being developed under the umbrella of [The Linux Foundation](https://www.linuxfoundation.org/).

The [Sovrin Foundation](https://sovrin.org/) provides the governance, technical guidance and legal framework for the operation of a global instance of a Hyperledger Indy-based network. The nodes of the Sovrin Network are run by [Stewards](https://sovrin.org/stewards/), organizations from around the world that have agreed to adhere to the [Sovrin Governance Framework](https://sovrin.org/wp-content/uploads/2018/03/Sovrin-Provisional-Trust-Framework-2017-06-28.pdf). The Sovrin Network is the decentralized ledger (blockchain) that serves as the Identity Registry of the initial implementation of VON.

To summarize, the Sovrin network is the decentralized foundation of the initial implementation of VON, and the Sovrin Network is a global set of nodes all running instances of Hyperledger Indy software.
