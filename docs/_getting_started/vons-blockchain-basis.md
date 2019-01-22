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

While underlying VON is [blockchain/decentralized ledger technology (DLT)](https://bitsonblocks.net/2015/09/09/gentle-introduction-blockchain-technology/), it's not something we spend a lot of time talking about. More relevant is the digital identity capabilities that are enabled by the underlying decentralized technology.  This page covers the foundations of decentralized identity. Things such as self-sovereign identity (SSI), decentralized identifiers (DIDs) and verifiable credentials (VCs), tools for using VCs, and the software upon which we're building VON.

The topics covered here go deep&mdash;there are links to lots of rabbit holes for you to explore. Follow the links to go as deep as you want on each. If you get really interested, the semi-annual conferences [Internet Identity Workshop (IIW)](https://www.internetidentityworkshop.com/) and [Rebooting the Web of Trust (RWoT)](https://www.weboftrust.info/) are probably for you. Check them out and think about participating!

# Self-Sovereign Identity

No&mdash;it's not about self-declaring yourself a sovereign country or self-issuing credentials and demanding others accept them! Self-sovereign identity (SSI) is a term coined by [Christoper Allen in 2016](http://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html) about enabling a person to have full control over the use of their own digital identity. This includes individuals holding their own private information and sharing that information to others only when necessary&mdash;a far cry from what we have today. [This article](https://bitsonblocks.net/2017/05/17/a-gentle-introduction-to-self-sovereign-identity/) is an excellent introduction to the concepts of SSI.

SSI is enabled by technologies that have recently become available based on secure cryptography, including blockchain, decentralized identifiers (DIDs) and verifiable credentials (VCs).

# DIDs and VCs

VON is built on the cryptographic foundations of decentralized identifiers (DIDs) and verifiable credentials (VCs), both of which are currently on a path to becoming W3C Standards ([DID](https://w3c-ccg.github.io/did-spec/), [VC](https://www.w3.org/2017/vc/WG/)).

DIDs are identifiers that are created by an entity (like you!), published (usually to a decentralized blockchain), and resolved (much like an HTTPS address) to a DID document (DIDDoc).  A DIDDoc is a JSON document that (usually) contains a public key for the DID's controller and an address ("endpoint") that can be used to contact the DID's controller. So, what does that mean? It means someone that knows your DID will know how to contact you (the controller of the DID) using the endpoint you provided in the DIDDoc and can send you a message (or any data) encrypted using the public key you provided in the DIDDoc. That message can only be decrypted by you, since you control the private key associated with the public key. And, if you know a DID for them, you can do the same. This enables peer-to-peer, secure messaging between two parties without a centralized authority - no phone number, email or SMS needed. That's pretty powerful! The W3C's [DID Primer](https://w3c-ccg.github.io/did-primer/) contains more information about DIDs.

While DIDs are interesting, it's that they enable the VC model that really makes VON possible. VCs are unforgeable digital versions of paper documents that you receive today: your driver's license, an organization's corporate papers, university transcripts, permits, licenses and more. As displayed in the W3C VC model below, VCs are issued by authoritative services (called issuers), held by (usually) the subject of the VC (called holders), and proven by the holder to those (called verifiers) requesting proof of the claims within VCs. Importantly, in this model verifiers do not need to go to the original issuer to verify the information. That can be done using the proof provided by the holder combined with globally-available information (in particular, public cryptographic keys) provided by an identity registry, which is usually implemented as a public blockchain.

<figure>
  <img src="{{ '/assets/images/w3c-vc-model-mary.png' | relative_url }}" alt="The W3C Verifiable Credentials Model">
</figure>

When you, the holder of a VC, present to another entity (the verifier) a proof based on data elements (claims) from a VC, the verifier can be confident the claims:

- were issued to you - the holder
- were issued by the designated issuer (they know the issuer's DID)
- have not been tampered with
- have not been revoked by the issuer

If the verifier trusts the issuer, they can trust the information provided in the proof without having to contact and check with that issuer. This is the digital equivalent of a person presenting a paper document about themselves, such as their passport. In that scenario, if the border agent believes:

- the picture on the passport is you (that you are the holder)
- they recognize the country that issued the passport
- the passport is legitimate (not forged or tampered with)
 
then they will accept as true the information on the passport. With a paper credential, the process is manual and carried out by (hopefully) trained individuals that know how to detect fraudulent documents. With a VC, the proof and verification process is based on the cryptographic elements of the claims presented in the proof, and information (in particular, public keys) retrieved from a public blockchain. Note that unlike a VC, in the paper-based process, the verifier can't tell if the document has been revoked. At least not without checking back with the issuer.

<figure>
  <img src="{{ '/assets/images/paper-verification.png' | relative_url }}" alt="The Paper Credential Verification Model">
</figure>

> Note: Sometimes the term "verifiable claims" is used in place of verifiable credentials. A "claim" is one of a set of data elements in a credential. For example, name and date of birth are claims in a driver's licence credential.

A good place to learn more about VCs is by looking through the VC W3C Working Group's [Use Cases document](https://www.w3.org/TR/verifiable-claims-use-cases/).

# Selective Disclosure and Zero Knowledge Proofs

Two really important elements of using VCs are selective disclosure and something called a [zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof) (ZKP).

Selective disclosure means that when you present claims from a Verifiable Credential, you can disclose only some of the claims rather than the whole credential. This is an important privacy-preserving capability. A good example of this is going to a bar, where, to prove you are old enough to drink, today you must show your driver's licence. In fact, the bartender does not need to see all information on the driver's licence. All they need to see is who issued the licence (is it a real licence?), a picture of you (is it your licence?) and your date of birth (are you old enough?).  Everything else on the credential is not relevant to the situation and so should not be provided. With some implementations of Verifiable Credentials - selective disclosure is not possible.

ZKPs use some tricky cryptographic techniques to take privacy a step beyond selective disclosure. A ZKP based on a VC enables the holder to prove that something about a claim is true without disclosing the value of the claim. To demonstrate, let's extend our bartender example. With a ZKP, the holder can prove they are older than the legal drinking age based on the date of birth claim in the credential, without disclosing their actual date of birth. That's pretty powerful! 

This picture combines selective disclosure and a ZKP being applied in a bar in the United States.

<figure>
  <img src="{{ '/assets/images/selective-disclosure-zkp.png' | relative_url }}" alt="Driver's licence selective disclosure and zero knowledge proof example">
</figure>

There are many potential uses for ZKPs in the way we do identity proofing today. For example, a rental car company could verify a person has a valid driver's licence, is old enough to rent a car, and has insurance, all without having to get the data from either document. This helps both the individual (their data is not spread out across the digital world) and the company (they don't have the liability of holding private data from individuals).

# Hyperledger Indy and the Sovrin Foundation

[Hyperledger Indy](https://www.hyperledger.org/projects/hyperledger-indy) is the decentralized identifier/verifiable credentials framework that we're using for the initial build out of VON. Indy is an open source project that is part of [Hyperledger](https://www.hyperledger.org/), a set of business blockchain frameworks and tools being developed under the umbrella of [The Linux Foundation](https://www.linuxfoundation.org/).

The [Sovrin Foundation](https://sovrin.org/) provides the governance, technical guidance and legal framework for the operation of a global instance of a Hyperledger Indy-based network. The nodes of the Sovrin Network are run by [stewards](https://sovrin.org/stewards/), organizations from around the world that have agreed to adhere to the [Sovrin Governance Framework](https://sovrin.org/wp-content/uploads/2018/03/Sovrin-Provisional-Trust-Framework-2017-06-28.pdf). The Sovrin Network is the decentralized ledger (blockchain) that serves as the identity registry for the initial implementation of VON.

To summarize, the Sovrin network is the decentralized foundation of the initial implementation of VON, and the Sovrin Network is a global set of nodes all running instances of Hyperledger Indy software.
