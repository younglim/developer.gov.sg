
title: SearchSG FAQs
layout: layout-page-sidenav
description: SearchSG FAQs
single_level_nav: true
_data: single-level-nav
faqs:
  - name: What is the difference between web search engines and SearchSG?
    description: >
      SearchSG is an enterprise search engine which bridges the experience for users by providing more succinct and accurate results, as compared to web search engines, by customising for Singapore Government content and context.
  - name: How much will it cost to onboard SearchSG?
    description: >
      SearchSG is currently free for all Singapore government agencies to use.
  - name: I have successfully logged into CloudSCAPE with TechPass, but I am unable to view my CSP account(s).
    description: >
      Check with your Tenant Manager/Admin that you have been granted an eligible* GCC 2.0 User Role for the CSP account(s) that you would like to have access to.
      <br /><br />
      * All user roles, excluding “Tenant Billing Admin”, “Cloud Billing” & “Cloud AssumeRole” roles.
  - name: I have a TechPass account but I did not onboard to SEED previously. How do I onboard to SEED now?
    description: >
      You may follow the instructions <a href="https://docs.developer.tech.gov.sg/docs/security-suite-for-engineering-endpoint-devices/prerequisites-for-onboarding?id=seed-provisioning" target="_blank">here</a>
  - name: I do not see my Microsoft Azure and Google Cloud Platform cloud accounts being listed in CloudSCAPE.
    description: >
      CloudSCAPE currently supports deployments on AWS only. Support for Microsoft Azure and Google Cloud Platform will be available in the future.
---

{% include faqs-app.html sectionName="FAQs" sectionDescription=page.section_description faqData=page.faqs %}
