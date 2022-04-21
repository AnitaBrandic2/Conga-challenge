public with sharing class ApexProduct {
    @AuraEnabled(Cacheable=true)
    public static Product__c[] getAllProducts() {
        return [
            SELECT
                Id,
                Name,
                Description__c,
                Image__c,
                ProductName__c,
                Rating__c,
                Size__c
            FROM Product__c
            WITH SECURITY_ENFORCED
            ORDER BY Name
            LIMIT 50
        ];
    }
    @AuraEnabled(Cacheable=true)
    public static Product__c getProduct(Id recordId){
        return [
            SELECT
                Id,
                Name,
                Description__c,
                Image__c,
                ProductName__c,
                Rating__c,
                Size__c
            FROM Product__c
            WHERE id =:recordId
        ];
    }
}
