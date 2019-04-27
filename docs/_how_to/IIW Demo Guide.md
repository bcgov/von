---
permalink: /how_to/iiwbook
title:  "The VON IIW 28 Demonstration: IIWBook"
header:
  teaser: "assets/images/Teal_Background.png"
last_modified_at: 2019-04-26T18:15:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
tags:
  - indy
  - von
---

## INTRODUCTION

In late March 2019, the VON Team created [AgentBook](/news/2019-03-28-Global-Connection) to demonstrate the interoperability of independently created agents to connect and communicate. Now, with **IIWBook** we've added a (literal) new layer by extending the core of AgentBook to include a [mobile agent](/news/2019-04-03-Mobile-Agent) (or two!) and the exchange of verifiable credentials, including the issuing of some foundational identity credentials from and the proving of possession of those credentials. By requiring proof of claims, the trust of agent-to-agent connections can be elevated&mdash;a person controlling the agent will know things about the controller of another agent based on what others are will to attest to about that identity.

The following is a guide to get started with the IIWBook demo. Grab your IOS device (sorry Android users...soon!) and let's get started!
 
## Demonstration Overview
The goal of this demo is to show how Hyperledger Indy-based compatible agents can be used to:

* set up agent-to-agent communication
* verify and issue credentials
* send proofs
* establish connections between agents

A [credential](https://w3c.github.io/vc-data-model/#credentials) is a set of claims that refer to a qualification, achievement, personal quality, or aspect of an identity. Using a mobile agent called **Streetcred: Identity Agent** (Streetcred), you will collect credentials (in particular, your email and IIW attendance record) and then use these credentials to verify connections with others at the conference&mdash;refer to the following illustration.

![IIWDemo - How it all works]({{ '/assets/images/IIWDemoScreenShots/IIWDemo_Howitworks.png' | relative_url }}){: .align-center}

The two services (Email Verification Services and IIWBook) are typical enterprise-style applications but ones with their own agents controlled via business rules to interact with other agents.

## TL;DR

1. On an IOS device, join the Streetcred agent Beta program: [https://testflight.apple.com/join/CX48LTno](https://testflight.apple.com/join/CX48LTno)
2. Get an email address verifiable credential: [https://email-verification.vonx.io](https://email-verification.vonx.io)
3. Get an IIW attendee verifiable credential: [https://iiwbook.vonx.io](https://iiwbook.vonx.io)
4. Use Streetcred to onnect with other compatible agents and after connecting request verification claims.
   1. Go to the details of a connection.
   2. Click on "Verifications"
   3. Click on ...

## Installing Streetcred and Creating Your Agent

To get started, you'll need a compatible agent. For these instructions, you'll need to get the beta Streetcred mobile agent for IOS. It's possible that other agents could be used for this demonstration, but we'll only cover Streetcred here.

1. Go to the following URL and download/install the Streetcred app onto your IOS phone or tablet from Apple's beta testing service:
[https://testflight.apple.com/join/CX48LTno](https://testflight.apple.com/join/CX48LTno)

>**NOTE:** *Streetcred currently works with IOS devices only.*

>**NOTE:** *Testflight is Apple’s Beta testing mechanism.*

2. Open Streetcred.

The first time you run Streetcred you will be asked to setup a few things to get started.

1. Click **Create My Agent** and follow the prompts.

![You're All Set]({{ '/assets/images/IIWDemoScreenShots/IIWStreetcred_allset.png' | relative_url }}){: .align-center}

 1. Click **Continue**.

Here's what the various tabs in Streetcred are for:

![Streetcred Tabs]({{ '/assets/images/IIWDemoScreenShots/IIW_Streetcred_icons.png' | relative_url }}){: .align-center}

## Getting Your EMail Credential

With Streetcred up and running, the next thing you'll do is get your email verifiable credential. 

To do this:

1. In a browser, go to the following URL, read the instructions, input your email address and click **Submit** [https://email-verification.vonx.io](https://email-verification.vonx.io)

![Email Verification]({{ '/assets/images/IIWDemoScreenShots/IIW_email_verification.png' | relative_url }}){: .align-center}

You will receive an email from `noreply@gov.bc.ca` with an embedded one-time use link back to the Email Verification Service.

1. Click on the link provided. This does three things:
   1. Opens up a page on the Email Verification Site with an invitation (in various forms) to connect to the Email Verification Service's agent.
   2. Proves to the Email Verification Service that the current user controls the email address to which the message was sent.

The latter point is important - this is the basis for the verifiable credential that the Service will issue to the agent that connects to it via the invitation.

The following window is displayed:

![Get Verified]({{ '/assets/images/IIWDemoScreenShots/IIW_getverified_email.png' | relative_url }}){: .align-center}

1. Use one of the invitations:
   1. If you are on your IOS device, click the link to open Streetcred.
   2. If you are on a desktop computer, use your Streetcred app to scan the QR code.
   3. If you are using some other agent, copy the invitation and paste as appropriate into that agent.

In the Streetcred app following window is displayed:

![Accept Connection]({{ '/assets/images/IIWDemoScreenShots/IIW_accept_connection.png' | relative_url }}){: .align-center}

1. Click **Accept** to complete the connection.

You will (soon) notice that you have a new notification$mdash;the Email Verification Service has sent you an offer for a verifiable credential!

1. Click **Accept Offer**.

2. Click the **Credentials** icon to see your email credential. It might take a few moments to arrive.

Whoohoo!! You have your first verifiable credential and you can prove ownership of your email address whenever you need to.

## Getting Your IIW Attendance Credential

You have been issued one credential&mdash;let's use it to get another. This credential is only for attendees of IIW 28, so you'll have to provide a verified email address that will be checked against the IIW 28 attendee list. Meet both of those requirements and you'll get your IIW attendee credential.

1. In a browser, go to IIWBook: [https://iiwbook.vonx.io](https://iiwbook.vonx.io)

The following window is displayed:

![IIWBook Connection]({{ '/assets/images/IIWDemoScreenShots/IIWBookConnect.png' | relative_url }}){: .align-center}

1. Click **Get Invitation**.

The following window is displayed:
![Invitation to Connect to IIWBook]({{ '/assets/images/IIWDemoScreenShots/IIW_connect_to_our_service.png' | relative_url }}){: .align-center}

1. As you did with the Email Verification Service, scan the QR code, click the link, or copy the invitation.
   
2. Is Streetcred, click **Accept**.

![Connect in StreetCred]({{ '/assets/images/IIWDemoScreenShots/IIW_invite_to_connect.png' | relative_url }}){: .align-center}

You will (soon) notice that you have a new notification. Before you can be issued your attendance credential, you must present proof of your email address credential.

![Presentation Request]({{ '/assets/images/IIWDemoScreenShots/IIW_request_for_proof.png' | relative_url }}){: .align-center}

1. Click **Present Proof**.

Now there's a wait. To respect the consent you provided in signing up for IIW, an staff member authorized to to see the attendee list will manually verify your attendance at IIW based on your email address. Once that human step is complete, you will be issued an IIW attendance credential that includes your name. Or not, if you are not registered using that email address.

If you are issued an IIW attendee verifiable credential, you will get a notification in Streetcred with the credential offer - just like when you received your verified email credential.

## Verifying Connections

Now that you have both of your foundational credentials (email and IIW attendance), as you establish nearby connections with others at the conference and use those credentials to prove claims about yourself, and you can verify the claims of others.

Here's how:

1. Click **Nearby**.
2. 

## Connecting with More IIW Attendees

Here's how:

1. Go to the following URL:

I'd