---
title: Purple HATS - Automates web accessibility testing to find and fix accessibility problems
layout: layout-page-sidenav
category: Design
_data: single-level-nav
redirect_from:
    - /products/categories/design//purple-hats/
    - /products/categories/design//purple-hats.html
sub_collection_render: true
single_level_nav: true
collection_group: [What's New]
description: Purple HATS is a customisable automated testing tool that detects accessibility issues, helping developers to build more inclusive digital products.
---



Purple HATS is a customizable, automated web accessibility testing tool that allows software development teams to find and fix accessibility problems to improve the access of persons with disabilities (PWDs) to digital services.

Developed by the Accessibility (A11Y) team in GovTech’s Government Digital Services (GDS), Purple HATS is an open-source tool  that  developers to build more inclusive products during the product development process.  It helps product development teams rapidly scan and check for potential accessibility issues from their development machines or within their Continuous Integration/Continuous Delivery (CI/CD) pipeline with very basic command-line knowledge.

Purple HATS includes a bot that scans through and analyses web pages for accessibility issues. For example, the bot will check:

- Whether buttons are labelled and how they are read by assistive technology, such as screen readers. For example, if the ‘Submit’ button on a webpage is read out only as ‘Button’, a PWD will find it difficult to determine what specific action the button actually performs.
- Whether pictures or images are labelled correctly with alternate text (alt text) provided. Otherwise, the unlabeled images will be flagged as an accessibility issue, as blind or visually impaired users might have difficulty understanding the content of the images.

The bot then provides the impact of the accessibility issues by mapping them against the axe-core library of Deque System, a company that provides digital accessibility audits and software tools. Deque’s AXE accessibility testing engine is used to test the accessibility of websites and other HTML-based user interfaces.

The results of Purple HATS’s scans are then compiled in JSON format, and an HTML report is generated, providing users flexibility as to how they review accessibility findings. 

<figure style="text-align: center">
  <img
    src="/assets/img/purple-hats-accessibility-report-new.png" width="100%" height="100%"
  />
	  <figcaption>Fig 1: Sample screenshot of a Purple HATS report showing accessibility issues regarding images and links with missing alt text.</figcaption>
</figure>

### Key Features

- Automated accessibility testing tool based on axe-core engine
- Choice of sitemap or website scans
- Identification of accessibility issues based on WCAG 2.1 specifications
- Integration into CI/CD pipeline with single command-line 
- Accessibility reports generated in both JSON and HTML formats


### Awards and Recognition

- Purple HATS been listed in the [Digital Public Goods registry](https://digitalpublicgoods.net/registry/purple-hats.html){:target="\_blank"} by the [Digital Public Goods Alliance (DPGA)](https://digitalpublicgoods.net/who-we-are/){:target="\_blank"}. DPGA is a multistakeholder initiative supported by the Norwegian Agency for Development Cooperation (Norad), United Nations Development Programme (UNDP), and UNICEF.

- Purple HATS has been published as a case study in the [Case Study Library](https://oecd-opsi.org/innovations/purple-hats/){:target="\_blank"} of the OECD [Observatory of Public Sector Innovation (OPSI)](https://oecd-opsi.org){:target="\_blank"}.

### Pricing

Purple HATS is an open-source tool that is free to use. Check out the [Purple HATS listing](https://digitalpublicgoods.net/registry/purple-hats.html){:target="\_blank"} in the Digital Public Goods Registry.

### Contact Us

{% include contact-us-form.html %} 

