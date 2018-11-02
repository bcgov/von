---
title: "Updating VON Project Documentation"
permalink: /how_to/updating-docs/
excerpt: "Using Jekyll to update the VON Project Documentation."
last_modified_at: 2018-05-28T17:00:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

Follow the guidance here if you are interested in updating the documents that make up this site.  Like all of the work we're doing on VON, this documentation is open source and developed collaboratively.

## Prerequisites - what you need to know

This documentation is all maintained in the [VON github repo](https://github.com/bcgov/von) in a series of [markdown](https://kramdown.gettalong.org/quickref.html) pages and published using [Jekyll](https://jekyllrb.com/) to [github-pages](https://pages.github.com/).

That means to help out with this you need to know the following:

* About using git and github for forking, cloning, committing and submitting pull requests.
* If you are on Windows, using git bash as your command line (and using a command line in general). There is a [Udemy course](https://www.udemy.com/git-bash/) about git bash if you need to learn more.
* Using markdown to create and update documents with an editor such as [Microsoft's Visual Studio Code](https://code.visualstudio.com/)
* Some other prerequisites covered below.

## Getting Started - Fork/Clone the VON Repo

To be able to edit the pages that make up this site:

* Fork the VON repo - [https://github.com/bcgov/von](https://github.com/bcgov/von)
* Clone your fork locally so it is on your local system.

## Viewing the Jekyll site locally

To view the Jekyll site as you make edits, follow these steps. Note that the first step references a multi-step process, but you only need to complete the "Requirements" section.  The rest of the steps cover creating a new github-pages site, but you don't have to do that - you have this one.

* Run just the [Requirements](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) section from this page.
* In a bash terminal session, go to the "docs" directory of your local clone of the von repo.
* To prepare your machine, run the command: ```bundle install```
  * The command _should_ complete without errors. If you do get some errors, you will need to do some googling to figure out what's wrong on your machine. You will get frustrated...
* To view the site, run the command: ```bundle exec jekyll server --incremental```

The site should be running, and you can access it at: [http://localhost:4000/von/](http://localhost:4000/von/)

When you return to make more changes to the site you just need to run the last command - the ```bundle exec...``` command.

From time to time, you should run the command: ```bundle update```
  * This updates the libraries that jekyll is using to run the site, and they ~~change~~ improve over time.

## Editing Pages

To edit a page on the site, look for an appropriately named .md (markdown) file in the ```/docs/``` directory in the von repo. A couple of the site pages are in that directory, while others are in sub-folders for the different sections - ```_getting_started/```, ```_how_to/```, ```_pages/``` and ```_posts/```. Find the page you want to update, edit it and view the site locally (see previous section) to view the changes.

You should be using a good text editor that gives you a preview of your markdown as you type, allowing you to correct most typos and layout issues as you go.

If you are running the local viewer process (see steps above), when you save the change in your text editor you will be able to refresh the corresponding localhost page and see your changes.

## Adding Pages

If you want to add a new page, you will have to learn more about using Jekyll and the theme we are using for the site (currently [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)) as you may have to make multiple updates.

Alternatively:

* You can ask someone that knows how to create the page for you, and you can then add the content, or
* You can create the page with the content and ask someone that knows how to link the page into the rest of the site.

## Pushing your changes to github

Once you have made the changes you want to see pushed up, use git (and whatever git client you are using) to stage, commit and push the pages to your github fork - just like any other github change.

For now, this section assumes you know how to do that. We can add more details if necessary later.

## Viewing your changes on your github fork

To view your changes on the github-pages associated with your fork, you need to activate github-pages for the repo.

**Warning:** By doing this you are actually publishing your "pre-release" version of the site to the world. That's sort of OK, since you won't share the URL for the site with others (right??), and you get the benefit of seeing the github version of your changes before you do a pull request and they are published on the "official" version of the site. And, once your pull-request is accepted, your site will match the official site. That said, once you the edit/pull request process working and are confident that what you see locally is what you see on the official site, you might want to deactivate publishing your fork.
{: .notice--warning}

* Go to github.com and your fork of the "von" repository
* Go to "Settings" at the top of the page
* Scroll down on the "Options" (default) tab to the section "GitHub Pages"
* For source, select "_master branch /docs folder_" and click "Save"
* Navigate to https://<your github id>.github.io/von/ to see the site.
  * Note that it will take some time before the site is visible - perhaps several hours.