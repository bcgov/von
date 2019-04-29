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

In late March 2019, the VON team created [AgentBook](/news/2019-03-28-Global-Connection) to demonstrate the interoperability of independently created agents. These agents were able to successfully establish DID-based communication channels. Now, with **IIWBook** we've added a (literal) new layer by extending the core of AgentBook with the ability to exchange verifiable credentials. Even more exciting, through collaboration with StreetCred and Spark New Zealand, we  have a [mobile agent](/news/2019-04-03-Mobile-Agent) (or two!).

This IIWBook demo is one of the first examples of a full verifiable credential-based exchange where participants will be able to establish digital trust. This will be accomplished via two verifiable credential issuing services and the ability of participants to connect to each other, agent-to-agent, and request proofs based on the credentials they have received from these issuing services.

The following is a guide to get started with the IIWBook demo. Grab your IOS device (sorry Android users...soon!) and let's get started!
 
## Demonstration Overview
The goal of this demo is to show how Hyperledger Indy-based compatible agents can be used to:

* set up agent-to-agent communication
* verify and issue credentials
* send proofs
* establish connections between agents

A [credential](https://w3c.github.io/vc-data-model/#credentials) is a set of claims that refer to a qualification, achievement, personal quality, or aspect of an identity. Using a mobile agent called **Streetcred: Identity Agent** (Streetcred), you will collect credentials (in particular, your email and IIW attendance record) and then use these credentials to verify connections with others at the conference.

This demo steps you through the process of obtaining two credentials&mdash;that's pretty cool in itself. However, keep in mind that by obtaining verifiable credentials and establishing connections with your peers at the conference, you are demonstrating the power of self-sovereign identity. Your credentials prove things about you so others know for certain they are talking to you! Conversely, when you connect to others and they prove who they are, you can be certain they are who they say they are. That is powerful.

The following illustration shows the process involved in obtaining verifiable credentials from the two services (Email Verification Services and IIWBook) built for this demo. The two services  are typical enterprise-style applications but in addition, they each have their own agent and a public [DID](https://w3c-ccg.github.io/did-spec/), which enables them to issue verifiable credentials. 

![IIWDemo - How it all works]({{ '/assets/images/IIWDemoScreenShots/IIWDemo_Howitworks.png' | relative_url }}){: .align-center}

## TL;DR

1. On an IOS device, join the Streetcred agent Beta program: [https://testflight.apple.com/join/CX48LTno](https://testflight.apple.com/join/CX48LTno)
2. Get an email address verifiable credential: [https://email-verification.vonx.io](https://email-verification.vonx.io)
3. Get an IIW attendee verifiable credential: [https://iiwbook.vonx.io](https://iiwbook.vonx.io)
4. Use Streetcred to connect with other compatible agents, and after connecting, request verification claims. Refer to these [instructions](#connecting-to-peers).

## Installing Streetcred and Creating Your Agent

To get started, you'll need a compatible agent. For these instructions, you'll need to get the beta Streetcred mobile agent for IOS. It's possible that other agents could be used for this demonstration, but we'll only cover Streetcred here.

1. Go to the following URL and download/install the Streetcred app onto your IOS phone or tablet from Apple's beta testing service:
[https://testflight.apple.com/join/CX48LTno](https://testflight.apple.com/join/CX48LTno)

    >**NOTE:** *Streetcred currently works with IOS devices only.*

    >**NOTE:** *Testflight is Apple’s Beta testing mechanism. If you don't have it,  you'll be prompted to download it first.*

2. Open Streetcred.

    The first time you run Streetcred you will be asked to setup a few things to get started.

3. Click **Create My Agent** and follow the prompts.

    ![You're All Set]({{ '/assets/images/IIWDemoScreenShots/IIWStreetcred_allset.png' | relative_url }}){: .align-center}

 4. Click **Continue**.

Here's what the various tabs in Streetcred are for:

![Streetcred Tabs]({{ '/assets/images/IIWDemoScreenShots/IIW_Streetcred_icons.png' | relative_url }}){: .align-center}

## Getting Your Email Credential

With Streetcred up and running, the next thing you'll do is get your email verifiable credential. 

To do this:

1. In a browser, go to the following URL, read the instructions, input your email address and click **Submit**. 
 
    [https://email-verification.vonx.io](https://email-verification.vonx.io)

      ![Email Verification]({{ '/assets/images/IIWDemoScreenShots/IIW_email_verification.png' | relative_url }}){: .align-center}

      You will receive an email from `noreply@gov.bc.ca` with an embedded one-time use link back to the Email Verification Service.

2. Click on the link provided in the email. This does two things:
   * Opens up a page on the Email Verification site with an invitation (in various forms) to connect to the Email Verification Service's agent.
   * Proves to the Email Verification Service that the current user controls the email address to which the message was sent.

    >**NOTE:** *The latter point is important&mdash;this is the basis for the verifiable credential that the service will issue to the agent that connects to it via the invitation.*

    The following window is displayed:

    ![Get Verified]({{ '/assets/images/IIWDemoScreenShots/IIW_getverified_email.png' | relative_url }}){: .align-center}

3. Use one of the invitations:
   * If the invitation is on your IOS device, click the link to open Streetcred.
   * If the invitation is on a desktop device, use your Streetcred app to scan the QR code.
   * If you are using some other agent, copy the invitation and paste as appropriate into that agent.

    In the Streetcred app the following window is displayed:

    ![Accept Connection]({{ '/assets/images/IIWDemoScreenShots/IIW_accept_connection.png' | relative_url }}){: .align-center}

4. Click **Accept** to complete the connection.

    You will receive a notification&mdash;the Email Verification Service has sent you an offer for a verifiable credential!

5. Click **Accept Offer**.

6. Click the **Credentials** icon to see your email credential. It might take a few moments to arrive.

Whoohoo!! You have your first verifiable credential and you can prove ownership of your email address whenever it's needed.

## Getting Your IIW Attendance Credential

You have been issued one credential&mdash;let's use it to get another. This credential is only for attendees of IIW 28, so you'll have to provide a verified email address that will be checked against the IIW 28 attendee list. Meet both of these requirements and you'll get your IIW attendee credential.

1. In a browser, go to IIWBook: [https://iiwbook.vonx.io](https://iiwbook.vonx.io).

2. Click **Connect to IIWBook**.

3. As you did with the Email Verification Service, scan the QR code, click the link, or copy the invitation.

4. In Streetcred, click **Accept**.

    ![Connect in StreetCred]({{ '/assets/images/IIWDemoScreenShots/IIW_invite_to_connect.png' | relative_url }}){: .align-center}

    You will receive a new notification. Before you can be issued your attendance credential, you must present proof of your email  credential.

    ![Presentation Request]({{ '/assets/images/IIWDemoScreenShots/IIW_request_for_proof.png' | relative_url }}){: .align-center}

5. Click **Present Proof**.

Now there's a wait. To respect the consent you provided in signing up for IIW, a staff member authorized to see the attendee list will manually verify your attendance at IIW based on your email address. Once that human step is complete, you will be issued an IIW attendance credential that includes your name&mdash;or not, if you are not registered using that email address.

If you are issued an IIW attendee verifiable credential, you will get a notification in Streetcred with the credential offer&mdash; just like when you received your verified email credential.

## Connecting to Peers

Now that you have both of your foundational credentials (email and IIW attendance), you can establish nearby connections with others at the conference and use those credentials to prove claims about yourself&mdash;as well as verify the claims of others.

Here's how:

1. Click **Nearby**.
   
      Nearby devices will be displayed.
2. Select the device to which you want to connect and click **Invite**.
3. The person you invite will be asked to confirm that they want to connect.

>**NOTE:** *The Nearby feature may or may not work&mdash;beta and all. If it doesn't work, follow these steps (we've got you covered!*)

If **Nearby** doesn't work:

1. Click **Connections**.
2. Click **+**.
3. Click **Create Invitation**.

    Have your contact scan the QR code provided or send it to them using messaging or email. 

4. Click **Connect** to accept.

    > **NOTE:** *You are connected but not verified.* 

## Verifying Connections

You have a new connection, but do you really know who it is? To be sure, you should verify the connection by asking for verifiable claims. 

Here's how:

1. Click on **Verifications** under the name of the person with whom you are connecting.
2. Click on the pencil icon (top right).
3. Select the information you would like to request from this connection (for example, Name and Email).
4. Click **Request Presentation**.  

Once your connection has presented proof of the claims you requested, the claims will be listed under the verifications for that contact.

If the claims you get back aren't what you expect, you should delete the connection.