---
title: "A Guide to the Safe Entry BC Demo"
permalink: /safeentry/guide/
excerpt: "Navigate the Safe Entry BC Demo"
last_modified_at: 2020-04-27T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

This is a guide for navigating the [SafeEntryBC](/safeentry/) prototype demo for each of the [three participants](/safeentry/participants) in the Safe Entry BC scenario. 

Note that this is just a prototype and the two web sites in the demo ([Essential Services Gateway](https://esg.vonx.io) and [SafeEntryBC](https://safeentrybc.vonx.io)) are static&mdash;the data remains the same regardless of what you do. However, all of the credential issuer and proof/verification events are live, using three independently-developed, full Hyperledger Aries-based verifiable credential exchange implementations.

This is a three part demo, with each part covered in a section below.

## Part 1: An Owner, Registers their Organization and Invites Employees

1. As an owner of an essential service organization, you begin the process by going to the new [Essential Services Gateway](https://esg.vonx.io) and clicking the link to register your company as a provider of an essential service.
2. Follow the steps to get ready to register your company with as an essential service:
    1. Click "Instructions" and follow the guidance to get your digital wallet. In this demo, you'll use the same wallet for all the participants. Make sure you follow the instructions to properly configure the wallet.
    2. Get your `Unverified Person` credential, which is used in the demo as an alternative to a government issued `Verified Person` credential.
    3. Click on the link to begin the process of registering your company and inviting employees.
2. The Add Organization page demonstrates some of the steps in designating your business as an essential service&mdash;identifying the legal name of your organization and selecting the essential services provided by the organization.
    1. Click `Save and Continue` when you have finished exploring the page to go to the main page for the organization. 
4. From here you can update the information about the organization and manage the list of employees.
5. Click the `Add Employee` button to add a new employee. Although inactive here, the `Add Employees` button might be used to bulk add a set of employees.
6. Review the (static) information on the page and click the `Send Invitation` button.

At this point we leave the role of the organization owner, and transition to that of the employee/representative of the organization. Each registered employee will have their own page on the service.

**Note**: A large organization may choose to host their own essential services credential issuer application instead of adding all their employees to the Essential Services Gateway. We won't go into the details here, but while the registration process for such a setup is quite different, the result is the same: the employees of the organization have credentials from an accepted essential services issuer.

## Part 2: An Employee, collecting needed credentials

Employees/representatives of the organization start their registration process when they receive an invitation email (from the last step of the Owner process, above).

1. Read through the sample message before skipping down to the bottom of the email and click on the link to accept the invitation.
2. The page that comes up is the employee page. The first thing that an employee must do is get an "Essential Service" credential for the organization(s) to which they belong.
    1. Click on the `Essential Service` button for "ABC Cleaners, Inc."
    2. Scan the QR code using your Digital Wallet app and follow the instructions to get the credential.
    3. After getting the credential, click the "TBD" link and close the tab to go back to the Essential Services Gateway.
4. Next, we'll get an Essential Services Authorization. That is a credential requested by an employee to give them authorizations to go to a location to deliver services.
    1. Click the "Add" button in the Essential Services Authorizations part of the screen.
    2. Repeat the steps above to get the credential and return to this page.
5. You now have all the credentials needed to gain access to the LNG Pipeline Camp SafeEntryBC location. Follow the instructions [here](#using-safeentrybc-points) to give it a try. C'mon back here when you are done.
6. Essential Service providers may require credentials from other issuers to do their job. Click on the `From Other Issuers` button to:
    1. Use your (un)Verified Person credential to get a credential with your Personal Health Number (PHN) issued by the Ministry of Health.
    2. Use your (un)Verified Person, PHN and Essential Service provider credentials to get a credential with the results of a COVID-19 you were given.
7. You now have all the credentials needed to gain access to the Long Term Care Facility SafeEntryBC location. Follow the instructions [here](#using-safeentrybc-points) to give it a try. Once again, come back here when you are done.

That completes the Essential Service provider part of the prototype. On to the last step&mdash;the owner/manager of a controlled-access point that wants to have a way to learn necessary information about indivduals trying to gain access.

## Part 3: The Owner/Manager of a controlled-access location

A person wanting to configure a SafeEntryBC request for credentials will start by navigating in a browser to the SafeEntryBC site at: [https://safeentrybc.vonx.io/](https://safeentrybc.vonx.io/). Once there, follow these steps:

1. On the welcome page, you can skip the first two steps (getting a digital wallet and a "Verified Person" credential as you should have already done that) and go straight to the 3rd step&mdash;creating safe entry points.
2. You are taken to a screen where you can fill in the details of your first safe entry point. Add:
    1. The name of the facility, the name of the initial safe entry point and the address of the facility.
    2. Select from the pre-set list the credentials (and specific fields within those credentials) you want proven before granting access to the safe entry point.
    3. Click `Save and Continue` to save your changes and go to your list of safe entry points.
3. The "Safe Entry Points" screen is the main page for a SafeEntryBC user. It presents the list of configured safe entry points, with the ability to add new entries and modify the existing ones.
    1. The "Add Administrator" button is inactive, but is intended to be a way to grant someone else access to your list, so they can manage it if you are not available.
4. For each safe entry point, you can use the "QR Code" button to see, print and try out the entry point. All the QR Codes in the demo currently go to the same place&mdash;the one for the Long Term Care Facility you've seen before.

That's it! A (pretty) simple app that allows anyone to create a custom access control point.

## Using SafeEntryBC Points

Using the SafeEntryBC sites triggers a flow that starts like when you collect a credential, you see a QR Code. Once deployed, the QR Code might be on a screen or simply printed on a piece of paper and displayed on the wall. You can try out either of these entry points:

- Travelling into an [LNG Pipeline Camp](https://lngpipeline-camp.vonx.io/authorize) in Northern BC
- Entering a [Long Term Care Facility](https://long-term-care-facility.vonx.io/authorize)

Scan the QR code with your mobile wallet, and respond to the request to present your credentials. Once you have presented your credentials, you will see a split screens that shows:

- On the left side, what you (the essential services provider) while you wait for access and,
- On the rights side, what the "gatekeeper" at the safe entry point would see.
  - Click "Accept" or "Reject" to see what happens with the request.

Note that in this demo, the gatekeeper sees a lot of information, but that won't be the same everywhere. The information collected and displayed is configurable per entry point. Further, SafeEntryBC can make use of zero-knowledge proofs and selective disclosure to minimize the amount of information seen at the gate.
