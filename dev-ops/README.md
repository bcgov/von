# Rocket.Chat Integrations
The following section describes the VON environments and resources which are integrated with Rocket.Chat to provide feeds, notifications, and alerts.

Rocket.Chat instance(s):
  - https://chat.pathfinder.gov.bc.ca

## Backups
Notifications and alerts from backup-containers.

Channel:
  - von-backups
  
Integration Script:
  - https://github.com/BCDevOps/backup-container/blob/master/scripts/rocket.chat.integration.js

Environments:
  - [Verifiable Organizations Network (dev)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-von-dev)
  - [Verifiable Organizations Network (test)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-von-test)
  - [TheOrgBook-BC (dev)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-von-bc-tob-dev)
  - [TheOrgBook-BC (test)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-von-bc-tob-test)
  - [TheOrgBook-BC (prod)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-von-bc-tob-prod)
  - [Ontario's Verifiable Organizations (dev)](https://console.pathfinder.gov.bc.ca:8443/console/project/ontvon-von-dev)
  - [Ontario's Verifiable Organizations (test)](https://console.pathfinder.gov.bc.ca:8443/console/project/ontvon-von-test)
  - [Ontario's Verifiable Organizations (prod)](https://console.pathfinder.gov.bc.ca:8443/console/project/ontvon-von-prod)
  - [Ontario Registries Agent (dev)](https://console.pathfinder.gov.bc.ca:8443/console/project/ontvon-von-ont-registries-agent-dev)
  - [Ontario Registries Agent (test)](https://console.pathfinder.gov.bc.ca:8443/console/project/ontvon-von-ont-registries-agent-test)
  - [Ontario Registries Agent (prod)](https://console.pathfinder.gov.bc.ca:8443/console/project/ontvon-von-ont-registries-agent-prod)
  - [BC Registries Agent (prod)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-von-bc-registries-agent-prod)
  - [ESB-DRS (dev)](https://console.pathfinder.gov.bc.ca:8443/console/project/l4izby-dev)
  - [ESB-DRS (test)](https://console.pathfinder.gov.bc.ca:8443/console/project/l4izby-test)

## General Notifications
Notifications and alerts from agent services.

Channel:
  - von-notifications

Integration Script:
  - https://github.com/bcgov/von-bc-registries-agent/blob/master/scripts/rocket.chat.integration.js

Environments:
  - [BC Registries Agent (dev)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-von-bc-registries-agent-dev)
  - [BC Registries Agent (test)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-von-bc-registries-agent-test)
  - [BC Registries Agent (prod)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-von-bc-registries-agent-prod)
  - [BC Registries Agent (prod-tmp)](https://console.pathfinder.gov.bc.ca:8443/console/project/devex-bcgov-dap-dev)

## UptimeRobot
Notifications and alerts from UptimeRobot monitors

Channel:
  - von-uptime

Integration Script:
  - https://github.com/crazy-max/rocketchat-uptimerobot/blob/master/src/uptimerobot-incoming.js

Instructions:
  - [rocketchat-uptimerobot](https://github.com/crazy-max/rocketchat-uptimerobot)

Environments:
  - von-uptime alert contact in UptimeRobot.

## GitHub:
GitHub activity feed.

Channel:
  - von-github

Integration Script:
  - https://github.com/WadeBarnes/platform-services/blob/rocketchat-integration-scripts/apps/rocketchat/integration/scripts/github/rocket.chat.integration.js

Environments:
  - [TheOrgBook](https://github.com/bcgov/TheOrgBook)
  - [von](https://github.com/bcgov/von)
  - [aries-vcr](https://github.com/hyperledger/aries-vcr)
  - [von-network](https://github.com/bcgov/von-network)
  - [greenlight](https://github.com/bcgov/greenlight)
  - [von-x](https://github.com/PSPC-SPAC-buyandsell/von-x)
  - [http-did-auth-proxy](https://github.com/bcgov/http-did-auth-proxy)
  - [von-connector](https://github.com/bcgov/von-connector)
  - [did-auth-relying-party](https://github.com/bcgov/did-auth-relying-party)
  - [did-auth-extension](https://github.com/bcgov/did-auth-extension)
  - [von-agent-template](https://github.com/bcgov/von-agent-template)
  - [von-bc-registries-agent](https://github.com/bcgov/von-bc-registries-agent)
  - [von-ledger-explorer](https://github.com/bcgov/von-ledger-explorer)
  - [von-personal-agent](https://github.com/bcgov/von-personal-agent)
  - [indy-sdk](https://github.com/bcgov/indy-sdk)
  - [von_agent](https://github.com/bcgov/von_agent)
  - [VON-ESB-DRS-Agent](https://github.com/bcgov/VON-ESB-DRS-Agent)
  - [didauth](https://github.com/PSPC-SPAC-buyandsell/didauth)
  - [von-image](https://github.com/PSPC-SPAC-buyandsell/von-image)
  - [von_anchor](https://github.com/PSPC-SPAC-buyandsell/von_anchor)
  - [von_base](https://github.com/PSPC-SPAC-buyandsell/von_base)
  - [von_tails](https://github.com/PSPC-SPAC-buyandsell/von_tails)

Unused Environments:
  - [von_agent](https://github.com/PSPC-SPAC-buyandsell/von_agent) - was replaced by [von_anchor](https://github.com/PSPC-SPAC-buyandsell/von_anchor)
  - [von_connector](https://github.com/PSPC-SPAC-buyandsell/von_connector)
  - [von_conx](https://github.com/PSPC-SPAC-buyandsell/von_conx)

## DockerHub

Docker hub activity feed.

Channel:
  - von-images

Script:
  - https://github.com/PSPC-SPAC-buyandsell/von-image/tree/master/scripts/rocket.chat.integration.js

Environments:
  - [von-image](https://cloud.docker.com/u/bcgovimages/repository/docker/bcgovimages/von-image)