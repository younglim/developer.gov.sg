---
title: Purple HATS Use Cases
layout: layout-page-sidenav
description: USe Cases for Purple HATS
single_level_nav: true
_data: single-level-nav
---

### Example 1

A screen reader user provides feedback that they are not able to understand and navigate across the different website pages because all the navigational buttons read out as "Buttons".

**How Purple HATS can help:**

- Purple HATS can scan through the entire website to identify and provide a report on its accessibility-related code issues
- Using the report, developers will be able to quickly pick out similar code issues related to the feedback and refer to the WCAG clause which provides more information and possible solutions
- If the affected code is part of a component, fixing it at the component level may improve the accessibility across all other pages that uses the component
- The other accessibility issues in the report can also be used to plan the team’s accessibility roadmap.

### Example 2

A product owner is concerned about the state of their websites’ accessibility and looking to start improving accessibility.

**How Purple HATS can help:**

- Purple HATS scan not only provides a list of accessibility code issues, but the report also provides a recommendation on how these fixes should be prioritised. This enables product owners to have an overview of their website’s accessibility status at the code level
- This report can be used to relay information about the website's accessibility to stakeholders and aid in decisions around accessibility practices
- Based on the team's resourcing, the report can also be used to inform/guide the accessibility roadmap

### Example 3

A website is currently undergoing a sprint where accessibility fixes have been made, and a DevOps engineer would like to ensure that these fixes have not disrupted any other part of the code base.

**How Purple HATS can help:**

Agencies can run Purple HATS on any CI/CD tool which supports Docker-based runners. The specific instructions provided below are for SHIP GitLab.

The steps below will show you how to implement Purple HATS in the CI / CD pipeline:

1. Create a SHIP GitLab Testing Pipeline under your Project.
2. Build and push the Docker container.
<br>a. Purple HATS can be installed in a container environment using the included Docker template at Dockerfile.
<br>b. Build and push the image to your GitLab’s project’s container registry.
   
<figure style="text-align: center">
      <img src="/assets/img/purple-hats-fig-2.png" width="70%" height="70%" />
	      <figcaption>Fig 2: A screenshot of the Gitlab Editor.</figcaption>
    </figure><br />
<br>
<p></p>
3. Configure the pipeline on GitLab.
<br />&emsp;&nbsp;a. Create .gitlab-ci.yml in a test pipeline in the GitLab Editor.
<br />&emsp;          b. Copy the contents of gitlab-pipeline-template.yml and configure the following:
<br>.            i. Set any tags required to identify the GitLab runner you wish to run your pipeline, e.g. ship_docker.
<br>             ii. Replace <some registry> with the URL to docker image.
<br>             iii. Edit the accessibility scan parameters with the type of scan you want to run:
  <figure style="text-align: center">
      <img src="/assets/img/purple-hats-fig-3.png" width="70%" height="70%" />
	      <figcaption>Fig 3: Scanning with the Gitlab Editor.</figcaption>
    </figure><br />
<br>            iv. Commit the changes to GitLab.
<br>
<br>         c. Check to see if the pipeline starts by navigating to your project > CI/CD > Jobs. You will then see the job complete, and the following:
<br>            i. A summary of total issue count and issue breakdown will be in the job log.
<br>            ii. A generated Purple HATS report can be downloaded at “Job artefacts” panel on the right panel as shown in the screenshot below.
  <figure style="text-align: center">
      <img src="/assets/img/purple-hats-fig-4.png" width="70%" height="70%" />
	      <figcaption>Fig 4: A screenshot of the GitLab pipeline running an accessibility scan.</figcaption>
    </figure><br />
