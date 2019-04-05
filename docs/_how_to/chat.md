---
title: "Collaborating on VON via chat"
permalink: /how_to/von-chat/
excerpt: "Collaborating on the VON Project using Rocketchat."
last_modified_at: 2019-04-05T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

Want to join us online as we work on VON?  If so, please join the discussions we are having on rocketchat. If you are with BC Gov, you can just go to [https://chat.pathfinder.gov.bc.ca](https://chat.pathfinder.gov.bc.ca). If not, let us know and we'll send you an invitation to join using your github credentials. The rocketchat instance is hosted by BC Gov, and there are a couple of things that you need to know as you join.

## Downgrade rocketchat to add server

The rocketchat instance uses github for external (non-BC Gov) user authentication and uses two-factor authentication (2FA). Unfortunately, the current (April 2019) Mac and PC rocketchat desktop clients and our server setup have an [issue](https://github.com/RocketChat/Rocket.Chat.Electron/issues/1163) that prevents adding 2FA servers to the client. Once the server is added, all is good, but adding the server requires downgrading the desktop client, adding the server and then upgrading the client back to the current version. Painful, we know... Here's what you do:

 1. Install rocketchat [2.14.7](https://github.com/RocketChat/Rocket.Chat.Electron/releases/tag/2.14.7) in place of the default version. Ideally, you can use brew (Mac) or chocolatey (Windows) to handle the downgrade.
 2. Add https://chat.pathfinder.gov.bc.ca to your rocketchat client
 3. Update rocketchat to the latest version in the app.

## Leave *devops and *labops Channels

The Pathfinder rocketchat instance automatically adds new subscribers to a series of channels. If you are a non-BC Gov user, you will want to leave those channels. Mouse over the channel, click the "triple dot" menu and select "Leave Room" for each of:

* devops-\*
* labops-\*
* general
* kudos
* random
* rocketchat-help

## Join von-* public channels and direct message

Use the search icon above the (possibly empty) channel list to search for the `von-` public channels and join at least the `von-general` channel. Once you join `von-general`, please announce yourself with a quick "hello". We need that so we can add you to any private channels that you need to be a part of.

You can also search for other folks on the extended VON team and start direct messaging them.

That should be it - you are good to go!