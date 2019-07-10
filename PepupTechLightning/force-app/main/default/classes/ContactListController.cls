public with sharing class ContactListController {
    @AuraEnabled
    public static List<Contact> getContacts(){
        return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact];
    }
}