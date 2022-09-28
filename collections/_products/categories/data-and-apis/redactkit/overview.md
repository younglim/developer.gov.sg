---
title: 'RedactKit - Protect Sensitive Data Without Losing Original Data'
layout: layout-page-sidenav
category: Data and APIs
_data: single-level-nav
sub_collection_render: true
single_level_nav: true
redirect_from:
    - /products/categories/data-and-apis/redactkit/
    - /products/categories/data-and-apis/redactkit.html
collection_group: [What's New]
description: RedactKit is a CLI tool that automates the redaction and un-redaction of sensitive data. Find out more here.
---

RedactKit is a CLI tool to redact and un-redact sensitive data from multiple log files on Government Standard Image Build (GSIB) devices.

GovTech Government Infrastructure Group (GIG), as the Infrastructure Engineer Capability Center, provides functional leadership to WOG. As part of this initiative, there are tools and processes that agencies can leverage for their technical operations work. This tool addresses the common issue GIG has faced during the Co-sourcing model with vendors and product principals.  


### Key Features  

- Redact sensitive data like internal IP addresses, emails, domain names, hostnames and SOE-IDs before sending them to product principles for troubleshooting. You can use `sed` and `grep` to redact sensitive data. But the original data is lost.

- RedactKit CLI tokenizes the sensitive data for later un-redaction if you need to deep dive into certain parts of the log file during troubleshooting.

### Benefits

**Saves time. Focus on what matters.**

Here is a sample redaction run on a log file with over 10k lines. If an engineer were to manually go through this it could take about ~6 hours.

```bash
[+] Redacted 10072 targets...
[+] Redacted results saved to ./redacted_test.txt
[+] Estimated total words : 29052
[+] Estimated total minutes saved : 388
[+] Estimated total man hours saved : 6
```

### Use Case

When user seek support from product principals, there may be instances where user will need to send logs with sensitive internal IP addresses, URLs, email addresses, SOE IDs etc. to them. Engineers will then need to manually eyeball and redact such data which could be time-consuming and prone to errors.

This tool enables engineers to automate this process and save time, thereby, reducing operation overheads and errors.

### Getting Started

The tool is available on software center as a Government Standard Software Package (GSSP) immediately. (GSSP_Python310 RedactKit_0.1.2)

Agency IT reps can opt to list it in WOG App Library for their respective agency's use.

### Pricing

Free for government agencies to self-deploy and manage. 

### Contact Us

{% include contact-us-form.html %} 
