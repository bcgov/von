---
title: "Tracking Issues, Epics and Sprints"
permalink: /how_to/tracking-issues/
excerpt: "How and why we use ZenHub for VON Issue, Sprint and Epic Tracking."
last_modified_at: 2019-01-21T17:00:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

## Using ZenHub for VON Project Tracking

The VON Project uses [ZenHub](https://www.zenhub.com/) for Agile Project Tracking. Our [ZenHub Board](https://app.zenhub.com/workspace/o/bcgov/von/boards?repos=98577443,104127743,113071139,126396819&showPRs=false&showClosed=false).

The remainder of the document covers some of the key features that are found in ZenHub that influenced our decision to use it, and some guidance on how we are using ZenHub for VON.

## Key Features in ZenHub for VON

These are the features that pushed us to use ZenHub. These features were either missing or sadly lacking in GitHub Projects.

* Multi-repo board
    * Currently only for a single organization, but it's possible to add repos from other organizations.
    * For now, we are just using the "von" repo as the catch-all for cross project issues, and "OrgBook", "dFLow" and "von-bc-registries-agent"
* Create/Manage issues from the Board or in GitHub directly
* ZenHub adds a description to issues vs. just a timeline of comments.
* Sprint tracking through the use of multi-repo "Milestones"
* Good filtering support for focusing on issues
* Advanced abilities - Move issues between repos, issues dependencies, bulk updates, estimating, Slack Integration and reporting.

## Tips and Tricks For Using ZenHub

### ZenHub Web App and Chrome Extension

ZenHub has a [Web/Mobile App](https://app.zenhub.com) for using ZenHub Kanban boards, and [Chrome and Firefox Extensions](https://www.zenhub.com/extension) that add ZenHub functionality directly to GitHub. With the Browser extensions, a "ZenHub" menu item is added to the top of each main repo page, and the Issue editing page is dynamically extended with ZenHub data and functionality.

The only oddity with the two mechanisms is evidently some advanced functionality is only available in the Extension - for example, moving issues from one repo to another. I've found Googling "zenhub" and a needed feature tells me if the feature exists and if it is limited to the Extension.

### Creating Issues From ZenHub

The ZenHub Board has a "New Issue +" button in the top corner. Just clicking the "New Issue" button will allow you to create a new issue (doh!) that is in the "von" project - which may not be what you want. I suggest clicking the "+" part of the button to make sure you are creating the issue in the right repo. As a bonus - there are other things that you create in the "+" drop down.

### Issues, Epics and Milestones, Oh My!

This topic is covered well in the [ZenHub Getting Started Guide](https://www.zenhub.com/guides#getting-started), but for a quick summary, here is how the concepts of GitHub Issues and Milestones, and ZenHub Epics are related:

Epics and Issues are, in agile terms, User Stories. Epics are User Stories that are very large and need to be broken down into individual stories. For example, "As a Business Owner I need a way to get the Permits and Licenses so that I can Open My Business", is an Epic that can contain a number of smaller Issue user stories (e.g. "Display a map of the needed Permits and Licenses"). User stories can be broken down further into Checklists within an Issue. Epics are a ZenHub concept that allow for a hierarchy of Epics and Issues. They are implemented as special tags associated with GitHub Issues.

Milestones are used to track a set of work to be done in a time-boxed period - e.g. a Sprint. In GitHub, Milestones are repo specific. ZenHub adds the capability to manage a single Milestone across multiple repos - creating, editing and closing a Milestone such that it is identical in each repo associated with the Board.

The key point? Epics and Issues are connected to related functionality, while Milestones are issues related by time.

Note that ZenHub supports converting Issues to Epics and vice versa. However, connections between Epics and the Issues they contain are lost when going back and forth.

### Issue Dependencies

ZenHub supports the creation of dependencies between Issues, allowing for the tracking of "Blocking" and "Is Blocked By" relationships between issues.

### The ZenHub VON Pipeline

The VON Pipeline is the same as the default ZenHub pipeline. During a sprint, the active lists are "Sprint Backlog", "In Progress", "Review/QA", and "Done". At the end of a Sprint, Issues will be moved to Closed as appropriate. New Issues are created in the "New Issues" status (unless the status is explicitly set during creation) and should be moved as soon as possible to an appropriate status.  The "Icebox" status is used for backlog issues that are worth keeping, but that aren't a current priority. Those issues should only be looked at by the Product Owner from time to time - once every few sprints. At that time, the Product Owner might move the issue to "Backlog" for discussion during the next Sprint Review.

There are several benefits to the ZenHub approach:

* ZenHub has a "collapse list" feature that allows you to show/hide lists really easily.
* It's easy to filter on Milestones so that we can still easily see the work accomplished in each Sprint.

As noted, ZenHub has a "collapse list" features that allows for toggling between showing and hiding the issues within a list. As well, using the Board configuration capability (left menu "Boards", settings gear icon) you can show or hide the "Closed" list.

### Advanced Issues

ZenHub adds a some advanced features that we may or may not use, including Story Point estimates and reporting. As we evolve our use of ZenHub, we may decide to use those capabilities to increase project predictability at the cost of some spending time doing creating the estimates.

## What's Not In GitHub Projects

For completion and future reference, here are a list of things that I found were going to be challenging in trying to use GitHub Projects:

* To create a multi-repo project, you need to do it at the Organization level, and automatically include all of the repos in the Organization. For BCGov, that's several hundred repos.
* Adding existing issues and pull requests to the Project board is a typing-intensive filtering task that in BC Gov cannot happen automatically, because the issues and pull requests of *ALL* BC Gov repos would be automatically added to the Board.
* Plain GitHub Issues do not have a "Description" field that is pinned to the top of the issue, just a timeline of comments.
    * ZenHub adds a Description field which should be updated as the definition of the issue changes - eliminating the need to go through all comments to mentally assemble the current definition of the issue.
* Project-tracking leads need to be GitHub admins of all of the repos so that new participants can be added to the each repo.
* Milestones are per repo and cannot be managed across repos.
    * ZenHub uses GitHub Milestones, but allows you to operate on the Milestones for multiple repo with a single update.
* Filtering is difficult, requiring a lot of typing (e.g. "assignee:swcurran") and memorizing and typing things like repo names and user's GitHub handles.
* No ability to archive issues or lists and no easy way to hide them on the Kanban board.