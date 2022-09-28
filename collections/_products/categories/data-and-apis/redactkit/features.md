---
title: What are RedactKit's Features?
layout: layout-page-sidenav
description: Learn more about RedactKit's product features and its benefits to government agencies
single_level_nav: true
category: Data and APIs
_data: single-level-nav
---

### Demo

![demo](/assets/img/redactkit-demo.gif)

A python-based command line tool that helps you automate the redaction of common sensitive data from the log files. The tool can be used on GSIB via Powershell. Engineers can redact / un-redact sensitive log data using the tool.

The core redaction engine redacts the following list of data types from your log files. (Extensible to other types of data based on user-defined regular expressions).

- SG NRIC (M Series not included yet)
- Credit cards
- URLs
- Emails
- Ipv4
- Ipv6
- Base64
- SOE-ID