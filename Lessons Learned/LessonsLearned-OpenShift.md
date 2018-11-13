# Lessons Learned Deploying a Sample Hyperledger Indy Network into OpenShift

## The main friction points:
* systemd on Ubuntu 16.04
* expected permissions for running sovrin-node.service
* best practices for running containers on OpenShift.

## Solution

Based on what we learned (documented below) we punted on deploying the indy-node network in OpenShift and deployed it on Digital Ocean instead.  The deciding factor was firewall challenges - we couldn't access the ports we needed to in OpenShift. For awhile we had to kludge the ports to ones that were open outbound in OpenShift, but we now have the outbound ports open. However, we still don't have inbound, and so cannot host an indy-node ledger inside OpenShift.  Which is fine...

The rest of the document covers other challenges encountered and some feedback received from Sovrin.

## Details:
* Best practice in OpenShift states containers should not run as root, but as an arbitrary user.
* The indy-node-service runs as 'indy' and it's very particular about the permissions set on all of the configuration, transaction files, certificates and keys.
* systemd on Ubuntu, in practice and from what I've found on the web, seems to be somewhat broken.
    * Following the steps and examples I've found to launch it using an arbitrary user account leave the container in a state where systemd seems to be running, but the sovrin-node service is not running and it is difficult to determine the state of the systemd services as (even with sudo installed) systemctl is left non-functional.
    * Attempts to fix the systemctl accessibility issue, using examples and references, have been unsuccessful.
	
## Current State:

Details of the current state of development can be found here; [sovrin-environments/openshift/](https://github.com/WadeBarnes/sovrin-environments/tree/OpenShift/openshift)

_To summarize, it's a mostly working work in progress, that is being shelved for the moment at least._

## Related Discussions:

_A summary of discussions Trev Harmon (sovrin operations), Wade Barnes, John Jordan._

**Q:**
_Is there a way for the sovrin nodes and network to be more dynamic? Are they able to perform discovery?_

**A:**
The simple answer to this is that we don’t want the Sovrin network’s trust being rooted in the DNS system. So, this was a conscious decision to require IP addresses instead of allowing DNS-based names. This also makes the pool immune from DNS poisoning or DNS DDOS attacks like the one we saw last November that made many of the major Internet sites unreachable.

**Q:**
_How, in the real world, would a sovrin network be configured, and how would a sovrin client/agent discover the resulting network?_

**A:**
The design of the sovrin network is based on IP addresses. Validator nodes communicate with each other using static IP addresses, as do all agents. This information is written to the ledger. It can be updated via a ledger transaction, but this requires consensus of the other validators, which makes doing a wholesale swap impractical.

In a real-world system, the validators are required by the framework to have static, publicly-routable IP addresses in order to be part of the network. Other agents are initially bootstrapped via the genesis transaction files, allows them to communicate with the network, which provides the current list of validators and their contact IP addresses to the agents.

Individual agent’s IP addresses can be discovered by making a call to the ledger where they are recorded as part of their record.
