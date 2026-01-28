import re
from urllib.parse import urlparse
import tldextract

# SCORING WEIGHTS
WEIGHT_IP_ADDRESS = 80 # IP Addresses uncommon in URLs
WEIGHT_SHORT_URL = 20 # Again not inhenrently dangerous, but all URL shorteners should be treated with care
WEIGHT_NO_HTTPS = 40 # Not inhenrenly dangerous just insecure connection
WEIGHT_SUBDOMAINS = 30 # Large number of subdomains usually uncommon
WEIGHT_DOMAIN_SPOOF = 100 # Domain spoof indicates intent to deceive
WEIGHT_LONG_URL = 10 # Long URLs can be an indicator of malicious link but not always
THRESHOLD_PHISHING = 70

def has_ip_address(url: str) -> bool:
    white_list = ["1.1.1.1"] # Known trusted IP addresses
    res = re.search(r"\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b", url)

    if res and res.group() not in white_list:
        return True
    return False

def has_shortened_url(url: str) -> bool:
    return any(domain in url for domain in ["bit.ly", "tinyurl.com", "ow.ly", "is.gd", "bitly.com"])

def check_https(url: str) -> bool:
    return urlparse(url).scheme == 'https'

def count_subdomain(url: str) -> int:
    ext = tldextract.extract(url)
    if not ext.subdomain:
        return 0
    return len(ext.subdomain.split('.'))

# Basic implementation, to be expanding with either bigger listing or replaced compltely with third party API
def check_domain_spoof(url: str) -> bool:
    ext = tldextract.extract(url)
    target_brands = ["facebook", "amazon", "apple", "netflix", "google"] # FAANG for now, expand later.
    
    for brand in target_brands:
        if brand in ext.subdomain and brand != ext.domain:
            return True           
    return False

def is_unusually_long(url: str, threshold: int = 200) -> bool:
    return len(url) > threshold

def perform_url_analysis(url: str):
    score = 0.0
    reasons = []

    if not check_https(url):
        score += WEIGHT_NO_HTTPS
        reasons.append('Your connection is not private. Attackers might be trying to steal your information.')

    if has_ip_address(url):
        score += WEIGHT_IP_ADDRESS
        reasons.append('URL contains an IP address, a common phishing tactic. Potential invalid SSL/TLS cert.')

    if has_shortened_url(url):
        score += WEIGHT_SHORT_URL
        reasons.append('URL uses a common URL shortning service, proceed with caution.')

    if count_subdomain(url) >= 3:
        score += WEIGHT_SUBDOMAINS
        reasons.append('URL has a suspicious number of subdomains, click here to read about subdomains.')

    if check_domain_spoof(url):
        score += WEIGHT_DOMAIN_SPOOF
        reasons.append('URL domain spoof indicates intent to deceive.')

    if is_unusually_long(url):
        score += WEIGHT_LONG_URL
        reasons.append('This URL is unusually long.')

    final_score = min(score, 100)

    return final_score, reasons

