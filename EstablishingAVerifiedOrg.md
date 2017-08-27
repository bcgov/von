# Establishing a Verified Organization

## The Mechanics and Data Flow

## What is a Verified Organization, and Why it Matters

A Verified Organization (VO) in the context of this project is an Organization that has been verified by the BC Registry as a legal organization operating in British Columbia and has received a digital claim to that affect from the BC Registry that can be subsequently used to carry out digital transactions with other organizations participating in the network. Thus, the claim received from the BC Registry provides a local, trusted cornerstone to drive BC's digital economy. The mechanisms for receiving and using the claim from the BC Registry are global in nature, enabling a received claim to be unambiguous in it's origin but up to the receiver to evaluate it's trustworthiness.

In looking at how a VO is managed in this environment, we also need to look at how the principals behind the organization interact with each other, with the VO and with the entity with which they are carrying out digital transactions. This includes the BC Registry, but also other organizations such as Government procurement management operations.

## What We’ll Cover

Our goal is to introduce you to many of the concepts of VO, and give you some idea of what happens behind the scenes to make it all work.

We are going to frame the exploration with a story. Loren is the President and Founder of a new fictional technology start-up Modern IT System (MITSys) in Victoria, BC. As part of the start-up of MITSys, she needs to register with BC Registry to get a Business Number in BC, and at the same time, get a digital credential for MITSys that can be used by MITSys to participate in BC's Digital Economy. Travis joins Loren at MITSys as VP of Business Development, and his first focus is on creating contracting vehicles for MITSys to be hired by the Governments of BC and Canada.

The sorts of identity and trust interactions required to pull this off are messy in the world today; they are slow, they violate privacy, and they are susceptible to fraud. We’ll show you how VOs are a quantum leap forward.

Ready?

## Loren Creates Her Self-Sovereign Identity

As part of the process for starting up MITSys, Loren joins a Self-Sovereign Identity (SSI) network and begins to create her own digital identity. She chooses to use [Sovrin](sovrin.org) to establish her digital identity, and walks through scenarios such as those outlined in this document [Getting Started With Sovrin](https://github.com/hyperledger-archives/indy-client/blob/master/getting-started.md) to build up a set of connections and claims associated her personal identity.

## Loren Creates a Self-Sovereign Identity for MITSys

To establish a digital identity for MITSys, Loren needs to start by creating a digital identity for the organization that will hold onto the connections and claims for MITSys. While Loren's personal connections and claims will always be managed by Loren herself, the connections and claims of MITSys will be managed by multiple people over the "digital life" of the organization, as company officers and employees come and go, and as the company evolves (mergers, acquisitions, restructurings, etc.).

To manage the Digital Identity for MITSys, Loren signs up with an online Sovrin-connected SSI Agency that operates cloud-based Agent software to hold the digital identity of MITSys (note - MITSys could find and self-host their own Agent software). The Agency establishes the MITSys Agent and establishes a secure, digital connection between Loren's digital identity and the MITSys agent.  The connection implements a secure connection between Loren and the Agent such that Loren can carry out the same actions for MITSys that she can perform with her own digital ID. She will use this capability to, for example, create a connection between MITSys and the BC Registry.

**Question**: Is this how Sovrin (et al) expect an organization to be controlled?
**Question**: What would the risks be in setting up an organizational identity in this way?

## Loren Registers MITSys with BC Registry

Loren has done the preliminary work to establish MITSys - setup banking, worked with a lawyer on documents of incorporation and is now ready to register the company. To start the process, she logs into the BC Registry site and clicks a link to establish a digital connection BC Registry and MITSys. The link opens her Sovrin identity app, and she redirects her client app to use the MITSys Agent to process the invitation. **Question: Is this possible?**. She uses the MITSys Agent to review the invitation and since she knows it is from a trusted source, accepts it.

Loren continues with the online (and possibly offline) processes to register MITSys with BC Registry. Once completed, BC Registry notifies Loren that she has a digital claim available for MITSys about the registry of the VO, including various information that BC Registry recorded about the organization. Loren initiates (via the Agent) a request for the claim and BC Registry provides that claim to MITSys.

**Question**: Could there be claims provided by BC Registry related to entity "roles" they provide in using their system?
**Question**: Could wallets in the Agent be used to manage access to the roles - e.g. role claims are put into wallets, people are given access to specific wallets?  Note - for that to work, the same claim would likely be needed in separate wallets.  Is that technically possible?

## Loren Delegates Authority over the MITSys Digital Identity to Travis

Travis has joined MITSys as VP of Business Development. Loren would like Travis to register MITSys as a supplier to the Government of BC's Developer Exchange (DevEx). Travis will need to use the claim that MITSys has from the BC Registry to register with DevEx. So Loren needs to delegate authority to Travis to use the MITSys agent. To do that:

1. Travis creates his on digital identity, just as Loren established hers.
2. Loren provides Travis with a URL for accessing the MITSys Agent to request a delegation of authority.
3. Travis accesses the MITSys Agent and makes the request.
4. The MITSys Agent contacts Loren (via her digital identify app) to approve the request and indicates Travis can use the MITSys Agent, but cannot Delegate Authority to others.
5. Loren approves the request and the MITSys Agent in turn establishes a digital connection from Travis.

This gives Travis the ability to use the MITSys Agent, but not to delegate authority for access to the MITSys Identity to others.

**Question**: This implies a Sovrin Client app can understand the concept of a delegation of authority connection.
**Note**: The "cannot Delegate Authority to others" implies that there is some concept of roles within the operation of the Agent itself. I would assume that revocation would be a role.  I would also assume the Agent would be capable of implementing partnership policies, such as only taking actions when there is a quorum approving the action.

## Travis registers MITSys with BC DevEx

Travis accesses the DevEx supplier registration WebSite. He goes through a similar initial sequence as Loren did at BC Registry - clicks a link to initiate a connection with DevEx, reviewing the connection and accepting it. Once the connection is established, Travis clicks another link to pull down a **proof request** from DevEx that is part of the registration process. On loading the proof request (using the MITSys Agent - not his identity), the Agent determines that much of the information needed is contained in the claim received from BC Registry. Travis links the proof and claim data, and submits a response to the proof request. The BC Registry application (itself an Agent - at the Enterprise level) reviews the application, automatically verifies the response and the source of the verified data and acccepts the response. MITSys is registered with DevEx! DevEx provides MITSys with a claim that can be used on other sites to verify the supplier relationship from MITSys and DevEx.

Travis continues with the registration process, providing upon request additional self-verified information (such as the UNSPCS codes that define the type of work done by MITSys). These claims are retained by the Agent for future use.

**Question**: Is this a proper use of an Agent, or would this just be entered directly on the DevEx site?  To do this, DevEx would have to provide list-of-values for selection, and the Agent would have to be able to provide a sufficient User Interface to support display, selection and search.

## Travis registers MITSys with the Government of Canada's (GC) Supplier Registration Information (SRI) System

For now - assume the process is approximately the same as DevEx, but that the UNSPCS information is also sent via a claim.
