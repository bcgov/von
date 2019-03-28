---
title: "Adding News Articles to vonx.io"
permalink: /how_to/adding-news-articles/
excerpt: "Some tips and tricks for adding news stories to vonx.io, including when starting from a Google Docs document"
last_modified_at: 2019-03-28T16:36:00-07:00
redirect_from:
  - /theme-setup/
toc: true
toc_sticky: true
---

The following is some guidance about adding news articles to the site. In the section below this

* Everything goes in the VON repository
   * Remember to use git commands to make sure your local copy of the repo is up-to-date when you start.
* Create the document in `docs/_news` called using the pattern of names already there
    * As necessary, update the document directly in an editor or from a converted Google Doc based on the instructions below.
* If necessary, create an images directory in `docs/assets/images/<name of document>` and put the images there.
* Verify the site updates using Jekyll.

## Converting Google Docs to Markdown

### Add references to all images in this style for Jekyll:

```
<figure>
  <img src="{{ '/assets/images/HLIndyBootCampVancouver2019-03-11/jinnysimsremarks.jpg' | relative_url }}" alt="The Honourable Jinny Sims - Opening Remarks">
  <figcaption>The Honourable Jinny Sims - Opening Remarks</figcaption>
</figure>
```
Suggest not putting any spaces in the image path/name.

Alternate style below is for a picture going into a non-Jekyll markdown page with licensing of the picture. This could also be used to give a credit for the picture. Note that in this method, a table is used for the picture to center it on the page.

```
|![HyperledgerIndyLogo](../images/introduction-to-hyperledger-indy/HL-Indy.png "Hyperledger Indy Logo")|
|:--:|
|*Licensed under [CC By 4.0](https://creativecommons.org/licenses/by/4.0/)*|
```


### Export the Document as HTML to get out a directory of the images

* File -> Download As... -> Web Page (HTML zipped)
* Extract from the zip file the "images" folder and put into Markdown folder named to match the document.
* Rename all of the images to match the names in your document.

### Generate the Markdown

Before you start, you must install the Google Doc add-on called Docs-to-Markdown

* Add-Ons -> Get add-ons...
* Search for and install "Docs-to-Markdown" by ed.bacher
* Install

To generate:

* Add-Ons -> Docs-to-Markdown -> Convert
* Optional - you may want to select "Demote Headings" if you are pasting the Markdown within a page that already has a title.
* Click "Markdown"
* Copy from the start of the text to the end and paste into Markdown document
* Clean up the warnings put into the document by the converter.

Tips:

* Review the markdown, but make corrections as much as possible in the Google Doc if you plan on continuing to evolve the document in Google Docs.
* Once you have an image in the document and working, you might want to remove the image and just leave the reference to the image that works in markdown, so you don't have to clean up the document after each conversion.
* Remember that Google Docs is more preceise than Markdown, so don't get too concerned about making everything perfect in Google Docs using things like "Ctrl-Enter" that don't get transfered across into Markdown.

