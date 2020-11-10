---
title: "Chat Server Authorization Demo"
permalink: /chatdemo
excerpt: "A simple demonstration of getting and using a verifiable credential for authorization to access a chat."
last_modified_at: 2020-11-09T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

In this demo, you will get a verifiable credential from a quasi-official (PoC), or completely unofficial, identity credential issuer service
and then use that credential to access a protected chat service.

There are three steps to the demo:

1. Get a wallet app for your mobile phone.
2. Get a "(Un)Verified Person" verifiable credential from an identity credential issuing service.
3. Use that verifiable credential to access a chat server.

There are a couple of sources of the "(Un)Verified Person" credential and the demo varies a bit based on which issuer you use, as the details below outline.

## Get a Wallet App

Use [these instructions](/getwallet) to get a compatible Wallet app from one of the vendors providing wallets in this space.

When setting up the wallet, make sure that you set the network (aka the ledger) to be using "Sovrin Staging".

## Get an (Un)Verified Person Credential

There are two sources for the credential you need.

1. You might be invited by a Provincial identity leader to get a "Verified Person" credential from a proof-of-concept issuer operated by that Province. BC,
Quebec, Ontario and Nova Scotia have stood up such
issuers as of the time of writing.

2. If you haven't been invited to get a Verified Person
credential, you can get an Unverified Person credential from [this issuer](https://openvp-issuer.pathfinder.gov.bc.ca/). With
an Unverified Person, you make up the data for the credential.  It's **VERY** unofficial!

## Access the chat service

There are two chat services you can access, depending on whether you are holding in your wallet a Verified Person credential from one
of the Provincial PoC issuers, or you have an Unverified Person credential.

- For Verfied Person, use [https://pctftest.vonx.io](https://pctftest.vonx.io)
- For Unverfied Person, use [https://pctftest-test.vonx.io](https://pctftest-test.vonx.io)

Both services will require you present a credential, but the "production" chat (without "-test" in the URL) only lets those with a Verified Person credential access the service.

Once you have connected to the chat service, please leave a message or two, perhaps sharing what wallet app you are using and how you came to be trying this demo.
