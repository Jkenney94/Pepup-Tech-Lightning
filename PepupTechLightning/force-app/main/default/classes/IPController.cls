public with sharing class IPController {
    public String ipAddress {get; private set;}

    public IPController() {
        ipAddress = '';

        ipAddress = ApexPages.currentPage().getHeaders().get('True-Client-IP');

        if(String.isBlank(ipAddress)) {
            ipAddress = ApexPages.currentPage().getHeaders().get('X-Salesforce-SIP');
        }
    }
}