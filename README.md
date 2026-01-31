# LinkSentinel

## Table of Contents

- [Introduction](#introduction)
- [Methodology](#methodology)
- [Implementation](#implementation)
- [Part 1: Backend](#part-1-backend)
- [Part 2: Frontend](#part-2-frontend)
- [Part 3: Database](#part-3-database)
- [Conclusion](#conclusion)

## Introduction

LinkSentinel is a full-stack security application designed to assess the phishing risk of URLs using deterministic heuristics informed by real-world phishing techniques

## Methodology

LinkSentinel performs heuristic-based URL analysis by extracting lexical and structural features from user supplied URLs and evaluating them against a weighted risk model.

## Implementation

LinkSentinel is a full stack web application that is built on the following technologies:

- Backend: Python with FastAPI
- Frontend: Next.js/Typescript/React
- Database: PostgreSQL

### Part 1: Backend

Python with FastAPI

### Part 2: Frontend

The frontend of LinkSentinel is built using Next.js/Typescript/React. 

### Part 3: Database

The database of LinkSentinel is built using PostgreSQL.

## Functionality

LinkSentinel works by taking in a URL from the user and analyzing it using a combination of techniques and weighting it against a set of criteria.

### Detection Signals (High-level)

LinkSentinel evaluates URLs using a weighted heuristic model. Each signal contributes to a cumulative risk score.

Key signals include:

- **IP address used as host**  
  Direct IP usage is uncommon in legitimate user-facing links and is frequently observed in phishing and malware delivery infrastructure.

- **URL shorteners**  
  Shortened URLs obscure the final destination and are commonly abused in phishing campaigns.

- **Lack of HTTPS**  
  Indicates an insecure transport layer and often correlates with low-effort or transient infrastructure.

- **Excessive subdomains**  
  Long or deeply nested subdomains can indicate domain obfuscation or spoofing attempts.

- **Domain spoofing patterns**  
  Identifies deceptive hostnames (e.g. `login.example.com.attacker.tld`).

- **Excessive URL length**  
  Overly long URLs may be used to conceal malicious parameters or evade visual inspection.

### Weighting model
> *Weights are empirical and subject to tuning as more samples are collected.*

```
WEIGHT_IP_ADDRESS = 80 # IP Addresses uncommon in URLs
WEIGHT_SHORT_URL = 20 # Again not inhenrently dangerous, but all URL shorteners should be treated with care
WEIGHT_NO_HTTPS = 35 # Not inhenrenly dangerous just insecure connection
WEIGHT_SUBDOMAINS = 30 # Large number of subdomains usually uncommon
WEIGHT_DOMAIN_SPOOF = 100 # Domain spoof indicates intent to deceive
WEIGHT_LONG_URL = 10 # Long URLs can be an indicator of malicious link but not always
THRESHOLD_PHISHING = 70
```

## Conclusion

TBD