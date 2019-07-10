/**
 * Created by joannabak on 7/7/19.
 */

public with sharing class MyContactListController {

    @AuraEnabled
    public static List<Contact> getContacts(Id recordId) {
        return [Select Id, FirstName, LastName, Email, Phone From Contact Where AccountId = :recordId];
    }

}