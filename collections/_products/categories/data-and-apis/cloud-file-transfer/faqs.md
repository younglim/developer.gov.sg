---
title: Cloud File Transfer FAQs
layout: layout-page-sidenav
description: Cloud File Transfer FAQs
single_level_nav: true
_data: single-level-nav
faqs-general:
  - name: What are the file formats supported by CFT?
    description: >
      insert table
  - name: What types of file hygiene mechanism does CFT have?
    description: >
      Malware Scanning at the moment. Content Disarm and Reconstruction (CDR) is an upcoming feature.
  - name: How can agency workload connect to the CFT API?
    description: >
      Agencies can connect via TGW (Transit Gateway) for internet and GEN TGW for Intranet and non-VPC endpoints. 
  - name: How do I start using CFT?
    description: >
      Click <a href="getting-started" target="_blank">here</a> to find out more.
  - name: What type of encryption does CFT support?
    description: >
      CFT supports industry and ICT&SS compliant standards for:
	  - Encryption at rest: Data is encrypted at-rest on the commercial cloud hosting environment with AWS S3 SSE-KMS (ICT&SS 8.3/S2).
	  - Encryption in transit: HTTPS over Transport Layer Security version 1.2 (TLS 1.2) and above (ICT&SS 3.1/S3).
	  - Files in CFT are encrypted in transit and at rest with industry-standard schemes like HTTPS and Amazon Web Services (AWS) Simple Storage Service Server Side Encryption Key Management Service (S3-SSE-KMS).
  - name: When can I start using CFT?
    description: >
      CFT is currently in closed beta and will reach GA in Q4FY22. You can register your interest as a pilot user <a href="https://form.gov.sg/#!/62280856ba91100012050933" target="_blank">here</a>.
---


{% include faqs-app.html sectionName="General" sectionDescription=page.section_description faqData=page.faqs-general %}

\