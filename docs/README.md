# Updating the VON Jekyll Pages

This document describes how to run the site locally and where to find the elements of the von repo's jekyll site.

## Running Locally

To run the jekyll pages locally, follow the instructions [here](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/), skipping the parts about creating a local repository (step 1) and generating Jekyll site files (step 3).  Those steps are handled when you fork and clone this repo so that you can contribute to the site.

## Locations of Content on the Site

* All documents are in the repos `docs` directory.
* The generated code (if you are testing locally) is in the `_site` folder
    * **Don't** edit this - it is all generated code that is not stored in the repo.
* Home page: `_pages/home.md`
* About page: `_pages/about.md`
* Terms and Privacy Policy page: `_pages/terms.md`
* News collection: `year-archive.md` - perhaps this needs to be removed?
* Jekyll settings, including some visible text chunks (e.g. site description, etc): `_config.yml`
    * There are a lot of config things in this file and you might want to scan it for elements to set/unset.
* Collections of documents ("Getting Started", etc.): `_getting_started` and `how_to` folder
    * Note that the number in the file names is NOT required (and should probably be removed).  The magic for the ordering of the files in the navigation (header, footer, sidebars) is the following:
        * The "permalink" in the document defines the relative URL for the file. E.g. the file `_getting_started/01-quick-start-guide.md` has the permalink `/getting_started/quick-start-guide`
        * The `docs/_data/navigation.yml` defines the navigation for the site header, footer and the sidebars (e.g. in "Getting Started"). Review that file to see examples of how to create/update the navigation elements.
* Images are in: `assets/images` folder
* List of authors for the site: `_data/authors.yml`
* List of randomly selected images on the home page: `_data/hero.yml`
* Text translations: `_data/ui-text.yml`
* Everything else is associated with layout, look and feel, etc. - things that only designers touch.
    * So if you aren't a designer, please don't touch...unless you are really sure of what you are doing.

If you are trying to update some existing text but can't find where it is, load up the repo in a good text editor (like [vscode](https://code.visualstudio.com/)) and then do a global search for the text you want to update.  Ignore the references to the text in the `_site` folder (that's generated code), but you should otherwise be able to find the live version of what you are after.