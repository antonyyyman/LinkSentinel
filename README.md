# LinkSentinel Writeup

## Table of Contents

- [Introduction](#introduction)
- [Methodology](#methodology)
- [Implementation](#implementation)
- [Part 1: Backend](#part-1-backend)
- [Part 2: Frontend](#part-2-frontend)
- [Part 3: Database](#part-3-database)
- [Conclusion](#conclusion)

## Introduction

LinkSentinel is a security tool that helps identify and manage potential security risks associated with external links. This writeup provides a detailed analysis of the tool's features, functionality, and potential use cases. To make a judgement of wether a URL is malicious or not, we must first understand the concept of a URL. A URL is a Uniform Resource Locator, it is a string of characters that locates a resource on the internet. This writeup will assume basic familiarity with URL structure and components. For more information, please refer to the Appendix at the end of this writeup. This writeup will also assume basic coding knowledge.

## Methodology

The analysis of LinkSentinel was conducted through a combination of static code analysis, dynamic testing, and user acceptance testing. The tool was evaluated based on its ability to identify and manage potential security risks associated with external links.

## Implementation

As this project is mainly to express my understanding of cybersecurity fundamentals, the implementation of LinkSentinel is not the focus of this writeup. Nevertheless, I will provide some basic insight into my development progress. Feel free to skip to the next section if you're not interested in development.

LinkSentinel is a full stack web application that is built on the following technologies:

- Backend: Python with FastAPI
- Frontend: Next.js/Typescript/React
- Database: PostgreSQL

### Part 1: Backend

Python with FastAPI is chosen as the backend framework. It is a modern, fast (high-performance), web framework for building APIs. It includes a plethora of libraries that are well suited for the overall project.

The main functionality is found in `utils.py`. It contains the functions that are used to analyze the URL. A call to the function is made in `main.py`. Of which the result is passed onto the frontend for display.

### Part 2: Frontend

The frontend of LinkSentinel is built using Next.js/Typescript/React. It provides a user interface for the user to interact with the tool. The frontend is responsible for displaying the results of the analysis.

### Part 3: Database

The database of LinkSentinel is built using PostgreSQL. It stores the links and their analysis results.

## Functionality

LinkSentinel works by taking in a URL from the user and analyzing it using a combination of techniques and weighting it against a set of criteria. The weights are as follows:

```
WEIGHT_IP_ADDRESS = 80 # IP Addresses uncommon in URLs
WEIGHT_SHORT_URL = 20 # Again not inhenrently dangerous, but all URL shorteners should be treated with care
WEIGHT_NO_HTTPS = 35 # Not inhenrenly dangerous just insecure connection
WEIGHT_SUBDOMAINS = 30 # Large number of subdomains usually uncommon
WEIGHT_DOMAIN_SPOOF = 100 # Domain spoof indicates intent to deceive
WEIGHT_LONG_URL = 10 # Long URLs can be an indicator of malicious link but not always
THRESHOLD_PHISHING = 70
```

In the context of web browsing, a URL is actually an IP address, or more accurately, the domain name is resolved to an IP address. This is done through a process called DNS resolution. For example typing `www.example.com` into a browser doesn't actually send you to `www.example.com`, that does not exist, rather, the Domain Name System which acts as the phonebook of the internet takes the domain name, looks it up against it's records, and sends you to the IP address associated with that domain name. This forms the backbone of the internet and is a crucial component of the web. Without it, to access `example.com` you would need to know and enter the IP address `93.184.216.34` into the address bar. Do you think you could do that for every website you visit? 

Modern web browsers do this automatically for you, but it is still important to understand the process, and to think about the security implications of it. This convenience provides actually already helps to prevent phishing attacks, as it's much easier for a human to remember example.com than 93.184.216.34. If I sent you `exanple.com` you'd have a much better chance at spotting the typo as opposed to `92.143.208.24`.

Having IP addresses as your domain name also present a plethora of other security concerns, namely lack of a HTTPS connection. 
> SSL certificates are assigned to domain names, not IP addresses, as IP addresses are prone to frequent changes. This means that if you are using an IP address as your domain name, you will not be able to use HTTPS, which means that your connection will not be encrypted. 

## Conclusion

LinkSentinel is a useful tool for organizations that need to identify and manage potential security risks associated with external links in their digital content. The tool is able to identify and manage potential security risks associated with external links in digital content.