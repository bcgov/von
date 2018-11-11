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

Follow the guidance here if you are interested in updating the content on this site.  Like all of the work we're doing on VON, this documentation is open source and developed collaboratively.

## Prerequisites - what you need to know

This documentation is all maintained in the [VON github repo](https://github.com/bcgov/von) in a series of [markdown files](https://kramdown.gettalong.org/quickref.html) that are published using [Jekyll](https://jekyllrb.com/) (a website generator) to [github-pages](https://pages.github.com/) (a website publisher).

That means to help out with this you need to know the following:

* How to use git and github for forking, cloning, committing and submitting pull requests.
    * This [document](https://help.github.com/articles/fork-a-repo/) from GitHub describes the fork/clone a repo
    * This [document](https://help.github.com/articles/syncing-a-fork/) covers syncing your local copy with the main repo
    * This [document](https://help.github.com/articles/set-up-git/#next-steps-authenticating-with-github-from-git) covers how to authenticate with github
        * Use the "https" method unless you know what the "ssh" method is all about.
    * This [document](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) is about creating a pull request
* Using [markdown](https://github.github.com/gfm/) to create and update documents with an editor such as [Microsoft's Visual Studio Code](https://code.visualstudio.com/)
* Some other prerequisites are covered below if you want to see a local version of the site before you submit your changes.

## Getting Started - Fork/Clone the VON Repo

To be able to edit the pages that make up this site:

* Fork the VON repo - [https://github.com/bcgov/von](https://github.com/bcgov/von)
* Clone your fork locally so it is on your local system.

## Viewing the Jekyll site locally

To view the Jekyll site as you make edits, follow these steps. Note that the first step references a multi-step process, but you only need to complete the "Requirements" section.  The rest of the steps cover creating a new github-pages site, but you don't have to do that - you have this one.

> If you are on Windows, we **STRONGLY** recommend using [git bash](https://gitforwindows.org/) as your command line. There is a [Udemy course](https://www.udemy.com/git-bash/) about git bash if you need to learn more.

* Run just the [Requirements](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) section from this page.
    * That will ensure you have `ruby` and `bundle` installed.
* In a bash terminal session, go to the "docs" directory of your clone of the von repo.
* To prepare your machine, run the command: ```bundle install```
  * The command _should_ complete without errors. If you do get some errors, you will need to do some googling to figure out what's wrong on your machine. You will get frustrated...
* To view the site, run the command: ```bundle exec jekyll server --incremental```

The site should be running, and you can access it at: [http://localhost:4000](http://localhost:4000)

When you return to make more changes to the site you just need to run the last command - the ```bundle exec...``` command.

From time to time, you should run the command: ```bundle update```
  * This updates the libraries that jekyll is using to run the site, and they ~~change~~ improve over time.

## Locating Content

* All documents are in the repo's `docs` folder. Files and folders referenced below are all in that folder.
* The generated code (if you are testing locally) is in the `_site` folder
    * **Don't** edit this - it is all generated code that is not stored in the repo.
* Home page: `_pages/home.md`
* About page: `_pages/about.md`
* Clicky Things page: `_pages/clicky-things.md`
* Terms and Privacy Policy page: `_pages/terms.md`
* Jekyll settings, including some visible text chunks (e.g. site description, etc): `_config.yml`
    * There are a lot of config things in this file and you might want to scan it for elements to set/unset.
* Collections of documents ("Getting Started", etc.): `_getting_started` and `_how_to` folder
  * *Note*: The "permalink" value in the document defines the URL for the file - not the file name. 
      * E.g. the file `_getting_started/quick-start-guide.md` has the embedded permalink `/getting_started/quick-start-guide` that defines how to reference the file in the site.
* `docs/_data/navigation.yml` defines the navigation for the site header, footer and the sidebars (e.g. in "Getting Started"). Review that file to see examples of how to create/update the navigation elements.
    * The file uses permalinks to construct the navigational links, not the file names
* Images are in: `assets/images` folder
* List of authors for the site: `_data/authors.yml`
* List of randomly selected images on the home page: `_data/hero.yml`
* Text translations: `_data/ui-text.yml`
* Everything else in the `docs` folder is associated with layout, look and feel, etc. - things that only designers touch.
    * So if you aren't a designer, please don't touch...unless you are really, really (really) sure of what you are doing.

If you are trying to update some existing text but can't find where it is, load up the repo in a good text editor (like [vscode](https://code.visualstudio.com/)) and then do a global search for the text you want to update.  Ignore the references to the text in the `_site` folder (that's generated code), but you should otherwise be able to find the live version of what you are after.

## Editing Pages

To edit a page on the site, look for an appropriately named .md (markdown) file in `/docs/`. Find the page you want to update, edit it and serve the site locally (see earlier section) to view your changes.

You should be using a good text editor that gives you a preview of your markdown as you type, allowing you to correct most typos and layout issues as you go.

If you are running the local viewer process (see steps above), when you save the change in your text editor you will be able to refresh the corresponding localhost page and see your changes.

## Adding Pages

If you want to add a new page, you will have to learn more a bit more about using Jekyll and the theme we are using for the site ( [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)) as you may have to make multiple updates - notably, adding the page and adding a reference to it in `_data/navigation.yml`.

Alternatively:

* You can ask someone that knows how to create the page for you, and you can then add the content, or
* You can create the page with the content and ask someone that knows how to link the page into the rest of the site.

## Pushing your changes to github

> This section assumes you have a pretty good knowledge of using git and github to submit pull requests to a repo. Let us know if that's not the case and we can help you out.

Once you have made the changes you want to see pushed up, use git (and whatever git client you are using) to stage, commit (using [DCO signoff](https://stackoverflow.com/questions/1962094/what-is-the-sign-off-feature-in-git-for) - required!) and push the pages to your github fork - just like any other github change. When you are happy with the set of changes you have made, create a `Pull Request` and we'll be notified of your changes and can review and accept them.

Remember to update your fork/clone regularly to pick up changes made by others.

## Local Troubleshooting

We recommend using the incremental updates flag when running locally (e.g. `bundle exec jekyll serve --incremental`) so that you can make updates and immediately see the changes (refresh or navigate to the changed page). In some cases, the update doesn't show for no apparent reason (e.g. a header or footer navigation change). In that case - at least restart the server, and if that doesn't work, stop the server, remove the `_site` folder and then restart the server.  That will trigger a full regeneration of the site and all changes will be visible. If that still doesn't fix the problem, well - that means it's something else...  Did you save your file? :-)