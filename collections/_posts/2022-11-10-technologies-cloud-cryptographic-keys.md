---
title: Technologies in Cloud to Protect Cryptographic Keys
layout: layout-blog
author: Alan Goh
description: >
  Cryptographic key management lifecycle

tags:
  - cryptographic key
  - key generation
  - crypto
  - key registration
  - key encrypting key
  - cryptographic key lifecycle
  - key management service
  - data integrity
  - data encryption key
  - customer-managed master key
  - hardware security module master key
---

This article outlines the Key Management System (KMS) technologies which are integral to protecting data confidentiality and integrity on Cloud. Topics covered in this article include various key types, the envelope encryption and implementation strength.

### UNDERLYING PROCESS OF KEY MANAGEMENT SYSTEMS 
The underlying keys for data protection (e.g. encryption and decryption) are depicted in the following table.

A KMS uses envelop encryption and multiple layers of keys to securely manage keys for the encrypted data. Envelope encryption combines a symmetric encryption algorithm, data encryption keys (DEKs) and key encryption keys (KEKs).
The diagram shows the various hierarchy of encryption keys used to protect data. For example, data is first encrypted with DEKs (lowest level) using envelope encryption, which is protected by KEKs (second level). The
latter is then protected by a CMK (third level) and an HMK (highest level). The CMK can also be a key that a Cloud Service Provider (CSP) manages. Agencies should use CMK for greater control over the key as it is generated and managed by the user.
