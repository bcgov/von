---
title: "Collaborating on VON via chat"
permalink: /how_to/von-chat/
excerpt: "Collaborating on the VON Project using Rocketchat."
last_modified_at: 2019-07-24T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

Want to join us online as we work on VON?  If so, please join the discussions we are having on the BC Gov rocketchat instance. It's pretty straight forward, but please read all of this document as there are some bumps in the road to joining.

## Joining the BC Gov rocketchat

The rocketchat instance uses IDir for BC Gov folks and GitHub with two-factor authentication (2FA) for external (non-BC Gov) user authentication. Unfortunately, the current (July 2019) Mac and PC rocketchat desktop clients and our server setup have an [issue](https://github.com/RocketChat/Rocket.Chat.Electron/issues/1163) that prevents adding 2FA servers to the client. Once the server is added, all is good, but adding the server requires downgrading the desktop client, adding the server and then upgrading the desktop client back to the current version. Painful, we know.  We strongly recommend that when first joining the server you use the rocketchat web client, and, ff you don't use rocketchat elsewhere, you might want to just stick with the web client.

### First Connection

To join the instance:

- If you have an IDir, you can go to [https://chat.pathfinder.gov.bc.ca](https://chat.pathfinder.gov.bc.ca).
- If you don't have an IDir (and have no clue what that is), you will need to send one of us the email address associated with your GitHub account so that we can send you an invitation to join.
  - If the invitation fails it will likely be because you gave us an email that is **not** associated with a GitHub account, **OR** you waited too long to process the invitation and it expired. Please figure out which occurred, contact us again, and we'll send you out another invitation.

### Using a desktop rocketchat client

If you want to use the native rocketchat client, process the invitation with the web client and then do the following:

 1. Install (or downgrade to) rocketchat [2.14.7](https://github.com/RocketChat/Rocket.Chat.Electron/releases/tag/2.14.7). Ideally, you can use brew (Mac) or chocolatey (Windows) to handle the downgrade.
 2. Add the BC Government RocketChat instance [https://chat.pathfinder.gov.bc.ca](https://chat.pathfinder.gov.bc.ca) to your rocketchat client.
 3. Once you have successfully connected, update rocketchat to the latest version and you should be good to go..

Another option that we've been successful with is to use an application bundler such [Station](https://getstation.com/) for rocketchat. It uses the rocketchat web client, but makes it act more like the native client. With Station you add rocketchat servers as generic web applications. There are a number of other Station-like applications out there.

If you get to this point, you are home free.  The rest of the steps are easy...

## Leave *devops and *labops Channels

The Pathfinder rocketchat instance automatically adds new subscribers to a series of channels. If you are a non-BC Gov user, you will want to leave those channels. Mouse over the channel, click the "triple dot" menu and select "Leave Room" for each of:

* devops-\*
* labops-\*
* general
* kudos
* random
* rocketchat-help

## Join von-* public channels and direct message

Use the search icon above the (possibly empty) channel list to search for the `von-` public channels and join at least the `von-general` channel. Once you join `von-general`, please announce yourself with a quick "hello". We need that so we can add you to any private channels that you should be a part of.

You can also search for other folks on the extended VON team and start direct messaging them.

That should be it - you are good to go!
